'use strict';

const express    = require('express');
const { body, validationResult } = require('express-validator');
const rateLimit  = require('express-rate-limit');
const router     = express.Router();
const { getDb }  = require('../db/database');
const mailer     = require('../services/mailer');

/* Strict rate limit for contact submissions */
const contactLimiter = rateLimit({
  windowMs: 60 * 60 * 1000,   // 1 hour
  max: 5,
  message: { success: false, message: 'Too many submissions. Please wait before trying again.' },
});

const validate = [
  body('firstName').trim().notEmpty().withMessage('First name is required.').isLength({ max: 80 }),
  body('lastName').trim().notEmpty().withMessage('Last name is required.').isLength({ max: 80 }),
  body('email').trim().isEmail().withMessage('A valid email is required.').normalizeEmail(),
  body('phone').optional().trim().isLength({ max: 30 }),
  body('program').optional().trim().isLength({ max: 100 }),
  body('source').optional().trim().isLength({ max: 80 }),
  body('pagePath').optional().trim().isLength({ max: 300 }),
  body('message').trim().notEmpty().withMessage('Message is required.').isLength({ min: 10, max: 2000 }),
];

/* POST /api/contact */
router.post('/', contactLimiter, validate, async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({ success: false, message: errors.array()[0].msg });
  }

  const { firstName, lastName, email, phone, program, message, source, pagePath } = req.body;

  try {
    const db = getDb();
    const { data, error } = await db
      .from('contacts')
      .insert({
        first_name: firstName,
        last_name: lastName,
        email,
        phone: phone || null,
        program: program || null,
        message,
        source: source || 'contact',
        page_path: pagePath || null,
      })
      .select('id')
      .single();

    if (error) throw error;

    let emailStatus = 'sent';
    let emailError = null;

    try {
      await mailer.sendContactNotification({ firstName, lastName, email, phone, program, message, source, pagePath });
    } catch (mailError) {
      emailStatus = 'failed';
      emailError = mailError.message || 'Email delivery failed.';
      console.error('[Mailer] Contact notification failed:', emailError);
    }

    const { error: updateError } = await db
      .from('contacts')
      .update({ email_status: emailStatus, email_error: emailError })
      .eq('id', data.id);
    if (updateError) console.error('[DB] Unable to update contact email status:', updateError.message);

    res.status(201).json({
      success: true,
      message: emailStatus === 'sent'
        ? 'Thank you! Your message has been received. We will get back to you shortly.'
        : 'Thank you! Your message has been saved. Email notification is temporarily unavailable, but the office can still review it.',
      id: data.id,
      emailStatus,
    });
  } catch (err) {
    next(err);
  }
});

/* GET /api/contact — list (protected by basic auth header in production) */
router.get('/', async (req, res, next) => {
  const apiKey = req.headers['x-api-key'];
  if (process.env.ADMIN_API_KEY && apiKey !== process.env.ADMIN_API_KEY) {
    return res.status(401).json({ success: false, message: 'Unauthorized.' });
  }

  try {
    const db     = getDb();
    const page   = Math.max(1, parseInt(req.query.page || 1, 10));
    const limit  = Math.min(50, parseInt(req.query.limit || 20, 10));
    const offset = (page - 1) * limit;
    const status = req.query.status || null;

    let query = db
      .from('contacts')
      .select('*', { count: 'exact' })
      .order('created_at', { ascending: false })
      .range(offset, offset + limit - 1);

    if (status) query = query.eq('status', status);

    const { data, error, count } = await query;
    if (error) throw error;

    res.json({ success: true, data, pagination: { page, limit, total: count || 0, pages: Math.ceil((count || 0) / limit) } });
  } catch (err) {
    next(err);
  }
});

module.exports = router;
