import styles from './footer.module.css'
import { FC } from 'react'

const Footer: FC = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.logo}>Lama Dev</div>
        <div className={styles.text}>© All rights reserved.</div>
      </div>
      {/*1:01:00*/}
      {/* <div className="flex items-center justify-between mt-[30px] text-textSoft">
        <div className="font-bold">Lama Dev</div>
        <div className="text-xs">© All rights reserved.</div>
      </div> */}
    </>
  )
}

export default Footer
