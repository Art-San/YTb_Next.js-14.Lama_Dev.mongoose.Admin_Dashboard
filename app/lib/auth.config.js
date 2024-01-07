export const authConfig = {
  providers: [],
  pages: {
    signIn: '/login'
  },
  callbacks: {
    authorized({ auth, request }) {
      const user = auth?.user
      console.log('authConfig user {?1?1}', user)
      const isOnDashboard = request.nextUrl.pathname.startsWith('/dashboard')
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
