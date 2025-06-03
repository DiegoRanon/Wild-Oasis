import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://kirzcizpmcnhdxozfnkc.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtpcnpjaXpwbWNuaGR4b3pmbmtjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDg2MDg3MzYsImV4cCI6MjA2NDE4NDczNn0.u0Eke1ldKns5nBynmmrTQ0wEXXdYTdPHPGQ0_w2zYqM";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
