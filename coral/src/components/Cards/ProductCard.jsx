import React from "react";
import "./ProductCard.css";
import Placeholder from "../../assets/placeholder.png";
import Label from "./Label";

const ProductCard = ({item}) => {
  return (
    <div key={item.id} className="product-card">
      <div className="prod-image-cont">
        <img src={item.image ? item.image : Placeholder} />
        
      </div>
      <Label rating={item.rating.rate}/>
      <div>
        <div className="product-title">
          <h6>{item.title}</h6>
        </div>
        <div className="product-row">
          <p className="product-category">{item.category}</p>
          <p className="product-price">${item.price}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
