'use strict';

const express   = require('express');
const router    = express.Router();
const { getDb } = require('../db/database');

/* GET /api/programs */
router.get('/', async (req, res, next) => {
  try {
    const db       = getDb();
    const category = req.query.category || null;

    let query = db.from('programs').select('*').eq('active', true).order('title', { ascending: true });
    if (category) query = query.eq('category', category);

    const { data, error } = await query;
    if (error) throw error;

    res.json({ success: true, data, count: data.length });
  } catch (err) {
    next(err);
  }
});

/* GET /api/programs/:slug */
router.get('/:slug', async (req, res, next) => {
  try {
    const db      = getDb();
    const { data: program, error } = await db
      .from('programs')
      .select('*')
      .eq('slug', req.params.slug)
      .eq('active', true)
      .maybeSingle();

    if (error) throw error;

    if (!program) {
      return res.status(404).json({ success: false, message: 'Program not found.' });
    }
    res.json({ success: true, data: program });
  } catch (err) {
    next(err);
  }
});

module.exports = router;
