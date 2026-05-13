'use strict';

require('dotenv').config();
const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const morgan = require('morgan');
const path = require('path');
const rateLimit = require('express-rate-limit');

const db = require('./db/database');
const contactRouter = require('./routes/contact');
const newsletterRouter = require('./routes/newsletter');
const programsRouter = require('./routes/programs');
const eventsRouter = require('./routes/events');
const newsRouter = require('./routes/news');
const applicationsRouter = require('./routes/applications');

const app = express();
const PORT = process.env.PORT || 3000;
const distDir = path.join(__dirname, 'client', 'dist');
const distIndex = path.join(distDir, 'index.html');
const hasBuiltFrontend = require('fs').existsSync(distIndex);

app.use(
  helmet({
    contentSecurityPolicy: {
      directives: {
        defaultSrc: ["'self'"],
        scriptSrc: ["'self'", "'unsafe-inline'", 'cdnjs.cloudflare.com', 'cdn.jsdelivr.net', 'unpkg.com', 'fonts.googleapis.com'],
        styleSrc: ["'self'", "'unsafe-inline'", 'cdnjs.cloudflare.com', 'cdn.jsdelivr.net', 'fonts.googleapis.com', 'fonts.gstatic.com'],
        fontSrc: ["'self'", 'data:', 'fonts.gstatic.com', 'cdnjs.cloudflare.com', 'cdn.jsdelivr.net'],
        imgSrc: ["'self'", 'data:', 'blob:'],
        connectSrc: ["'self'"],
      },
    },
  })
);

app.use(
  cors({
    origin: process.env.ALLOWED_ORIGIN || '*',
    methods: ['GET', 'POST'],
  })
);

app.use(morgan(process.env.NODE_ENV === 'production' ? 'combined' : 'dev'));
app.use(express.json({ limit: '50kb' }));
app.use(express.urlencoded({ extended: false, limit: '50kb' }));

app.use('/assets', express.static(path.join(__dirname, 'assets'), {
  maxAge: process.env.NODE_ENV === 'production' ? '1d' : 0,
}));

if (hasBuiltFrontend) {
  app.use(express.static(distDir, { index: false, maxAge: process.env.NODE_ENV === 'production' ? '1d' : 0 }));
} else if (process.env.NODE_ENV !== 'production') {
  console.warn('Frontend build missing: run npm run frontend:build before production.');
}

const globalLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 200,
  standardHeaders: true,
  legacyHeaders: false,
  message: { success: false, message: 'Too many requests. Please try again later.' },
});
app.use('/api', globalLimiter);

app.use('/api/contact', contactRouter);
app.use('/api/newsletter', newsletterRouter);
app.use('/api/programs', programsRouter);
app.use('/api/events', eventsRouter);
app.use('/api/news', newsRouter);
app.use('/api/applications', applicationsRouter);

app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString(), env: process.env.NODE_ENV || 'development' });
});

const BUILD_REQUIRED_HTML = `<!DOCTYPE html><html lang="en"><head><meta charset="utf-8"><title>Build required</title></head><body style="font-family:system-ui,sans-serif;max-width:36rem;margin:3rem auto;padding:0 1rem;"><h1>Frontend not built</h1><p>Run <code>npm run frontend:build</code> then restart the server.</p></body></html>`;

app.get('*', (req, res) => {
  if (req.path.startsWith('/api')) {
    return res.status(404).json({ success: false, message: 'API endpoint not found.' });
  }
  if (hasBuiltFrontend) return res.sendFile(distIndex);
  return res.status(503).type('html').send(BUILD_REQUIRED_HTML);
});

app.use((err, req, res, next) => {
  console.error('[Error]', err.message);
  const status = err.status || 500;
  res.status(status).json({
    success: false,
    message: process.env.NODE_ENV === 'production' ? 'An unexpected error occurred.' : err.message,
  });
});

db.initialize();
app.listen(PORT, () => {
  console.log(`KinderBubble listening on http://localhost:${PORT} (${process.env.NODE_ENV || 'development'})`);
});

module.exports = app;
