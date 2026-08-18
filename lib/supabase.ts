import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://iqueulndbdvwyyfmsmop.supabase.co';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlxdWV1bG5kYmR2d3l5Zm1zbW9wIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODY4Mjg0NjUsImV4cCI6MjEwMjQwNDQ2NX0.OO7bjOSEcigv2fIAe4mtYZ1NRX7ewHADyWdAbYPOGLk';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
