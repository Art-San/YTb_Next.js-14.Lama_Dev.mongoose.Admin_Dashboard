// {'1:40:00'}
import { FC } from 'react'

import styles from '@/app/ui/login/login.module.css'
import LoginForm from '../ui/login/loginForm/LoginForm'

const LoginPage: FC = () => {
  return (
    <div className={styles.container}>
      <form className={styles.form}>
        <h1>Login</h1>
        <input type="text" placeholder="username" name="username" />
        <input type="password" placeholder="password" name="password" />{' '}
        <button>Login</button>
      </form>
    </div>
  )
}

export default LoginPage
// import { FC } from 'react'

// import styles from '@/app/ui/login/login.module.css'
// import LoginForm from '../ui/login/loginForm/LoginForm'

// const LoginPage: FC = () => {
//   return (
//     <div className={styles.container}>
//       forma
//       <LoginForm />
//     </div>
//   )
// }

// export default LoginPage
