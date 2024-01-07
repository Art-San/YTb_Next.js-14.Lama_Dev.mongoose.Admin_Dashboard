import NextAuth from 'next-auth'
import { authConfig } from './app/lib/auth.config'

export default NextAuth(authConfig).auth

export const config = {
  matcher: ['/((?!api|static|.*\\..*|_next).*)']
}

// из документации
// https://nextjs.org/learn/dashboard-app/adding-authentication#:~:text=the%20following%20code%3A-,/middleware.ts,-import%20NextAuth%20from
// import NextAuth from 'next-auth'
// import { authConfig } from './app/auth.config'

// export default NextAuth(authConfig).auth

// export const config = {
//   // https://nextjs.org/docs/app/building-your-application/routing/middleware#matcher
//   matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)']
// }
