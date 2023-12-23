// 'use client'
// import { FC } from 'react'
// import styles from './pagination.module.css'
// import { usePathname, useRouter, useSearchParams } from 'next/navigation'

// interface PaginationProps {
//   count: number
// }

// const Pagination: FC<PaginationProps> = ({ count }) => {
//   const searchParams = useSearchParams()
//   const router = useRouter()
//   const pathname = usePathname()

//   const page = searchParams.get('page') || '1'

//   const params = new URLSearchParams(searchParams)
//   const ITEM_PER_PAGE = 2

//   const hasPrev = ITEM_PER_PAGE * (parseInt(page) - 1) > 0
//   const hasNext = ITEM_PER_PAGE * (parseInt(page) - 1) + ITEM_PER_PAGE < count

//   const handleChangePage = (type: 'prev' | 'next') => {
//     const currentPage = parseInt(page)

//     if (type === 'prev') {
//       params.set('page', String(currentPage - 1))
//     } else {
//       params.set('page', String(currentPage + 1))
//     }

//     router.replace(`${pathname}?${params}`)
//   }

//   return (
//     <div className={styles.container}>
//       <button
//         className={styles.button}
//         disabled={!hasPrev}
//         onClick={() => handleChangePage('prev')}
//       >
//         Previous
//       </button>
//       <button
//         className={styles.button}
//         disabled={!hasNext}
//         onClick={() => handleChangePage('next')}
//       >
//         Next
//       </button>
//     </div>
//   )
// }

// export default Pagination

import { FC } from 'react'
import styles from './pagination.module.css'

const Pagination: FC = () => {
  return (
    <>
      <div className={styles.container}>
        <button className={styles.button}>Previous</button>
        <button className={styles.button}>Next</button>
      </div>
      {/* <div className={styles.container}>
        <button
          disabled
          className="py-[5px] cursor-pointer disabled:cursor-not-allowed"
        >
          Previous
        </button>
        <button
          disabled
          className="py-[5px] cursor-pointer disabled:cursor-not-allowed"
        >
          Next
        </button>
      </div> */}
    </>
  )
}

export default Pagination
