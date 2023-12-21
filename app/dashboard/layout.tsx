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
      {/*TODO: не могу найти flex: 4;*/}
      {/* <div className="flex">
        <div className="flex-1 p-5 bg-bgSoft min-h-screen">
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
