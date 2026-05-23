'use strict';

const express    = require('express');
const { body, validationResult } = require('express-validator');
const rateLimit  = require('express-rate-limit');
const router     = express.Router();
const { getDb }  = require('../db/database');
const mailer     = require('../services/mailer');

const appLimiter = rateLimit({
  windowMs: 24 * 60 * 60 * 1000,  // 24 hours
  max: 3,
  message: { success: false, message: 'Application limit reached. Please contact admissions directly.' },
});

const validate = [
  body('firstName').trim().notEmpty().withMessage('First name is required.').isLength({ max: 80 }),
  body('lastName').trim().notEmpty().withMessage('Last name is required.').isLength({ max: 80 }),
  body('email').trim().isEmail().withMessage('A valid email is required.').normalizeEmail(),
  body('phone').optional().trim().isLength({ max: 30 }),
  body('dob').optional().isISO8601().withMessage('Date of birth must be a valid date.'),
  body('programId').optional().isInt({ min: 1 }).withMessage('Invalid program.'),
  body('entryYear').optional().trim().isLength({ max: 10 }),
  body('qualifications').optional().trim().isLength({ max: 2000 }),
  body('statement').optional().trim().isLength({ max: 3000 }),
];

/* POST /api/applications */
router.post('/', appLimiter, validate, async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({ success: false, message: errors.array()[0].msg });
  }

  const { firstName, lastName, email, phone, dob, programId, entryYear, qualifications, statement } = req.body;

  try {
    const db = getDb();

    /* Check for duplicate application (same email + program) */
    if (programId) {
      const { data: dup, error: dupError } = await db
        .from('applications')
        .select('id')
        .eq('email', email)
        .eq('program_id', programId)
        .maybeSingle();
      if (dupError) throw dupError;
      if (dup) {
        return res.status(409).json({ success: false, message: 'An application for this program already exists for this email address.' });
      }
    }

    const { data, error } = await db
      .from('applications')
      .insert({
        first_name: firstName,
        last_name: lastName,
        email,
        phone: phone || null,
        dob: dob || null,
        program_id: programId || null,
        entry_year: entryYear || null,
        qualifications: qualifications || null,
        statement: statement || null,
      })
      .select('id')
      .single();

    if (error) throw error;

    const reference = `KB-${String(data.id).padStart(6, '0')}`;
    let emailStatus = 'sent';
    let emailError = null;

    try {
      await mailer.sendApplicationConfirmation({ firstName, lastName, email, reference, programName: programId ? `Program #${programId}` : null });
    } catch (mailError) {
      emailStatus = 'failed';
      emailError = mailError.message || 'Email delivery failed.';
      console.error('[Mailer] Application email failed:', emailError);
    }

    const { error: updateError } = await db
      .from('applications')
      .update({ email_status: emailStatus, email_error: emailError })
      .eq('id', data.id);
    if (updateError) console.error('[DB] Unable to update application email status:', updateError.message);

    res.status(201).json({
      success: true,
      message: `Application submitted successfully! Your reference number is ${reference}.`,
      applicationId: data.id,
      reference,
      emailStatus,
    });
  } catch (err) {
    next(err);
  }
});

/* GET /api/applications/:ref — track application status */
router.get('/:ref', async (req, res, next) => {
  const ref = req.params.ref.toUpperCase().replace('KB-', '');
  const id  = parseInt(ref, 10);

  if (isNaN(id)) {
    return res.status(400).json({ success: false, message: 'Invalid reference number.' });
  }

  try {
    const db = getDb();
    const { data: app, error } = await db
      .from('applications')
      .select('id, first_name, last_name, email, program_id, entry_year, status, created_at')
      .eq('id', id)
      .maybeSingle();

    if (error) throw error;

    if (!app) return res.status(404).json({ success: false, message: 'Application not found.' });

    res.json({
      success: true,
      data: {
        reference: `KB-${String(app.id).padStart(6, '0')}`,
        name: `${app.first_name} ${app.last_name}`,
        status: app.status,
        entryYear: app.entry_year,
        submittedAt: app.created_at,
      },
    });
  } catch (err) {
    next(err);
  }
});

module.exports = router;
