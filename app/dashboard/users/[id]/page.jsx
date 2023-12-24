// 1:29ж42

import styles from '@/app/ui/dashboard/users/singleUser/singleUser.module.css'
import Image from 'next/image'

const SingleUserPage = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.infoContainer}>
          <div className={styles.imgContainer}>
            <Image src="/noAvatar.png" alt="" fill />
          </div>
          {'John Doe'}
        </div>
        <div className={styles.formContainer}>
          <form className={styles.form}>
            <input type="hidden" name="id" />
            <label>Username</label>
            <input type="text" name="username" placeholder={'John Doe'} />
            <label>Email</label>
            <input type="email" name="email" placeholder={'JohnDoe@mail.com'} />
            <label>Password</label>
            <input type="password" name="password" />
            <label>Phone</label>
            <input type="text" name="phone" placeholder={'123456'} />
            <label>Address</label>
            <textarea name="address" placeholder={'tomsk'} />
            <label>Is Admin?</label>
            <select name="isAdmin" id="isAdmin">
              <option value={'true'}>Yes</option>
              <option value={'false'}>No</option>
            </select>
            <label>Is Active?</label>
            <select name="isActive" id="isActive">
              <option value={'true'}>Yes</option>
              <option value={'false'}>No</option>
            </select>
            <button>Update</button>
          </form>
        </div>
      </div>
      {/*1:35:00*/}
      {/* <div className=" flex gap-[50px] mt-5">
        <div className=" basis-[25%] bg-bgSoft p-5 rounded-[10px] font-bold text-textSoft h-max">
          <div className=" w-full h-[200px] relative rounded-[10px] overflow-hidden mb-5">
            <Image src="/noAvatar.png" alt="" fill />
          </div>
          {'John Doe'}
        </div>
        <div className=" basis-[75%] bg-bgSoft p-5 rounded-[10px]">
          <form className={styles.form}>
            <input type="hidden" name="id" />
            <label>Username</label>
            <input type="text" name="username" placeholder={'John Doe'} />
            <label>Email</label>
            <input type="email" name="email" placeholder={'JohnDoe@mail.com'} />
            <label>Password</label>
            <input type="password" name="password" placeholder={'John Doe'} />
            <label>Phone</label>
            <input type="text" name="phone" placeholder={'123456'} />
            <label>Address</label>
            <textarea name="address" placeholder={'tomsk'} />
            <label>Is Admin?</label>
            <select name="isAdmin" id="isAdmin">
              <option value={'true'}>Yes</option>
              <option value={'false'}>No</option>
            </select>
            <label>Is Active?</label>
            <select name="isActive" id="isActive">
              <option value={'true'}>Yes</option>
              <option value={'false'}>No</option>
            </select>
            <button>Update</button>
          </form>
          <button className=" w-full p-5 bg-[#008080] text-text border-none rounded-[5px] cursor-pointer mt-5">
            Update
          </button>
        </div>
      </div> */}
    </>
  )
}

export default SingleUserPage

// import { FC, useEffect, useState } from 'react'
// import { updateUser } from '@/app/lib/actions'
// import { fetchUser, User } from '@/app/lib/data'
// import styles from '@/app/ui/dashboard/users/singleUser/singleUser.module.css'
// import Image from 'next/image'

// interface SingleUserPageProps {
//   params: {
//     id: string
//   }
// }

// const SingleUserPage: FC<SingleUserPageProps> = ({ params }) => {
//   const [user, setUser] = useState<User | null>(null)

//   useEffect(() => {
//     const fetchUserData = async () => {
//       const userData = await fetchUser(params.id)
//       setUser(userData)
//     }

//     fetchUserData()
//   }, [params.id])

//   const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
//     event.preventDefault()
//     const formData = new FormData(event.currentTarget)
//     // Process the form data or call the updateUser function with formData
//     updateUser(formData)
//   }

//   return (
//     <div className={styles.container}>
//       {user && (
//         <div className={styles.infoContainer}>
//           <div className={styles.imgContainer}>
//             <Image
//               src={user.img || '/noavatar.png'}
//               alt=""
//               width={100}
//               height={100}
//             />
//           </div>
//           {user.username}
//         </div>
//       )}
//       <div className={styles.formContainer}>
//         {user && (
//           <form onSubmit={handleFormSubmit} className={styles.form}>
//             <input type="hidden" name="id" value={user.id} />
//             <label>Username</label>
//             <input type="text" name="username" defaultValue={user.username} />
//             <label>Email</label>
//             <input type="email" name="email" defaultValue={user.email} />
//             <label>Password</label>
//             <input type="password" name="password" />
//             <label>Phone</label>
//             <input type="text" name="phone" defaultValue={user.phone} />
//             <label>Address</label>
//             <textarea name="address" defaultValue={user.address} />
//             <label>Is Admin?</label>
//             <select
//               name="isAdmin"
//               id="isAdmin"
//               defaultValue={String(user.isAdmin)}
//             >
//               <option value="true">Yes</option>
//               <option value="false">No</option>
//             </select>
//             <label>Is Active?</label>
//             <select
//               name="isActive"
//               id="isActive"
//               defaultValue={String(user.isActive)}
//             >
//               <option value="true">Yes</option>
//               <option value="false">No</option>
//             </select>
//             <button type="submit">Update</button>
//           </form>
//         )}
//       </div>
//     </div>
//   )
// }

// export default SingleUserPage
