'use client'
import { FC } from 'react'
import styles from './navbar.module.css'
import { usePathname } from 'next/navigation'
import {
  MdOutlineChat,
  MdNotifications,
  MdPublic,
  MdSearch
} from 'react-icons/md'

const Navbar: FC = () => {
  const pathname = usePathname()
  return (
    <>
      <div className={styles.container}>
        <div className={styles.title}>{pathname.split('/').pop()}</div>
        <div className={styles.menu}>
          <div className={styles.search}>
            <MdSearch />
            <input
              type="text"
              placeholder="Search.."
              className={styles.input}
            />
          </div>
          <div className={styles.icons}>
            <MdOutlineChat size={20} />
            <MdNotifications size={20} />
            <MdPublic size={20} />
          </div>
        </div>
      </div>
      {/*22222*/}
      <div className="flex p-5 bg-bgSoft items-center justify-between rounded-[10px]">
        <div className=" text-textSoft font-bold capitalize">
          {pathname.split('/').pop()}
        </div>
        <div className="flex items-center gap-5">
          <div className="flex p-2.5 items-center gap-2.5 bg-[#2e374a] rounded-[10px]">
            <MdSearch />
            <input
              type="text"
              placeholder="Search.."
              className="bg-transparent text-text border-none"
            />
          </div>
          <div className="flex gap-5">
            <MdOutlineChat size={20} />
            <MdNotifications size={20} />
            <MdPublic size={20} />
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar
