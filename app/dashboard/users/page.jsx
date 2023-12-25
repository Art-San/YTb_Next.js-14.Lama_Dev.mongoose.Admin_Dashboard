// import { deleteUser } from '@/app/lib/actions'
import { fetchUsers } from '@/app/lib/data'
import Pagination from '@/app/ui/dashboard/pagination/pagination'
import Search from '@/app/ui/dashboard/search/Search'

import styles from '@/app/ui/dashboard/users/users.module.css'
import Image from 'next/image'
import Link from 'next/link'

const chel = [
  {
    id: '6589195eacda7ae58638ecb9',
    username: 'Пирожок',
    email: 'jonh@mail.com',
    password: '123456',
    img: 'https://avatarzo.ru/wp-content/uploads/medved-flag-rossii.jpg',
    isAdmin: false,
    isActive: true,
    createdAt: Number('2023-11-25T09:34:23.419Z')
  }
]
// 2:12ж12
const UsersPage = async ({ searchParams }) => {
  const q = searchParams?.q || ''
  // const page = searchParams?.page || 1;
  // const { count, users } = await fetchUsers(q, page);
  const users = (await fetchUsers(q)) || chel
  // console.log('q', )
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <Search placeholder="Search for a user..." />
        <Link href="/dashboard/users/add">
          <button className={styles.addButton}>Add New</button>
        </Link>
      </div>
      <table className={styles.table}>
        <thead>
          <tr>
            <td>Name</td>
            <td>Email</td>
            <td>Created At</td>
            <td>Role</td>
            <td>Status</td>
            <td>Action</td>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>
                <div className={styles.user}>
                  <Image
                    src={user.img || '/noAvatar.png'}
                    alt=""
                    width={40}
                    height={40}
                    className={styles.userImage}
                  />
                  {user.username}
                </div>
              </td>
              <td>{user.email}</td>
              <td>{user.createdAt?.toString().slice(4, 16) || 'undefined'}</td>
              <td>{user.isAdmin ? 'Admin' : 'Client'}</td>
              <td>{user.isActive ? 'active' : 'passive'}</td>
              <td>
                <div className={styles.buttons}>
                  <Link href={`/dashboard/users/${user.id}`}>
                    <button className={`${styles.button} ${styles.view}`}>
                      View
                    </button>
                  </Link>
                  <form>
                    <input type="hidden" name="id" value={user.id} />
                    <button className={`${styles.button} ${styles.delete}`}>
                      Delete
                    </button>
                  </form>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Pagination />
    </div>
  )
}

export default UsersPage

// import styles from '@/app/ui/dashboard/users/users.module.css'
// import Search from '@/app/ui/dashboard/search/Search'
// import Link from 'next/link'
// import Image from 'next/image'
// import Pagination from '@/app/ui/dashboard/pagination/Pagination'
// import { fetchUsers } from '../../lib/data.js'

// const UsersPage = async () => {
//   const users = await fetchUsers()
//   console.log('users  1:58:59', users)
//   return (
//     <>
//       <div className={styles.container}>
//         <div className={styles.top}>
//           <Search placeholder="Search for a user..." />
//           <Link href="/dashboard/users/add">
//             <button className={styles.addButton}>Add New</button>
//           </Link>
//         </div>
//         <table className={styles.table}>
//           <thead>
//             <tr>
//               <td>Name</td>
//               <td>Email</td>
//               <td>Created At</td>
//               <td>Role</td>
//               <td>Status</td>
//               <td>Action</td>
//             </tr>
//           </thead>
//           <tbody>
//             <tr>
//               <td>
//                 <div className={styles.user}>
//                   <Image
//                     src={'/noAvatar.png'}
//                     alt=""
//                     width={40}
//                     height={40}
//                     className={styles.userImage}
//                   />
//                   John Doe
//                 </div>
//               </td>
//               <td>{'user.email'}</td>
//               <td>{'13.01.22'}</td>
//               <td>{'Admin'}</td>
//               <td>{'Active'}</td>
//               <td>
//                 <div className={styles.buttons}>
//                   <Link href={`/dashboard/users/test`}>
//                     <button className={`${styles.button} ${styles.view}`}>
//                       View
//                     </button>
//                   </Link>
//                   <form>
//                     <input type="hidden" name="id" />
//                     <button className={`${styles.button} ${styles.delete}`}>
//                       Delete
//                     </button>
//                   </form>
//                 </div>
//               </td>
//             </tr>
//           </tbody>
//         </table>
//         <Pagination />
//       </div>
//     </>
//   )
// }

// export default UsersPage
