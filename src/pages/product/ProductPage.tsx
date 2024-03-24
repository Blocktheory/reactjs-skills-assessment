import { useEffect, useState } from 'react'

import FilterModal from '@/components/FilterModal'
import useFilterCategory from '@/hooks/useFilterCategory'
import type { ProductType } from '@/types'
import styles from './ProductPage.module.css'
import SingleProduct from './components/SingleProduct'

export default function ProductPage() {
  const [apiData, setApiData] = useState([])
  const [selectedCategories, setSelectedCategories] = useState<string[]>([])
  const [show, setShow] = useState(false)

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  useEffect(() => {
    ;(async () => {
      const res = await fetch('https://fakestoreapi.com/products')
      if (!res.ok) throw new Error('Response is not OK!')
      const data = await res.json()
      setApiData(data)
    })()
  }, [])

  const filterdData = useFilterCategory()
  const data = filterdData(apiData, selectedCategories)

  return (
    <div className={styles.productPage}>
      <section>
        <h1 className={styles.productPageHeading}>Our Products</h1>
      </section>
      <section>
        <div>
          <button className={styles.filter} onClick={handleShow}>
            Filter
          </button>
          <FilterModal
            handleClose={handleClose}
            show={show}
            selectedCategories={selectedCategories}
            setSelectedCategories={setSelectedCategories}
          />
        </div>
      </section>
      <section className={styles.productList}>
        {data?.map((item: ProductType) => (
          <SingleProduct key={item.id} data={item} />
        ))}
      </section>
    </div>
  )
}
