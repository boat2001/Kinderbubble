'use strict';

const express    = require('express');
const { body, validationResult } = require('express-validator');
const rateLimit  = require('express-rate-limit');
const router     = express.Router();
const { getDb }  = require('../db/database');

const regLimiter = rateLimit({
  windowMs: 60 * 60 * 1000,
  max: 10,
  message: { success: false, message: 'Too many event registrations.' },
});

/* GET /api/events?category=&upcoming=true */
router.get('/', async (req, res, next) => {
  try {
    const db        = getDb();
    const category  = req.query.category  || null;
    const upcoming  = req.query.upcoming  !== 'false';
    const limit     = Math.min(50, parseInt(req.query.limit || 20, 10));

    let query = db
      .from('events')
      .select('*')
      .eq('active', true)
      .order('event_date', { ascending: true })
      .limit(limit);

    if (upcoming) {
      query = query.gte('event_date', new Date().toISOString().slice(0, 10));
    }
    if (category) {
      query = query.eq('category', category);
    }

    const { data: events, error } = await query;
    if (error) throw error;

    /* Attach registration count per event */
    const withCounts = await Promise.all(events.map(async ev => {
      const { count, error: countError } = await db
        .from('event_registrations')
        .select('id', { count: 'exact', head: true })
        .eq('event_id', ev.id);
      if (countError) throw countError;
      return { ...ev, registrations: count || 0 };
    }));

    res.json({ success: true, data: withCounts, count: withCounts.length });
  } catch (err) {
    next(err);
  }
});

/* GET /api/events/:id */
router.get('/:id', async (req, res, next) => {
  try {
    const db    = getDb();
    const { data: event, error } = await db
      .from('events')
      .select('*')
      .eq('id', req.params.id)
      .eq('active', true)
      .maybeSingle();
    if (error) throw error;
    if (!event) return res.status(404).json({ success: false, message: 'Event not found.' });

    const { count, error: countError } = await db
      .from('event_registrations')
      .select('id', { count: 'exact', head: true })
      .eq('event_id', event.id);
    if (countError) throw countError;
    event.registrations = count || 0;
    res.json({ success: true, data: event });
  } catch (err) {
    next(err);
  }
});

/* POST /api/events/:id/register */
router.post('/:id/register',
  regLimiter,
  [
    body('name').trim().notEmpty().withMessage('Name is required.'),
    body('email').trim().isEmail().withMessage('A valid email is required.').normalizeEmail(),
  ],
  async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).json({ success: false, message: errors.array()[0].msg });
    }

    const eventId = parseInt(req.params.id, 10);
    const { name, email } = req.body;

    try {
      const db = getDb();
      const { data: event, error } = await db
        .from('events')
        .select('*')
        .eq('id', eventId)
        .eq('active', true)
        .maybeSingle();
      if (error) throw error;
      if (!event) return res.status(404).json({ success: false, message: 'Event not found.' });

      /* Check seat availability */
      if (event.max_seats) {
        const { count: regCount, error: countError } = await db
          .from('event_registrations')
          .select('id', { count: 'exact', head: true })
          .eq('event_id', eventId);
        if (countError) throw countError;
        if (regCount >= event.max_seats) {
          return res.status(409).json({ success: false, message: 'This event is fully booked.' });
        }
      }

      const { error: insertError } = await db
        .from('event_registrations')
        .insert({ event_id: eventId, name, email });
      if (insertError) throw insertError;
      res.status(201).json({ success: true, message: `You're registered for "${event.title}"! See you there.` });
    } catch (err) {
      if (err.code === '23505') {
        return res.status(409).json({ success: false, message: 'You are already registered for this event.' });
      }
      next(err);
    }
  }
);

module.exports = router;
