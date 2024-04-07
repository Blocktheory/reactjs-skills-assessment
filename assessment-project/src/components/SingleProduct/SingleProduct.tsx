import React from "react";
import { Product } from "../../features/ProductList/ProductList";
import classes from "./SingleProduct.module.scss";

type Props = {
  product: Product;
};

const SingleProduct: React.FC<Props> = ({ product }) => {
  return (
    <div className={classes["product-card"]}>
      <div className="card">
        <div className={classes["product-img"]}>
          <img src={product.image} alt="..." />
        </div>
        <div className="card-body">
          <p className={`card-text ${classes.text}`}>{product.title}</p>
          <div className={classes["price-section"]}>
            <p>{product.category}</p>
            <p>{product.price}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
