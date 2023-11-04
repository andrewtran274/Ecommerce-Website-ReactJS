import React from "react";
import "./ShoppingCartList.css";
import { useShopContext } from "../../context/ShopContext";
import imageDemo from "../../Assets/p1_product_i1.png";

const ShoppingCartList = () => {
  const { cart, addToCart, removeFromCart, deleteFromCart } = useShopContext();

  return (
    <>
      <div className="shoppingcart-row">
        <div className="title">Product</div>
        <div className="title">Size</div>
        <div className="title">Quatity</div>
        <div className="title">Remove</div>
        <div className="title">Price</div>
      </div>
      {cart.map((product, index) => (
        <div className="shoppingcart-row row-cartItem" key={index}>
          <div className="inforproduct">
            <img src={product.image} alt="" />
            <div className="product-name">
              <p>{product.name}</p>
              <p>Product Code: {product.id}</p>
            </div>
          </div>
          <div className="box size">{product.size}</div>

          <div className="quantity">
            <div className="box btn" onClick={() => addToCart(product)}>
              +
            </div>
            <div className="box number">{product.quantity}</div>
            <div className="box btn" onClick={() => removeFromCart(product.id)}>
              -
            </div>
          </div>

          <div
            className="box remove btn"
            onClick={() => deleteFromCart(product.id)}
          >
            <i className="fa-solid fa-x"></i>
          </div>

          <div className="box priceNumber">${product.new_price}</div>
        </div>
      ))}
    </>
  );
};

export default ShoppingCartList;
