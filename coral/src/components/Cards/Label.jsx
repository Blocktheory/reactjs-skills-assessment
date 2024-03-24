import React from "react";
import "./ProductCard.css"

const Label = ({ rating }) => {
  let tag = null;

  if (rating > 4.5) {
    tag = <span className="badge hot">Hot</span>;
  } else if (rating >= 4 && rating <= 4.5) {
    tag = <span className="badge sale">Sale</span>;
  }

  return tag;
};

export default Label;
