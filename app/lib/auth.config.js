export const authConfig = {
  providers: [],
  pages: {
    signIn: '/login'
  },
  callbacks: {
    // https://next-auth.js.org/configuration/callbacks?_gl=1*1j95deu*_gcl_au*MTgzNjg3NDE0OS4xNzAzODI5MTc2LjkwNTk1MTYyOS4xNzA0NjIxOTEzLjE3MDQ2MjE5MzA.#jwt-callback:~:text=Version%3A%20v4-,Callbacks,-Callbacks%20are%20asynchronous
    // ADD ADDITIONAL INFORMATION TO SESSION
    // async jwt({ token, user }) {
    //   console.log('auth.config  jwt user', user)
    //   console.log('auth.config  jwt token', token)
    //   if (user) {
    //     token.id = user.id
    //     token.isAdmin = user.isAdmin
    //     token.username = user.username
    //     token.img = user.img
    //   }
    //   return token
    // },
    // async session({ session, token }) {
    //   if (token) {
    //     session.user.id = token.id
    //     session.user.isAdmin = token.isAdmin
    //     session.user.username = token.username
    //     session.user.img = token.img
    //   }
    //   return session
    // },
    authorized({ auth, request }) {
      const user = auth?.user
      const isOnDashboard = request.nextUrl.pathname.startsWith('/dashboard')
      console.log('request.nextUrl.pathname', request.nextUrl.pathname)
      console.log('request.method', request.method)
      console.log('authConfig isOnDashboard', isOnDashboard)
      console.log('authConfig user ', user)
      console.log('authConfig !!user ', !!user)
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
