import Sidebar from '../ui/dashboard/sidebar/Sidebar'
import Navbar from '../ui/dashboard/navbar/Navbar'
import styles from '../ui/dashboard/dashboard.module.css'
import Footer from '../ui/dashboard/footer/Footer'

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
          <Footer />
        </div>
      </div>
      {/*TODO: не могу найти flex: 4; --- заменил на basis-[22.5%]*/}
      {/* <div className="flex">
        <div className="basis-[22.5%] p-5 bg-bgSoft min-h-screen">
          <Sidebar />
        </div>
        <div className="basis-[77.5%] p-5">
          <div className="basis-4/5 p-5">
          <Navbar />
          {children}
        </div>
      </div> */}
    </>
  )
}

export default Layout
