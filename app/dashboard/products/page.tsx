import Pagination from '@/app/ui/dashboard/pagination/Pagination'
import Search from '@/app/ui/dashboard/search/Search'
import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'
import styles from '@/app/ui/dashboard/products/products.module.css'

const ProductsPage: FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <Search placeholder="Search for a product..." />
        <Link href="/dashboard/products/add">
          <button className={styles.addButton}>Add New</button>
        </Link>
      </div>
      <table className={styles.table}>
        <thead>
          <tr>
            <td>Title</td>
            <td>Description</td>
            <td>Price</td>
            <td>Created At</td>
            <td>Stock</td>
            <td>Action</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <div className={styles.product}>
                <Image
                  src={'/noProduct.jpg'}
                  alt=""
                  width={40}
                  height={40}
                  className={styles.productImage}
                />
                Iphone
              </div>
            </td>
            <td>{'Desc'}</td>
            <td>{'$999'}</td>
            <td>{'12/12/23'}</td>
            <td>{'72'}</td>
            <td>
              <div className={styles.buttons}>
                <Link href={`/`}>
                  <button className={`${styles.button} ${styles.view}`}>
                    View
                  </button>
                </Link>
                <form>
                  <input type="hidden" name="id" />
                  <button className={`${styles.button} ${styles.delete}`}>
                    Delete
                  </button>
                </form>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
      <Pagination />
    </div>
  )
}

export default ProductsPage
