import NextAuth from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import { authConfig } from './auth.config'
import { connectToDB } from './lib/utils'
import { User } from './lib/models'
import bcrypt from 'bcrypt'
// import Credentials from 'next-auth/providers/credentials'

const login = async (credentials) => {
  try {
    connectToDB()
    const user = await User.findOne({ username: credentials.username })

    // if (!user) throw new Error('Wrong credentials!')
    if (!user || !user.isAdmin) throw new Error('не user или не admin!')

    const isPasswordCorrect = await bcrypt.compare(
      credentials.password,
      user.password
    )

    if (!isPasswordCorrect) throw new Error('Wrong credentials!')

    return user
  } catch (err) {
    throw new Error('Failed to login!')
  }
}

export const { signIn, signOut, auth } = NextAuth({
  ...authConfig,
  providers: [
    // Credentials({
    CredentialsProvider({
      async authorize(credentials) {
        try {
          const user = await login(credentials)
          console.log('auth NextAuth ser {1}', user) // есть user
          return user
        } catch (err) {
          console.log('auth.js err', err)
          return err
        }
      }
    })
  ],
  // ADD ADDITIONAL INFORMATION TO SESSION
  callbacks: {
    async jwt({ token, user }) {
      console.log('auth jwt user {2} :', user)
      if (user) {
        token.name = user.username
        token.picture = user.img
      }
      console.log('auth jwt token {3} :', token)
      return token
    },
    async session({ session, token }) {
      console.log('auth jwt token {4} :', token)
      console.log('auth jwt session {5} :', session)
      if (token) {
        session.user.name = token.name
        session.user.image = token.picture
      }
      // if (token) { // какая-то неразбериха с полями
      //   session.user.username = token.name
      //   session.user.img = token.picture
      // }
      console.log('auth jwt session {6} :', session)
      return session
    }
  }
})

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

//         return user
//       }
//     })
//   ]
// })
