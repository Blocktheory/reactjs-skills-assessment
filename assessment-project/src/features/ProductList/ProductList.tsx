import React, { useEffect, useState } from "react";
import classes from "./ProductList.module.scss";
import axios from "axios";
import SingleProduct from "../../components/SingleProduct/SingleProduct";
import filter from "../../assets/images/Filter.png";

export interface Product {
  id: string;
  image: string;
  category: string;
  title: string;
  price: string;
}

const ProductList: React.FC = () => {
  const [products, setProducts] = useState([]);
  const [showPopup, setShowPopUp] = useState<boolean>(false);
  const [filterProducts, setFilterProducts] = useState([]);
  const [loading, setLoading] = useState<boolean>(false);

  const filterProduct = (category: string) => {
    if (products) {
      const filteredList = products.filter(
        (product: Product) => product.category === category
      );
      setShowPopUp(false);
      setFilterProducts(filteredList);
    }
  };

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      try {
        const data = await axios.get("https://fakestoreapi.com/products");
        setProducts(data.data);
        setFilterProducts(data.data);
        return data.data;
      } catch (error) {
        throw Error;
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  return (
    <div className="container my-5 py-2">
      <div className="row">
        <div className={classes.heading}>
          <h4 className="display-6 fw-bolder ">Our Products</h4>
          <div className={classes.filter}>
            <img
              src={filter}
              alt=""
              onClick={() => setShowPopUp((prev) => !prev)}
            />
            {showPopup && (
              <div className={classes.popup}>
                <ul>
                  <li>
                    <p
                      onClick={() => {
                        setShowPopUp(false);
                        setFilterProducts(products);
                      }}
                    >
                      All Products
                    </p>
                  </li>
                  <li>
                    <p onClick={() => filterProduct("men's clothing")}>Men</p>
                  </li>
                  <li>
                    <p onClick={() => filterProduct("women's clothing")}>
                      Women
                    </p>
                  </li>
                  <li>
                    <p onClick={() => filterProduct("jewelery")}>Jewellery</p>
                  </li>
                  <li>
                    <p onClick={() => filterProduct("electronics")}>
                      Electronics
                    </p>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="row">
        <div className={`col-lg 12 ${classes["product-section"]}`}>
          {loading && (
            <div className={classes.loader}>
              <div className="spinner-border" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            </div>
          )}
          {!loading && filterProducts.length === 0 && (
            <div className={classes.loader}>
              <p>No products to show.</p>
            </div>
          )}

          {!loading && filterProducts.length > 0 && (
            <div className={classes.products}>
              {filterProducts.map((product: Product) => (
                <SingleProduct key={product.id} product={product} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductList;
