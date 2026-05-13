'use strict';

const express   = require('express');
const router    = express.Router();
const { getDb } = require('../db/database');

/* GET /api/news?category=&limit= */
router.get('/', async (req, res, next) => {
  try {
    const db       = getDb();
    const category = req.query.category || null;
    const limit    = Math.min(50, parseInt(req.query.limit || 10, 10));
    const page     = Math.max(1, parseInt(req.query.page || 1, 10));
    const offset   = (page - 1) * limit;

    let query = db
      .from('news')
      .select('id, slug, title, excerpt, category, author, published_at', { count: 'exact' })
      .eq('published', true)
      .order('published_at', { ascending: false })
      .range(offset, offset + limit - 1);

    if (category) {
      query = query.eq('category', category);
    }

    const { data: articles, error, count } = await query;
    if (error) throw error;

    res.json({ success: true, data: articles, pagination: { page, limit, total: count || 0, pages: Math.ceil((count || 0) / limit) } });
  } catch (err) {
    next(err);
  }
});

/* GET /api/news/:slug */
router.get('/:slug', async (req, res, next) => {
  try {
    const db      = getDb();
    const { data: article, error } = await db
      .from('news')
      .select('*')
      .eq('slug', req.params.slug)
      .eq('published', true)
      .maybeSingle();
    if (error) throw error;
    if (!article) return res.status(404).json({ success: false, message: 'Article not found.' });
    res.json({ success: true, data: article });
  } catch (err) {
    next(err);
  }
});

module.exports = router;
