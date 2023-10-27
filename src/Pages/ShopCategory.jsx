import React from "react";
import { useShopContext } from "../context/ShopContext";
import Item from "../Components/Item/Item";
import "./CSS/ShopCategory.css";

const ShopCategory = ({ category, imageBanner }) => {
  const { AllProducts } = useShopContext();

  const producstFilter = AllProducts.filter(
    (product) => product.category === category
  );

  return (
    <div className="shopcategory">
      <div className="container shopcategory-container">
        <div className="banner">
          <img src={imageBanner} alt="" />
        </div>

        <div className="infoDisplay">
          <div className="text">
            <span>Showing 1-12 </span>out of 36 products
          </div>
          <div className="btn btn-sort">
            Sort by <i className="fa-solid fa-caret-up"></i>
          </div>
        </div>

        <div className="shopcategory-products">
          {producstFilter.map((product) => (
            <Item {...product} key={product.id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ShopCategory;
