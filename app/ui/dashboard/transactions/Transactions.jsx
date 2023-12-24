import Image from 'next/image'
import styles from './transactions.module.css'

const Transactions = () => {
  return (
    <>
      <div className={styles.container}>
        <h2 className={styles.title}>Latest Transactions</h2>
        <table className={styles.table}>
          <thead>
            <tr>
              <td>Name</td>
              <td>Status</td>
              <td>Date</td>
              <td>Amount</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <div className={styles.user}>
                  <Image
                    src="/noAvatar.png"
                    alt=""
                    width={40}
                    height={40}
                    className={styles.userImage}
                  />
                  John Doe
                </div>
              </td>
              <td>
                <span className={`${styles.status} ${styles.pending}`}>
                  Pending
                </span>
              </td>
              <td>14.02.2024</td>
              <td>$3.200</td>
            </tr>
            <tr>
              <td>
                <div className={styles.user}>
                  <Image
                    src="/noAvatar.png"
                    alt=""
                    width={40}
                    height={40}
                    className={styles.userImage}
                  />
                  John Doe
                </div>
              </td>
              <td>
                <span className={`${styles.status} ${styles.done}`}>Done</span>
              </td>
              <td>14.02.2024</td>
              <td>$3.200</td>
            </tr>
            <tr>
              <td>
                <div className={styles.user}>
                  <Image
                    src="/noAvatar.png"
                    alt=""
                    width={40}
                    height={40}
                    className={styles.userImage}
                  />
                  John Doe
                </div>
              </td>
              <td>
                <span className={`${styles.status} ${styles.cancelled}`}>
                  Cancelled
                </span>
              </td>
              <td>14.02.2024</td>
              <td>$3.200</td>
            </tr>
            <tr>
              <td>
                <div className={styles.user}>
                  <Image
                    src="/noAvatar.png"
                    alt=""
                    width={40}
                    height={40}
                    className={styles.userImage}
                  />
                  John Doe
                </div>
              </td>
              <td>
                <span className={`${styles.status} ${styles.pending}`}>
                  Pending
                </span>
              </td>
              <td>14.02.2024</td>
              <td>$3.200</td>
            </tr>
          </tbody>
        </table>
      </div>
      {/*43:17*/}
      {/* <div className=" bg-bgSoft p-5 rounded-[10px] ">
        <h2 className="mb-5 font-extralight text-textSoft">
          Latest Transactions
        </h2>
        <table className="w-full">
          <thead>
            <tr>
              <td className=" p-2.5">Name</td>
              <td className=" p-2.5">Status</td>
              <td className=" p-2.5">Date</td>
              <td className=" p-2.5">Amount</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className=" p-2.5">
                <div className={' flex gap-2.5 items-center'}>
                  <Image
                    src="/noAvatar.png"
                    alt=""
                    width={40}
                    height={40}
                    className={'object-cover rounded-full'}
                  />
                  John Doe
                </div>
              </td>
              <td className=" p-2.5">
                <span
                  className={`${' rounded-[5px] p-[5px] text-sm text-white'} ${'bg-[#f7cb7375]'}`}
                >
                  Pending
                </span>
              </td>
              <td className=" p-2.5">14.02.2024</td>
              <td className=" p-2.5">$3.200</td>
            </tr>
            <tr>
              <td className=" p-2.5">
                <div className={'flex gap-2.5 items-center'}>
                  <Image
                    src="/noAvatar.png"
                    alt=""
                    width={40}
                    height={40}
                    className={'object-cover rounded-full'}
                  />
                  John Doe
                </div>
              </td>
              <td className=" p-2.5">
                <span
                  className={`${' rounded-[5px] p-[5px] text-sm text-white'} ${'bg-[#afd6ee75]'}`}
                >
                  Done
                </span>
              </td>
              <td className=" p-2.5">14.02.2024</td>
              <td className=" p-2.5">$3.200</td>
            </tr>
            <tr>
              <td className=" p-2.5">
                <div className={'flex gap-2.5 items-center'}>
                  <Image
                    src="/noAvatar.png"
                    alt=""
                    width={40}
                    height={40}
                    className={'object-cover rounded-full'}
                  />
                  John Doe
                </div>
              </td>
              <td className=" p-2.5">
                <span
                  className={`${' rounded-[5px] p-[5px] text-sm text-white'} ${'bg-[#f7737375]'}`}
                >
                  Cancelled
                </span>
              </td>
              <td className=" p-2.5">14.02.2024</td>
              <td className=" p-2.5">$3.200</td>
            </tr>
            <tr>
              <td className=" p-2.5">
                <div className={'flex gap-2.5 items-center'}>
                  <Image
                    src="/noAvatar.png"
                    alt=""
                    width={40}
                    height={40}
                    className={'object-cover rounded-full'}
                  />
                  John Doe
                </div>
              </td>
              <td className=" p-2.5">
                <span
                  className={`${' rounded-[5px] p-[5px] text-sm text-white'} ${'bg-[#f7cb7375]'}`}
                >
                  Pending
                </span>
              </td>
              <td className=" p-2.5">14.02.2024</td>
              <td className=" p-2.5">$3.200</td>
            </tr>
          </tbody>
        </table>
      </div> */}
    </>
  )
}

export default Transactions
