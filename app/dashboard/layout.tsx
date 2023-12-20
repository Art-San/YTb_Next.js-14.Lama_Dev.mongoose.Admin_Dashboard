import Sidebar from '../ui/dashboard/sidebar/Sidebar'
import Navbar from '../ui/dashboard/navbar/Navbar'
import styles from '../ui/dashboard/dashboard.module.css'

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.menu}>
          <Sidebar />
        </div>
        <div className={styles.content}>
          <Navbar />
          {children}
        </div>
      </div>
      {/* <div className=" flex justify-between min-h-screen">
        <div className="flex-1 p-5 bg-bgSoft">
          <Sidebar />
        </div>
        <div className="flex-col w-[78%] p-5">
          <Navbar />
          {children}
        </div>
      </div> */}
    </>
  )
}

export default Layout
