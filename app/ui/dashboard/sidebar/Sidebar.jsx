import styles from './sidebar.module.css'

import Image from 'next/image'

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
import MenuLink from './menuLink/MenuLink'
import { auth, signOut } from '@/app/lib/auth'
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

const Sidebar = async () => {
  const session = await auth()
  // const { user } = await auth()
  console.log('Sidebar session', session)
  // console.log('Sidebar user', user)

  return (
    <>
      <div className={styles.container}>
        <div className={styles.user}>
          <Image
            className={styles.userImage}
            src={session?.img || '/noAvatar.png'}
            alt=""
            width={'50'}
            height={'50'}
          />
          <div className="flex flex-col">
            <span className={styles.userName}>{session?.username}</span>
            <span className={styles.userTitle}>
              {session?.isAdmin ? 'Admin' : 'юзер'}
            </span>
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
        {/*3:12:55*/}
        <form
          action={async () => {
            // действия сервера должны быть асинхронны
            'use server'
            await signOut({
              redirectTo: '/'
            })
          }}
        >
          <button className={styles.logout}>
            <MdLogout />
            Logout
          </button>
        </form>
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
