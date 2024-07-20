import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://jgjlybghotjdqyxjaral.supabase.co";

const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Impnamx5Ymdob3RqZHF5eGphcmFsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjA4MzI2MTIsImV4cCI6MjAzNjQwODYxMn0.SBwNVWez3kKnFjBq8caLm6_2jb-RiaZHGbWmEYDNFjg";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
