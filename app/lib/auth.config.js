export const authConfig = {
  providers: [],
  pages: {
    signIn: '/login'
  },
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
        session.user.name = token.name // Поля переписаны, не так как у меня в модели
        session.user.image = token.picture
      }
      // if (token) { // какая-то неразбериха с полями
      //   session.user.username = token.name
      //   session.user.img = token.picture
      // }
      console.log('auth jwt session {6} :', session)
      return session
    },
    authorized({ auth, request }) {
      console.log('authConfig auth?.user {?1?1}', auth?.user)
      const isLoggedIn = auth?.user
      const isOnDashboard = request.nextUrl.pathname.startsWith('/dashboard')
      if (isOnDashboard) {
        if (isLoggedIn) return true
        return false
      } else if (isLoggedIn) {
        return Response.redirect(new URL('/dashboard', request.nextUrl))
      }
      return true
    }
  }
}

// из документации https://nextjs.org/learn/dashboard-app/adding-authentication#:~:text=Protecting%20your%20routes%20with%20Next.js%20Middleware
// export const authConfig = {
//   pages: {
//     signIn: '/login'
//   },
//   callbacks: {
//     authorized({ auth, request: { nextUrl } }) {
//       const isLoggedIn = !!auth?.user

//       const isOnDashboard = nextUrl.pathname.startsWith('/dashboard')

//       if (isOnDashboard) {
//         if (isLoggedIn) return true
//         return false // Перенаправлять не аутентифицированных пользователей на страницу входа
//       } else if (isLoggedIn) {
//         return Response.redirect(new URL('/dashboard', nextUrl))
//       }
//       return true
//     }
//   },
//   providers: [] // Add providers with an empty array for now
// }
