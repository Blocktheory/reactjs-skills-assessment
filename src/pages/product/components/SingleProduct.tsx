import type { ProductType } from '@/types'
import styles from './SingleProduct.module.css'

type SingleProductProps = {
  data: ProductType
}

export default function SingleProduct({ data }: SingleProductProps) {
  return (
    <div className={styles.singleProductCard}>
      <div className={styles.singleProductImage}>
        <img height={'100%'} src={data.image} alt="" />
      </div>
      <p className={styles.singleProductTitle}>{data.title}</p>
      <div className={styles.singleProductDetails}>
        <div className={styles.singleProductCategory}>{data.category}</div>
        <div>${data.price}</div>
      </div>
    </div>
  )
}
