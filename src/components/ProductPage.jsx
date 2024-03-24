import React, { useState, useEffect } from 'react';
import "./ProductPage.css";
import { FaTwitter, FaInstagram, FaFacebook, FaLinkedin } from 'react-icons/fa';
import { FaCcVisa, FaCcMastercard, FaCcPaypal, FaCcAmex } from 'react-icons/fa';
import { FaArrowUp } from 'react-icons/fa';



function ProductPage() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(response => response.json())
      .then(data => {
        setProducts(data);
        setFilteredProducts(data);
        const uniqueCategories = [...new Set(data.map(product => product.category))];
        setCategories(uniqueCategories);
      })
      .catch(error => console.error('Error fetching products:', error));
  }, []);

  const handleCategoryChange = (event) => {
    const selectedCategory = event.target.value;
    setSelectedCategory(selectedCategory);
    if (selectedCategory === 'All') {
      setFilteredProducts(products);
    } else {
      const filteredProducts = products.filter(product => product.category === selectedCategory);
      setFilteredProducts(filteredProducts);
    }
  };

  return (
    <>
    <div className="product-page-container">
      <img src={require('../Images/Screenshot 2024-03-23 131539.png')} alt="" width="1510px"/> 
       
      <h1>Our Products</h1>
      <div className="product-filter">
        <select value={selectedCategory} onChange={handleCategoryChange}>
          <option value="All">All products</option>
          {categories.map(category => (
            <option key={category} value={category}>{category}</option>
          ))}
        </select>
      </div>
      <div className="product-list">
        {filteredProducts.map(product => (
          <div key={product.id} className="product">
            <h2>{product.title}</h2>
            <p>Category: {product.category}</p>
            <p>Price: ${product.price}</p>
            <img src={product.image} alt={product.title} />
            {/* <p>{product.description}</p> */}
          </div>
        ))}
      </div>
    </div>
    {/* Footer section */}
    <footer class="footer">
        <div className='coral'> <h5 className='foot-name' >CORAL</h5>
     <p className='foot-para'>Lorem ipsum dolor sit amet, consectetur adipiscing~
</p>   
<div className='icons'>
      <FaTwitter />
      <FaInstagram />
      <FaFacebook />
      <FaLinkedin />
    </div> 
        </div>
  <div class="footer-section">
    <h5>CATALOG</h5>
    <p>Necklaces</p>
    <p>Hoodies</p>
    <p>Jewelry Box</p>
    <p>T-shirts</p>
    <p>Jacket</p>
  </div>
  
  <div class="footer-section">
    <h5>ABOUT US</h5>
    <p>Our Producers</p>
    <p>Sitemap</p>
    <p>FAQ</p>
    <p>About Us</p>
    <p>Terms & Conditions</p>
  </div>
  
  <div class="footer-section">
    <h5>CUSTOMER SERVICES</h5>
    <p>Contact Us</p>
    <p>Track Your Order</p>
    <p>Product Care & Repair</p>
    <p>Book an Appointment</p>
    <p>Shipping & Returns</p>
  

    </div>
 
 </footer>
 <div className="payment-logos">
  
  <FaCcVisa color="#1434CB" />
  <FaCcMastercard color="	#EB001B" />
  <FaCcPaypal color="#003087" />
  <FaCcAmex color="#007bc1" />
   
  <h5 onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="scroll-up">
    Scroll to Top <FaArrowUp />
  </h5>

</div>



    </>
  );
}

export default ProductPage;
