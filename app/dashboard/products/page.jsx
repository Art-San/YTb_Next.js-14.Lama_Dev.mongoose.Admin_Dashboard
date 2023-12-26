import Image from 'next/image'
import Link from 'next/link'

import styles from '@/app/ui/dashboard/products/products.module.css'
import Pagination from '@/app/ui/dashboard/pagination/Pagination'
import Search from '@/app/ui/dashboard/search/Search'
import { fetchProducts } from '@/app/lib/data'

const ProductsPage = async ({ searchParams }) => {
  // {/*2:25:00*/}
  const q = searchParams?.q || ''
  const page = searchParams?.page || 1
  const { count, products } = await fetchProducts(q, page)

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
          {products.map((product) => (
            <tr key={product.id}>
              <td>
                <div className={styles.product}>
                  <Image
                    src={product.img || '/noProduct.jpg'}
                    alt=""
                    width={40}
                    height={40}
                    className={styles.productImage}
                  />
                  {product.title}
                </div>
              </td>
              <td>{product.desc}</td>
              <td>${product.price}</td>
              <td>{product.createdAt?.toString().slice(4, 16)}</td>
              <td>{product.stock}</td>
              <td>
                <div className={styles.buttons}>
                  <Link href={`/dashboard/products/${product.id}`}>
                    <button className={`${styles.button} ${styles.view}`}>
                      View
                    </button>
                  </Link>
                  <form>
                    <input type="hidden" name="id" value={product.id} />
                    <button className={`${styles.button} ${styles.delete}`}>
                      Delete
                    </button>
                  </form>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Pagination count={count} />
    </div>
  )
  // return (
  //   <div className={styles.container}>
  //     <div className={styles.top}>
  //       <Search placeholder="Search for a product..." />
  //       <Link href="/dashboard/products/add">
  //         <button className={styles.addButton}>Add New</button>
  //       </Link>
  //     </div>
  //     <table className={styles.table}>
  //       <thead>
  //         <tr>
  //           <td>Title</td>
  //           <td>Description</td>
  //           <td>Price</td>
  //           <td>Created At</td>
  //           <td>Stock</td>
  //           <td>Action</td>
  //         </tr>
  //       </thead>
  //       <tbody>
  //         <tr>
  //           <td>
  //             <div className={styles.product}>
  //               <Image
  //                 src={'/noProduct.jpg'}
  //                 alt=""
  //                 width={40}
  //                 height={40}
  //                 className={styles.productImage}
  //               />
  //               Iphone
  //             </div>
  //           </td>
  //           <td>{'Desc'}</td>
  //           <td>{'$999'}</td>
  //           <td>{'12/12/23'}</td>
  //           <td>{'72'}</td>
  //           <td>
  //             <div className={styles.buttons}>
  //               <Link href={`/dashboard/products/test`}>
  //                 <button className={`${styles.button} ${styles.view}`}>
  //                   View
  //                 </button>
  //               </Link>
  //               <form>
  //                 <input type="hidden" name="id" />
  //                 <button className={`${styles.button} ${styles.delete}`}>
  //                   Delete
  //                 </button>
  //               </form>
  //             </div>
  //           </td>
  //         </tr>
  //       </tbody>
  //     </table>
  //     <Pagination />
  //   </div>

  // )
}

export default ProductsPage
