'use client'
import { authenticate } from '@/app/lib/actions'
import styles from './loginForm.module.css'
import { useFormState } from 'react-dom'

const LoginForm = () => {
  const [state, formAction] = useFormState(authenticate, undefined)

  return (
    <form action={formAction} className={styles.form}>
      <h1>Login</h1>
      <input type="text" placeholder="username" name="username" />
      <input type="password" placeholder="password" name="password" />
      <button>Login</button>
      {state && state}
    </form>
  )
}

export default LoginForm

// ошибку выводим с поиощю useState
// 'use client'
// import { authenticate } from '@/app/lib/actions'
// import styles from './loginForm.module.css'
// import { useFormState } from 'react-dom'
// import { useState } from 'react'

// const LoginForm = () => {
//   const [err, setErr] = useState()
//   const handleLogin = async (formData) => {
//     const data = await authenticate(formData)
//     data.error && setErr(data.error)
//   }

//   return (
//     <form action={handleLogin} className={styles.form}>
//       <h1>Login</h1>
//       <input type="text" placeholder="username" name="username" />
//       <input type="password" placeholder="password" name="password" />
//       <button>Login</button>
//       {err && err}
//     </form>
//   )
// }

// export default LoginForm

// 'use client'

// import { lusitana } from '@/app/ui/fonts'
// import {
//   AtSymbolIcon,
//   KeyIcon,
//   ExclamationCircleIcon
// } from '@heroicons/react/24/outline'
// import { ArrowRightIcon } from '@heroicons/react/20/solid'
// import { Button } from '@/app/ui/button'
// import { useFormState, useFormStatus } from 'react-dom'
// import { authenticate } from '@/app/lib/actions'

// export default function LoginForm() {
//   const [errorMessage, dispatch] = useFormState(authenticate, undefined)

//   return (
//     <form action={dispatch} className="space-y-3">
//       <div className="flex-1 rounded-lg bg-gray-50 px-6 pb-4 pt-8">
//         <h1 className={`${lusitana.className} mb-3 text-2xl`}>
//           Please log in to continue.
//         </h1>
//         <div className="w-full">
//           <div>
//             <label
//               className="mb-3 mt-5 block text-xs font-medium text-gray-900"
//               htmlFor="email"
//             >
//               Email
//             </label>
//             <div className="relative">
//               <input
//                 className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
//                 id="email"
//                 type="email"
//                 name="email"
//                 placeholder="Enter your email address"
//                 required
//               />
//               <AtSymbolIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
//             </div>
//           </div>
//           <div className="mt-4">
//             <label
//               className="mb-3 mt-5 block text-xs font-medium text-gray-900"
//               htmlFor="password"
//             >
//               Password
//             </label>
//             <div className="relative">
//               <input
//                 className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
//                 id="password"
//                 type="password"
//                 name="password"
//                 placeholder="Enter password"
//                 required
//                 minLength={6}
//               />
//               <KeyIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
//             </div>
//           </div>
//         </div>
//         <LoginButton />
//         <div
//           className="flex h-8 items-end space-x-1"
//           aria-live="polite"
//           aria-atomic="true"
//         >
//           {errorMessage && (
//             <>
//               <ExclamationCircleIcon className="h-5 w-5 text-red-500" />
//               <p className="text-sm text-red-500">{errorMessage}</p>
//             </>
//           )}
//         </div>
//       </div>
//     </form>
//   )
// }

// function LoginButton() {
//   const { pending } = useFormStatus()

//   return (
//     <Button className="mt-4 w-full" aria-disabled={pending}>
//       Log in <ArrowRightIcon className="ml-auto h-5 w-5 text-gray-50" />
//     </Button>
//   )
// }
