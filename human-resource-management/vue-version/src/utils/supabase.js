/*
 * @Date: 2024-05-31 10:49:34
 * @LastEditors: kenan
 * @LastEditTime: 2024-05-31 11:02:04
 */
import { createClient } from '@supabase/supabase-js'
import { getConfig } from './configHelper'
const supabaseUrl = getConfig('SUPABASE_URL')
const supabaseKey = getConfig('SUPABASE_KEY')
const supabase = createClient(supabaseUrl, supabaseKey)
export default supabase