// src/supabaseClient.js
import { createClient } from '@supabase/supabase-js';

// Prefer Vite envs. Fallback to provided public anon key if envs are missing.
const envSupabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const envSupabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

const fallbackSupabaseUrl = 'https://ypmnoiirxuqyierdbwkl.supabase.co';
const fallbackSupabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlwbW5vaWlyeHVxeWllcmRid2tsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTgxOTQ3MzcsImV4cCI6MjA3Mzc3MDczN30.iDHaMKPJ4Ql13_1el0foFgQK5sc8CbCqsbFWFaudJjk';

const resolvedSupabaseUrl = envSupabaseUrl || fallbackSupabaseUrl;
const resolvedSupabaseAnonKey = envSupabaseAnonKey || fallbackSupabaseAnonKey;

if (!envSupabaseUrl || !envSupabaseAnonKey) {
  // eslint-disable-next-line no-console
  console.warn('[supabase] Using fallback public anon key from code. Set VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY in .env.local to override.');
}

const supabase = createClient(resolvedSupabaseUrl, resolvedSupabaseAnonKey);

export default supabase;
