'use client'

import { register } from '@/lib/actions/actionsUsers'
import styles from './registerForm.module.css'
import { useFormState } from 'react-dom'
import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

const RegisterForm = () => {
  const [state, formAction] = useFormState(register, undefined)

  const router = useRouter()

  useEffect(() => {
    state?.success && router.push('/login')
  }, [state?.success, router])

  return (
    <form className={styles.form} action={formAction}>
      <input type="text" placeholder="username" name="username" required />
      <input type="password" placeholder="password" name="password" />
      <input
        type="password"
        placeholder="password again"
        name="passwordRepeat"
        required
      />
      <button>Register</button>
      {state?.error}
      <Link href="/login">
        Have an account? <b>Login</b>
      </Link>
    </form>
  )
}

export default RegisterForm
