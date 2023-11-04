import React, { useEffect, useState } from "react";
import "./ProductDisplay.css";
import { useShopContext } from "../../context/ShopContext";

const ProductDisplay = ({ product }) => {
  const [selectedSize, setSelectedSize] = useState(null);

  const { addToCart } = useShopContext();

  const handleAddToCart = () => {
    addToCart({ ...product, size: selectedSize });
  };

  useEffect(() => {
    setSelectedSize(null);
  }, [product]);

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
          {["S", "M", "L", "XL", "XXL"].map((size) => (
            <div
              className={`size ${selectedSize === size ? "active" : ""}`}
              onClick={() => setSelectedSize(size)}
            >
              {size}
            </div>
          ))}
        </div>

        <button
          className={`btn btn-addToCart ${selectedSize ? "" : "disabled"}`}
          onClick={() => handleAddToCart()}
        >
          ADD TO CART
        </button>

        <div className="tagNameProduct">
          <span>Category</span>: Women, T-Shirt, Crop-Top <br />
          <span>Tags</span>: Modern, Latest
        </div>
      </div>
    </div>
  );
};

export default ProductDisplay;
