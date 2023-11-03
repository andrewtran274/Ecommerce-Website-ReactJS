import React from "react";
import "./ProductDisplay.css";

const ProductDisplay = ({ product }) => {
  return (
    <div className="productdisplay">
      <div className="productDisplay-left">
        <div className="productDisplay-listImage">
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
        </div>
        <div className="productDisplay-MainImage">
          <img src={product.image} alt="" />
        </div>
      </div>
      <div className="productDisplay-right">
        <h2 className="title">{product.name}</h2>

        <div className="listStar">
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
        </div>

        <div className="group-price">
          <div className="old-price">${product.old_price}</div>
          <div className="new-price">${product.new_price}</div>
        </div>

        <p className="describe-product">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse
          excepturi eos dicta deleniti impedit odio, rem modi ab soluta laborum.
        </p>

        <div className="select-size-title">Select Size</div>

        <div className="group-size">
          <div className="size">S</div>
          <div className="size">M</div>
          <div className="size">L</div>
          <div className="size">XL</div>
          <div className="size">XXL</div>
        </div>

        <button className="btn btn-addToCart">ADD TO CART</button>

        <div className="tagNameProduct">
          <span>Category</span>: Women, T-Shirt, Crop-Top <br />
          <span>Tags</span>: Modern, Latest
        </div>
      </div>
    </div>
  );
};

export default ProductDisplay;
