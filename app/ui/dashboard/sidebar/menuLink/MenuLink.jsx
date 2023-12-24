'use client'

import Link from 'next/link'
import styles from './menuLink.module.css'
import { usePathname } from 'next/navigation'

const MenuLink = ({ item }) => {
  const pathname = usePathname()

  return (
    <>
      {/* <Link
        href={item.path}
        className={`${styles.container} ${
          pathname === item.path && styles.active
        }`}
      >
        {item.icon}
        {item.title}
      </Link> */}
      <Link
        href={item.path}
        className={` flex p-5 gap-2.5 items-center mx-5px my-0 rounded-[10px] hover:bg-active ${
          pathname === item.path && 'bg-active'
        }`}
      >
        {item.icon}
        {item.title}
      </Link>
    </>
  )
}

export default MenuLink
