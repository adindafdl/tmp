import { createClient } from '@supabase/supabase-js';
import type { Database } from './database.types';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;

if (!supabaseUrl) {
  throw new Error('[Supabase] NEXT_PUBLIC_SUPABASE_URL harus diisi di .env.local');
}

/**
 * Untuk pemanggilan server-side saja (API routes).
 * Frontend publik memakai /api/public/* tanpa anon key browser.
 */
export function createServerSupabaseClient() {
  const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY!;
  if (!serviceRoleKey) {
    throw new Error('[Supabase] SUPABASE_SERVICE_ROLE_KEY harus diisi di .env.local');
  }
  return createClient<Database>(supabaseUrl, serviceRoleKey, {
    auth: { persistSession: false },
  });
}
