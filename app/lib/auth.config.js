export const authConfig = {
  providers: [],
  pages: {
    signIn: '/login'
  },
  callbacks: {
    async jwt({ token, user }) {
      // console.log('auth.config  jwt user', user)
      // console.log('auth.config  jwt token', token)
      if (user) {
        token.id = user.id
        token.isAdmin = user.isAdmin
        token.username = user.username
        token.img = user.img
      }
      return token
    },
    async session({ session, token }) {
      if (token) {
        session.user.id = token.id
        session.user.isAdmin = token.isAdmin
        session.user.username = token.username
        session.user.img = token.img
      }
      return session
    },
    authorized({ auth, request }) {
      const user = auth?.user
      const isOnDashboard = request.nextUrl.pathname.startsWith('/dashboard')
      console.log('authConfig isOnDashboard', isOnDashboard)
      console.log('authConfig user ', user)
      if (isOnDashboard) {
        if (user) return true
        return false
      } else if (user) {
        return Response.redirect(new URL('/dashboard', request.nextUrl))
      }
      return true
    }
  }
}

// export const authConfig = {
//   providers: [],
//   pages: {
//     signIn: '/login'
//   },
//   callbacks: {
//     authorized({ auth, request }) {
//       const user = auth?.user
//       console.log('authConfig user {?1?1}', user)
//       const isOnDashboard = request.nextUrl.pathname.startsWith('/dashboard')
//       if (isOnDashboard) {
//         if (user) return true
//         return false
//       } else if (user) {
//         return Response.redirect(new URL('/dashboard', request.nextUrl))
//       }
//       return true
//     }
//   }
// }
