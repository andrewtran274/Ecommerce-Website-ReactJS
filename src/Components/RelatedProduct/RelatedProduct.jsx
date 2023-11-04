import React from "react";
import DataPopular from "../../Assets/data.js";
import "./RelatedProduct.css";
import Item from "../Item/Item.jsx";

const RelatedProduct = () => {
  return (
    <div className="relatedProduct">
      <div className="heading">RELATED PRODUCT</div>
      <div className="line"></div>
      <div className="relatedproduct-item">
        {DataPopular.map((product, index) => (
          <Item key={index} {...product} />
        ))}
      </div>
    </div>
  );
};

export default RelatedProduct;
