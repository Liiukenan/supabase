/*
 * @Date: 2024-05-31 10:08:46
 * @LastEditors: kenan
 * @LastEditTime: 2024-05-31 15:38:47
 */
import supabase from '@/utils/supabase'
export async function getEmployees() {
  let { data: employee, error } = await supabase.from('employee').select('*')

  if (error) {
    throw new Error(error.message)
  }
  return employee
}

export async function getEmployee(id) {}

export async function updateEmployee(id, updateObj) {}

export async function deleteEmployee(id) {}

export async function insertEmployee(employee) {}
