// import RegisterForm from '@/app/ui/registerForm/RegisterForm'
import styles from './register.module.css'

const RegisterPage = async () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        акшен в форме не сделан
        {/* <RegisterForm /> */}
      </div>
    </div>
  )
}

export default RegisterPage

// import { register } from '@/lib/action'
// import styles from './register.module.css'
// // import RegisterForm from '@/components/registerForm/RegisterForm'

// const RegisterPage = () => {
//   return (
//     <div className={styles.container}>
//       <div className={styles.wrapper}>
//         <form className={styles.form} action={register}>
//           <input type="text" placeholder="username" name="username" />
//           <input type="email" placeholder="email" name="email" />
//           <input type="password" placeholder="password" name="password" />
//           <input
//             type="password"
//             placeholder="password again"
//             name="passwordRepeat"
//           />
//           <button>Register</button>
//         </form>
//       </div>
//     </div>
//   )
// }

// export default RegisterPage
