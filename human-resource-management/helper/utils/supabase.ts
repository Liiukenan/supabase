/*
 * @Date: 2024-05-31 10:08:46
 * @LastEditors: kenan
 * @LastEditTime: 2024-05-31 10:24:29
 */
import { createClient } from '@supabase/supabase-js';
const supabaseUrl = process.env.SUPABASE_URL || '';

// TODO: set your own supabase key
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.ewogICJyb2xlIjogInNlcnZpY2Vfcm9sZSIsCiAgImlzcyI6ICJzdXBhYmFzZSIsCiAgImlhdCI6IDE3MTcwODQ4MDAsCiAgImV4cCI6IDE4NzQ4NTEyMDAKfQ.77nZgNajhl1KV2ylJ4L4gU51LKAqAucfGCh_n9cViOM';
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
