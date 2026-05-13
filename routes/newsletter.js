'use strict';

const express    = require('express');
const { body, validationResult } = require('express-validator');
const rateLimit  = require('express-rate-limit');
const router     = express.Router();
const { getDb }  = require('../db/database');

const nlLimiter = rateLimit({
  windowMs: 60 * 60 * 1000,
  max: 3,
  message: { success: false, message: 'Too many subscription attempts.' },
});

/* POST /api/newsletter */
router.post('/',
  nlLimiter,
  body('email').trim().isEmail().withMessage('A valid email address is required.').normalizeEmail(),
  async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).json({ success: false, message: errors.array()[0].msg });
    }

    const { email } = req.body;

    try {
      const db = getDb();
      const { data: existing, error: findError } = await db
        .from('newsletter_subscribers')
        .select('id, status')
        .eq('email', email)
        .maybeSingle();

      if (findError) throw findError;

      if (existing) {
        if (existing.status === 'active') {
          return res.json({ success: true, message: 'You are already subscribed to our newsletter.' });
        }
        /* Re-subscribe if previously unsubscribed */
        const { error } = await db
          .from('newsletter_subscribers')
          .update({ status: 'active' })
          .eq('email', email);
        if (error) throw error;
        return res.json({ success: true, message: 'Welcome back! You have been re-subscribed.' });
      }

      const { error } = await db.from('newsletter_subscribers').insert({ email });
      if (error) throw error;
      res.status(201).json({ success: true, message: 'Thank you for subscribing to the KinderBubble College newsletter!' });
    } catch (err) {
      next(err);
    }
  }
);

/* DELETE /api/newsletter/unsubscribe?email=... */
router.delete('/unsubscribe', async (req, res, next) => {
  const email = req.query.email;
  if (!email) return res.status(400).json({ success: false, message: 'Email query parameter is required.' });

  try {
    const db = getDb();
    const { error } = await db
      .from('newsletter_subscribers')
      .update({ status: 'unsubscribed' })
      .eq('email', email);
    if (error) throw error;
    res.json({ success: true, message: 'You have been unsubscribed successfully.' });
  } catch (err) {
    next(err);
  }
});

module.exports = router;
