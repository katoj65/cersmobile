import { createClient } from '@supabase/supabase-js';
export default function connect(){
const supabase = createClient('https://qrouxhunygyunvscrxtx.supabase.co','eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFyb3V4aHVueWd5dW52c2NyeHR4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODcwNzE3NDMsImV4cCI6MjAwMjY0Nzc0M30.0xquRGbZS275EAAC0wQGTKRsINuRwsQ-CvW-eWRXZqU');
return supabase;

}