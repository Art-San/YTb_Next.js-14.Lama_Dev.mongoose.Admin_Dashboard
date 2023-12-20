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
      {/* <div className={styles.container}>
        <ul>
          {menuItems.map((cat, i) => (
            <li key={i}>
              <span className={styles.cat}>{cat.title}</span>
              {cat.list.map((item, i) => (
                <MenuLink key={i} item={item} />
              ))}
            </li>
          ))}
        </ul>
      </div> */}
      {/*22:27*/}
      <div className=" sticky top-10">
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
      </div>
    </>
  )
}

export default Sidebar
