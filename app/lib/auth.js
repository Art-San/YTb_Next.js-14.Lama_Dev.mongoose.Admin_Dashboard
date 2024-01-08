import NextAuth from 'next-auth'
import GitHub from 'next-auth/providers/github'
import CredentialsProvider from 'next-auth/providers/credentials'
import { authConfig } from './auth.config'
import { connectToDB } from './utils'
import { User } from './models'
import bcrypt from 'bcrypt'
// import Credentials from 'next-auth/providers/credentials'

const login = async (credentials) => {
  try {
    connectToDB()
    const user = await User.findOne({ username: credentials.username })

    if (!user || !user.isAdmin) throw new Error('не юзер или админ!')

    const isPasswordCorrect = await bcrypt.compare(
      credentials.password,
      user.password
    )

    if (!isPasswordCorrect) throw new Error('пароль не верный!')

    return user
  } catch (err) {
    console.log('auth login err.message {-1}', err.message) // 'не юзер или админ!' ИЛИ 'пароль не верный!'
    throw new Error(err.message)
  }
}

export const { signIn, signOut, auth } = NextAuth({
  ...authConfig,
  providers: [
    GitHub({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET
    }),
    // Credentials({ https://nextjs.org/learn/dashboard-app/adding-authentication#:~:text=%7D)%3B-,Adding%20the%20Credentials%20provider,-Next%2C%20you%20will
    CredentialsProvider({
      async authorize(credentials) {
        try {
          const user = await login(credentials)
          console.log('auth NextAuth ser {1}', user) // есть user
          return user
        } catch (err) {
          console.log('auth authorize err.message {-2}', err.message) // object {} или / 'не юзер или админ!' ИЛИ 'пароль не верный!'
          {
            /*FIXME: Важный момент return null*/
          }

          return null
          // return err // <<<< должен быть NULL как в примерах ниже
        }
      }
    })
  ]
  // ADD ADDITIONAL INFORMATION TO SESSION
  // callbacks: {
  //   async jwt({ token, user }) {
  //     console.log('auth jwt user {2} :', user)
  //     if (user) {
  //       token.name = user.username
  //       token.picture = user.img
  //     }
  //     // console.log('auth jwt token {3} :', token)
  //     return token
  //   },
  //   async session({ session, token }) {
  //     // console.log('auth jwt token {4} :', token)
  //     // console.log('auth jwt session {5} :', session)
  //     if (token) {
  //       session.user.name = token.name // Поля переписаны, не так как у меня в модели
  //       session.user.image = token.picture
  //     }
  //     // if (token) { // какая-то неразбериха с полями
  //     //   session.user.username = token.name
  //     //   session.user.img = token.picture
  //     // }
  //     // console.log('auth jwt session {6} :', session)
  //     return session
  //   }
  // }
})
//                      ПРИМЕРЫ из документации
// https://authjs.dev/getting-started/providers/credentials-tutorial#:~:text=pages/api/auth/%5B...nextauth%5D.ts
// import NextAuth from 'next-auth'
// import CredentialsProvider from 'next-auth/providers/credentials'

// export default NextAuth({
//   providers: [
//     CredentialsProvider({
//       async authorize(credentials) {
//         const authResponse = await fetch('/users/login', {
//           method: 'POST',
//           headers: {
//             'Content-Type': 'application/json'
//           },
//           body: JSON.stringify(credentials)
//         })

//         if (!authResponse.ok) {
//           return null
//         }

//         const user = await authResponse.json()

//         return user <<<< Тут должен быть NULL как в примере ниже
//       }
//     })
//   ]
// })
// Добавление функции входа в систему
// https://nextjs.org/learn/dashboard-app/adding-authentication#:~:text=Adding%20the%20sign%20in%20functionality
// import NextAuth from 'next-auth'
// import Credentials from 'next-auth/providers/credentials'
// import { authConfig } from './auth.config'
// import { z } from 'zod'
// import { sql } from '@vercel/postgres'
// import type { User } from '@/app/lib/definitions'
// import bcrypt from 'bcrypt'

// async function getUser(email) {
//   try {
//     const user = (await sql) < User > `SELECT * FROM users WHERE email=${email}`
//     return user.rows[0]
//   } catch (error) {
//     console.error('Failed to fetch user:', error)
//     throw new Error('Failed to fetch user.')
//   }
// }

// export const { auth, signIn, signOut } = NextAuth({
//   ...authConfig,
//   providers: [
//     Credentials({
//       async authorize(credentials) {
//         const parsedCredentials = z //вы можете использовать zod для проверки адреса электронной почты и пароля перед проверкой существования пользователя в базе данных:
//           .object({ email: z.string().email(), password: z.string().min(6) })
//           .safeParse(credentials)

//         if (parsedCredentials.success) {
//           const { email, password } = parsedCredentials.data
//           const user = await getUser(email)
//           if (!user) return null
//           const passwordsMatch = await bcrypt.compare(password, user.password)

//           if (passwordsMatch) return user
//         }

//         console.log('Invalid credentials')
//         return null
//       }
//     })
//   ]
// })
