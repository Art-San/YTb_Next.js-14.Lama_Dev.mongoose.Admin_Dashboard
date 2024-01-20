// import styles from '@/app/ui/login/login.module.css'
import LoginForm from '../../ui/login/loginForm/LoginForm'

const LoginPage = () => {
  return (
    <div className=" w-full h-[100dvh] flex items-center justify-center">
      {/* <div className={styles.container}> */}
      <LoginForm />
    </div>
  )
}

export default LoginPage

// {'1:40:00'}

// import styles from '@/app/ui/login/login.module.css'
// import LoginForm from '../ui/login/loginForm/LoginForm'
// import { authenticate } from '../lib/actions'

// const LoginPage = () => {
//   return (
//     <>
//       <div className={styles.container}>
//         <form action={authenticate} className={styles.form}>
//           <h1>Login</h1>
//           <input type="text" placeholder="username" name="username" />
//           <input type="password" placeholder="password" name="password" />{' '}
//           <button>Login</button>
//         </form>
//       </div>
//       {/**1:41:46 */}

//       {/* <div className="flex items-center justify-center w-full h-screen ">
//         <form className=" flex flex-col items-center justify-center gap-9 bg-bgSoft p-[50px] w-[500px] h-[500px]">
//           <h1>Login</h1>
//           <input
//             type="text"
//             placeholder="username"
//             name="username"
//             className=" w-full p-[30px] border-solid border-2 border-[#2e374a] rounded-[5px] bg-bg text-text"
//           />
//           <input
//             type="password"
//             placeholder="password"
//             name="password"
//             className=" w-full p-[30px] border-solid border-2 border-[#2e374a] rounded-[5px] bg-bg text-text"
//           />{' '}
//           <button className=" w-full p-[30px] bg-[#008080] text-text border-none cursor-pointer rounded-[5px]">
//             Login
//           </button>
//         </form>
//       </div> */}
//     </>
//   )
// }

// export default LoginPage
