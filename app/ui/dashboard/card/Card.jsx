import { MdSupervisedUserCircle } from 'react-icons/md'
import styles from './card.module.css'

const Card = () => {
  return (
    <>
      <div className={styles.container}>
        <MdSupervisedUserCircle size={24} />
        <div className={styles.texts}>
          <span className={styles.title}>Total user</span>
          <span className={styles.number}>10.273</span>
          <span className={styles.detail}>
            <span className={styles.positive}>12%</span> more than previous week
          </span>
        </div>
      </div>
      {/* <div className={styles.container}>
      <MdSupervisedUserCircle size={24} />
      <div className={styles.texts}>
        <span className={styles.title}>{item.title}</span>
        <span className={styles.number}>{item.number}</span>
        <span className={styles.detail}>
          <span className={item.change > 0 ? styles.positive : styles.negative}>
            {item.change}%
          </span>{" "}
          {item.change > 0 ? "more" : "less"} than previous week
        </span>
      </div>
    </div> */}
      {/*41:00*/}
      {/* <div className=" bg-bgSoft flex p-5 cursor-pointer w-full gap-5 rounded-[10px] hover:bg-[#2e374a] ">
        <MdSupervisedUserCircle size={24} />
        <div className=" flex flex-col gap-5">
          <span className="">Total user</span>
          <span className=" text-2xl font-medium">10.273</span>
          <span className=" text-sm font-light">
            <span className={3 > 0 ? 'text-[#13D50F]' : 'text-[#FF0000]'}>
              {'item.change'}%
            </span>{' '}
            {3 > 0 ? 'more' : 'less'} than previous week
          </span>
        </div>
      </div> */}
    </>
  )
}

export default Card
