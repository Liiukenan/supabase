/*
 * @Date: 2024-05-31 10:08:46
 * @LastEditors: kenan
 * @LastEditTime: 2024-05-31 16:20:26
 */
import supabase from "@/utils/supabase"
export async function login(email, password) {
  let { data, error } = await supabase.auth.signInWithPassword({
    email,
    password
  })
  return data;
}
