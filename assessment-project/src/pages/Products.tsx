import React from 'react'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import ProductList from '../features/ProductList/ProductList'

const Products:React.FC = () => {


  
  return (
    <>
      <Header/>
      <ProductList/>
      <Footer/>
    </>
  )
}

export default Products
