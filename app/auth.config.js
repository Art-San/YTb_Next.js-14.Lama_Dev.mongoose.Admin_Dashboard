export const authConfig = {
  providers: [],
  pages: {
    signIn: '/login'
  },
  callbacks: {
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

// из документации
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
