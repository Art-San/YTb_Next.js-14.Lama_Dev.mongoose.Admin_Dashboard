import NextAuth from 'next-auth'
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

    if (!user) throw new Error('Wrong credentials!')
    // if (!user || !user.isAdmin) throw new Error('не user или не admin!')

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
  ]
  // ADD ADDITIONAL INFORMATION TO SESSION
  // callbacks: {
  //   async jwt({ token, user }) {
  //     console.log('auth jwt user {2} :', user)
  //     if (user) {
  //       token.name = user.username
  //       token.picture = user.img
  //     }
  //     console.log('auth jwt token {3} :', token)
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
