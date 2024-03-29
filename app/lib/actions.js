'use server'
import { redirect } from 'next/navigation'
import { Product, User } from './models'
import { connectToDB } from './utils.js'
import { revalidatePath } from 'next/cache'
import bcrypt from 'bcrypt'
import { signIn } from './auth'

export const addUser = async (formData) => {
  // 'use server'

  const { username, email, password, img, phone, address, isAdmin, isActive } =
    Object.fromEntries(formData)

  try {
    connectToDB()

    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, salt)

    const newUser = new User({
      username,
      email,
      password: hashedPassword,
      img,
      phone,
      address,
      isAdmin,
      isActive
    })
    console.log(newUser)
    await newUser.save()
  } catch (err) {
    console.log(err)
    throw new Error('Failed to create user!')
  }

  revalidatePath('/dashboard/users')
  redirect('/dashboard/users')
}

export const updateUser = async (formData) => {
  const {
    id,
    username,
    email,
    password,
    img,
    phone,
    address,
    isAdmin,
    isActive
  } = Object.fromEntries(formData)

  const noSpaces = password.trim()
  console.log('noSpaces', noSpaces)
  const hashedPassword = async (noSpaces) => {
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(noSpaces, salt)
    return hashedPassword
  }

  try {
    connectToDB()

    const oneOf =
      noSpaces === '' || undefined ? noSpaces : await hashedPassword(noSpaces)

    const updateFields = {
      username,
      email,
      password: oneOf,
      img,
      phone,
      address,
      isAdmin,
      isActive
    }

    Object.keys(updateFields).forEach(
      (key) =>
        (updateFields[key] === '' || undefined) && delete updateFields[key] // удаляем ключ объекта если он пустой, и в базу улетают только те данные которые были введены в форму
    )

    await User.findByIdAndUpdate(id, updateFields)
    console.log('saved to db')
  } catch (err) {
    console.log('actions updateUser', err)
    throw new Error('Не удалось обновить пользователя!')
  }

  revalidatePath('/dashboard/users')
  redirect('/dashboard/users')
}

export const deleteUser = async (formData) => {
  const { id } = Object.fromEntries(formData)

  try {
    connectToDB()
    await User.findByIdAndDelete(id)
  } catch (err) {
    console.log(err)
    throw new Error('Failed to delete user!')
  }

  revalidatePath('/dashboard/products')
}

export const addProduct = async (formData) => {
  const { title, desc, img, price, stock, color, size } =
    Object.fromEntries(formData)
  console.log('formData', formData)
  try {
    connectToDB()

    const newProduct = new Product({
      title,
      desc,
      img,
      price,
      stock,
      color,
      size
    })

    console.log('newProduct', newProduct)

    await newProduct.save()
  } catch (err) {
    console.log(err)
    throw new Error('Failed to create product!')
  }

  revalidatePath('/dashboard/products')
  redirect('/dashboard/products')
}

export const updateProduct = async (formData) => {
  const { id, title, desc, img, price, stock, color, size } =
    Object.fromEntries(formData)

  try {
    connectToDB()

    const updateFields = {
      title,
      desc,
      img,
      price,
      stock,
      color,
      size
    }

    Object.keys(updateFields).forEach(
      (key) =>
        (updateFields[key] === '' || undefined) && delete updateFields[key]
    )

    await Product.findByIdAndUpdate(id, updateFields)
  } catch (err) {
    console.log(err)
    throw new Error('Failed to update product!')
  }

  revalidatePath('/dashboard/products')
  redirect('/dashboard/products')
}

export const deleteProduct = async (formData) => {
  const { id } = Object.fromEntries(formData)

  try {
    connectToDB()
    await Product.findByIdAndDelete(id)
  } catch (err) {
    console.log(err)
    throw new Error('Failed to delete product!')
  }

  revalidatePath('/dashboard/products')
}

export const authenticate = async (prevState, formData) => {
  const { username, password } = Object.fromEntries(formData)

  try {
    await signIn('credentials', { username, password })
    console.log('actions authenticate ВОШЕЛ')
  } catch (err) {
    console.log('actions authenticate не не ВОШЕЛ')
    if (err.message.includes('CredentialsSignin')) {
      return 'Wrong Credentials'
    }
    throw err
  }
}

export const register = async (prevState, formData) => {
  const { username, password, passwordRepeat } = Object.fromEntries(formData)

  if (password !== passwordRepeat) {
    // throw new Error('Пароли не совпадают')
    return { error: 'Пароли не совпадают' }
  }
  try {
    connectToDB()

    const user = await User.findOne({ username })

    if (user) {
      return { error: 'Имя пользователя уже занято' }
    }

    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, salt)

    const newUser = new User({
      username,
      email: `${username}@${username}.ru`,
      password: hashedPassword
    })

    await newUser.save()
    console.log(
      'register: пользователь и учетная запись сохранены в базе данных'
    )

    return { success: true }
  } catch (err) {
    console.log(err)
    return { error: 'При создание User что то пошло не так' }
  }
}
// из документации
// export async function authenticate(prevState, formData) {
//   const { username, password } = Object.fromEntries(formData)
//   try {
//     await signIn('credentials', { username, password })
//   } catch (error) {
//     if (error) {
//       switch (error.type) {
//         case 'CredentialsSignin':
//           console.log(
//             'ЭКШЕН authenticate: Неверные учетные данные. 10',
//             error.type
//           )
//           return 'Неверные учетные данные.'
//         default:
//           console.log(
//             'ЭКШЕН authenticate: Что-то пошло не так. {?-4}',
//             error.message
//           )

//           throw error
//       }
//     }
//     throw error
//   }
// }
