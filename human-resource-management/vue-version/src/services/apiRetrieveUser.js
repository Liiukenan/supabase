/*
 * @Date: 2024-05-31 10:08:46
 * @LastEditors: kenan
 * @LastEditTime: 2024-05-31 16:19:41
 */
import { getConfig } from '@/utils/configHelper'
import { getItem } from '@/utils/localstorageHelper'
import supabase from '@/utils/supabase';
const SUPABASE_AUTH_KEY = getConfig('SUPABASE_AUTH_KEY')

export async function retrieveUser() {
  const jwt=getItem(SUPABASE_AUTH_KEY).access_token;
  const {
    data,
    error
  } = await supabase.auth.getUser(jwt)
  return data.user;
}
