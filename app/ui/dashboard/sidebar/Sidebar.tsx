import { FC } from 'react'
import styles from './sidebar.module.css'

import Image from 'next/image'
import MenuLink from './menuLink/menuLink'

import {
  MdDashboard,
  MdSupervisedUserCircle,
  MdShoppingBag,
  MdAttachMoney,
  MdWork,
  MdAnalytics,
  MdPeople,
  MdOutlineSettings,
  MdHelpCenter,
  MdLogout
} from 'react-icons/md'
// import { auth, signOut } from "@/app/auth";

const menuItems = [
  {
    title: 'Pages',
    list: [
      {
        title: 'Dashboard',
        path: '/dashboard',
        icon: <MdDashboard />
      },
      {
        title: 'Users',
        path: '/dashboard/users',
        icon: <MdSupervisedUserCircle />
      },
      {
        title: 'Products',
        path: '/dashboard/products',
        icon: <MdShoppingBag />
      },
      {
        title: 'Transactions',
        path: '/dashboard/transactions',
        icon: <MdAttachMoney />
      }
    ]
  },
  {
    title: 'Analytics',
    list: [
      {
        title: 'Revenue',
        path: '/dashboard/revenue',
        icon: <MdWork />
      },
      {
        title: 'Reports',
        path: '/dashboard/reports',
        icon: <MdAnalytics />
      },
      {
        title: 'Teams',
        path: '/dashboard/teams',
        icon: <MdPeople />
      }
    ]
  },
  {
    title: 'User',
    list: [
      {
        title: 'Settings',
        path: '/dashboard/settings',
        icon: <MdOutlineSettings />
      },
      {
        title: 'Help',
        path: '/dashboard/help',
        icon: <MdHelpCenter />
      }
    ]
  }
]

const Sidebar: FC = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.user}>
          <Image
            className={styles.userImage}
            src="/noAvatar.png"
            alt=""
            width={'50'}
            height={'50'}
          />
          <div className="flex flex-col">
            <span className={styles.userName}>John Doe</span>
            <span className={styles.userTitle}>Administrator</span>
          </div>
        </div>
        <ul className={styles.list}>
          {menuItems.map((cat, i) => (
            <li key={i}>
              <span className={styles.cat}>{cat.title}</span>
              {cat.list.map((item, i) => (
                <MenuLink key={i} item={item} />
              ))}
            </li>
          ))}
        </ul>
      </div>
      {/*22:27*/}
      {/* <div className="sticky top-10">
        <div className="flex items-center gap-5 mb-5">
          <Image
            className=" rounded-full object-cover"
            src="/noAvatar.png"
            alt=""
            width={'50'}
            height={'50'}
          />
          <div className="flex flex-col">
            <span className=" font-medium">John Doe</span>
            <span className=" text-xs text-textSoft">Administrator</span>
          </div>
        </div>
        <ul>
          {menuItems.map((cat, i) => (
            <li key={i}>
              <span className=" text-textSoft font-bold text-[13px] my-[10px] mx-0">
                {cat.title}
              </span>
              {cat.list.map((item, i) => (
                <MenuLink key={i} item={item} />
              ))}
            </li>
          ))}
        </ul>
        <button className="flex items-center gap-2.5 p-5 my-[5px] mx-0 cursor-pointer rounded-[10px] bg-none border-none text-white w-full hover:bg-active">
          <button className="flex p-5 gap-2.5 items-center mx-5px my-0 rounded-[10px] hover:bg-active">
          <MdLogout />
          Logout
        </button>
      </div> */}
    </>
  )
}

export default Sidebar
