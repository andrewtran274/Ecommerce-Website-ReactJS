import React from "react";
import "./Popular.css";
import Item from "../Item/Item";
import DataPopular from "../../Assets/data.js";

const Popular = () => {
  return (
    <div className="popular">
      <div className="container popular-container">
        <div className="heading">POPULAR IN WOMEN</div>
        <div className="line"></div>
        <div className="popular-product">
          {DataPopular.map((product, index) => (
            <Item key={index} {...product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Popular;
