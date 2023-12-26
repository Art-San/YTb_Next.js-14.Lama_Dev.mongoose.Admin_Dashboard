import { redirect } from 'next/navigation'
import { User } from './models'
import { connectToDB } from './utils.js'
import { revalidatePath } from 'next/cache'

export const addUser = async (formData) => {
  'use server'
  const { username, email, password, phone, address, isAdmin, isActive } =
    Object.fromEntries(formData)

  try {
    connectToDB()

    const newUser = new User({
      username,
      email,
      password,
      phone,
      address,
      isAdmin,
      isActive
    })

    await newUser.save()
  } catch (err) {
    console.log(err)
    throw new Error('Failed to create user!')
  }

  revalidatePath('/dashboard/users')
  redirect('/dashboard/users')
}
