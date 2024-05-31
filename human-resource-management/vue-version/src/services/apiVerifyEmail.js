/*
 * @Date: 2024-05-31 10:08:46
 * @LastEditors: kenan
 * @LastEditTime: 2024-05-31 16:08:30
 */
import supabase from "@/utils/supabase"
export async function verifyEmail(email, token) {
  const { data, error } = await supabase.auth.verifyOtp({
    email,
    token,
    type: 'email'
  })
  if(error){
    throw new Error(error.message)
  }
  return data;
}
