import Image from 'next/image'
import styles from './rightbar.module.css'
import { MdPlayCircleFilled, MdReadMore } from 'react-icons/md'

const RightBar = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.item}>
          <div className={styles.bgContainer}>
            <Image className={styles.bg} src="/astronaut.png" alt="" fill />
          </div>
          <div className={styles.text}>
            <span className={styles.notification}>🔥 Available Now</span>
            <h3 className={styles.title}>
              How to use the new version of the admin dashboard?
            </h3>
            <span className={styles.subtitle}>Takes 4 minutes to learn</span>
            <p className={styles.desc}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Reprehenderit eius libero perspiciatis recusandae possimus.
            </p>
            <button className={styles.button}>
              <MdPlayCircleFilled />
              Watch
            </button>
          </div>
        </div>
        <div className={styles.item}>
          <div className={styles.text}>
            <span className={styles.notification}>🚀 Coming Soon</span>
            <h3 className={styles.title}>
              New server actions are available, partial pre-rendering is coming
              up!
            </h3>
            <span className={styles.subtitle}>Boost your productivity</span>
            <p className={styles.desc}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Reprehenderit eius libero perspiciatis recusandae possimus.
            </p>
            <button className={styles.button}>
              <MdReadMore />
              Learn
            </button>
          </div>
        </div>
      </div>
      {/*52:45*/}
      {/* <div className=" fixed">
        <div className="relative mb-5 rounded-[10px] py-5 px-6 bg-gradient-to-t from-[#182237] to-[#253352]">
          <div className="absolute right-0 bottom-0 w-1/2 h-1/2">
            <Image
              className=" object-contain opacity-20"
              src="/astronaut.png"
              alt=""
              fill
            />
          </div>
          <div className=" flex flex-col gap-6">
            <span className=" font-bold">🔥 Available Now</span>
            <h3 className=" ">
              How to use the new version of the admin dashboard?
            </h3>
            <span className="text-textSoft font-medium text-sm">
              Takes 4 minutes to learn
            </span>
            <p className=" text-textSoft text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Reprehenderit eius libero perspiciatis recusandae possimus.
            </p>
            <button className=" flex items-center p-2.5 gap-2.5 w-max bg-[#5d57c9] text-white border-none rounded-[5px] cursor-pointer">
              <MdPlayCircleFilled />
              Watch
            </button>
          </div>
        </div>
        <div className="relative mb-5 rounded-[10px] py-5 px-6 bg-gradient-to-t from-[#182237] to-[#253352]">
          <div className="flex flex-col gap-6">
            <span className="font-bold">🚀 Coming Soon</span>
            <h3 className="">
              New server actions are available, partial pre-rendering is coming
              up!
            </h3>
            <span className="text-textSoft font-medium text-sm">
              Boost your productivity
            </span>
            <p className="text-textSoft text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Reprehenderit eius libero perspiciatis recusandae possimus.
            </p>
            <button className="flex items-center p-2.5 gap-2.5 w-max bg-[#5d57c9] text-white border-none rounded-[5px] cursor-pointer">
              <MdReadMore />
              Learn
            </button>
          </div>
        </div>
      </div> */}
    </>
  )
}

export default RightBar
