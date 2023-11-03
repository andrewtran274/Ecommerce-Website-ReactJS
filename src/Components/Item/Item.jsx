import React from "react";
import "./Item.css";
import { Link } from "react-router-dom";

import Product1 from "../../Assets/product_1.png";
const Item = (props) => {
  return (
    <div className="item">
      <Link to={`product/${props.id}`}>
        <div className="item-image">
          <img src={props.image} alt="" />
        </div>
      </Link>
      <div className="item-content">{props.name}</div>
      <div className="item-price">
        <div className="price-new">${props.new_price}</div>
        <div className="price-old">${props.old_price}</div>
      </div>
    </div>
  );
};

export default Item;
