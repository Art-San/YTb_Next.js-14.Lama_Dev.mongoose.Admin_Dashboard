import { FC } from 'react'
import Card from '../ui/dashboard/card/card'
import styles from '../ui/dashboard/dashboard.module.css'
import RightBar from '../ui/dashboard/rightbar/rightbar'
import Transactions from '../ui/dashboard/transactions/transactions'
import Chart from '../ui/dashboard/chart/chart'

const DashboardPage: FC = () => {
  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.main}>
          <div className={styles.cards}>
            <Card />
            <Card />
            <Card />
          </div>
          <Transactions />
          <Chart />
        </div>
        <div className={styles.side}>
          <RightBar />
        </div>
      </div>
      {/*38:36*/}
      {/* <div className="flex gap-5 mt-5">
        <div className="flex flex-col basis-[75%] gap-5 ">
          <div className="flex gap-5 justify-between">
            <Card />
            <Card />
            <Card />
          </div>
          <Transactions />
          <Chart />
        </div>
        <div className="basis-[25%]">
          <RightBar />
        </div>
      </div> */}
    </>
  )
}

export default DashboardPage

// import { cards } from "../lib/data";
// import Card from "../ui/dashboard/card/card";
// import Chart from "../ui/dashboard/chart/chart";
// import styles from "../ui/dashboard/dashboard.module.css";
// import Rightbar from "../ui/dashboard/rightbar/rightbar";
// import Transactions from "../ui/dashboard/transactions/transactions";

// const Dashboard = () => {
//   return (
//     <div className={styles.wrapper}>
//       <div className={styles.main}>
//         <div className={styles.cards}>
//           {cards.map((item) => (
//             <Card item={item} key={item.id} />
//           ))}
//         </div>
//         <Transactions />
//         <Chart />
//       </div>
//       <div className={styles.side}>
//         <Rightbar />
//       </div>
//     </div>
//   );
// };

// export default Dashboard;
