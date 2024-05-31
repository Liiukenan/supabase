/*
 * @Date: 2024-05-31 10:08:46
 * @LastEditors: kenan
 * @LastEditTime: 2024-05-31 15:49:26
 */
import { getFakeAvatar } from '@/utils/employeeFakeHelper';
import supabase from '@/utils/supabase';
export async function signup(email, password) {
  let { data, error } = await supabase.auth.signUp({
    email: email,
    password: password,
    options: {
      data: {
        avatar: getFakeAvatar()
      }
    }
  })
  if(error){
    throw new Error(error.message)
  }
  return data;
}
