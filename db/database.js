'use strict';

const { createClient } = require('@supabase/supabase-js');

let supabase;

function requireEnv(name) {
  const value = process.env[name];
  if (!value) {
    throw new Error(`${name} is required. Add it to .env before starting the server.`);
  }
  return value;
}

function getDb() {
  if (!supabase) {
    const url = requireEnv('SUPABASE_URL');
    const key = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.SUPABASE_ANON_KEY;

    if (!key) {
      throw new Error('SUPABASE_SERVICE_ROLE_KEY is required for server writes. SUPABASE_ANON_KEY can be used only for read-only demos.');
    }

    supabase = createClient(url, key, {
      auth: {
        autoRefreshToken: false,
        persistSession: false,
      },
    });
  }

  return supabase;
}

function initialize() {
  getDb();
  console.log('[DB] Supabase client initialized');
}

module.exports = { getDb, initialize };
