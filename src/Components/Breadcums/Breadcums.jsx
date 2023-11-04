import React from "react";
import "./Breadcums.css";

const Breadcums = ({ product }) => {
  return (
    <div className="breadcums">
      HOME <i className="fa-solid fa-chevron-right"></i>
      PRODUCT
      <i className="fa-solid fa-chevron-right"></i>
      {product.name}
    </div>
  );
};

export default Breadcums;
