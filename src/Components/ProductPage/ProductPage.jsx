import './ProductPage.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import logo from '../Assets/logoProductListPage.png'
import ProductCard from './ProductCard';

const ProductPage = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
    axios.get("https://fakestoreapi.com/products")
        .then(response => {
            setProducts(response.data)
            console.log(products)
        })
        .catch(error => {
            console.error(error);
        });
    }, []);

    const uniqueCategories = [...new Set(products.map(product => product.category))];
    console.log(uniqueCategories);
    return (
        <div className='container'>
            <div className='header' ><img className="logo" src={logo} alt='logo'></img></div>
            <div className='body'>
                <div className='bodyHeading'>Our Products</div>
                {/* <div className='filterDiv'>
                    <div className='filterText'>Filter Products: </div>
                    <a href="#" className='filterCard active' data-fiilter="all">Show All</a>
                    {uniqueCategories && uniqueCategories.map(uniqueCategory => (
                        <a href="#" className='filterCard' data-fiilter={uniqueCategory}>{uniqueCategory}</a>
                    ))}
                </div> */}
                <div className='products'>
                {products && products.map(product => (
                    <ProductCard key={product.id} {...product} />
                ))}
                </div>
            </div>
        </div>
    );
};

export default ProductPage