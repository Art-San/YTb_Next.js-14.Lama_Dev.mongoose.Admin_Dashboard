import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <div className=" flex flex-col gap-4 m-5">
        <h1>Home Page</h1>
        <ul>
          <li>Первый пункт</li>
          <li>Второй пункт</li>
          <li>Третий пункт</li>
        </ul>
        <div className=" flex gap-5">
          <Link href="/dashboard">
            <button className="bg-[#008080] py-[5px] px-2.5 text-text border-none cursor-pointer">
              Dashboard
            </button>
          </Link>
          <Link href="/login">
            <button className="bg-[#008040] py-[5px] px-2.5 text-text border-none cursor-pointer">
              Login
            </button>
          </Link>
        </div>
      </div>
    </>
  )
}
