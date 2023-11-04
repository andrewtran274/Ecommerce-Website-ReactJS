import React from "react";
import ShoppingCartList from "../Components/ShoppingCartList/ShoppingCartList";
import "./CSS/Cart.css";
import { useShopContext } from "../context/ShopContext";

const Cart = () => {
  const { calculateTotalPriceInCart } = useShopContext();

  const totalPrice = calculateTotalPriceInCart();
  return (
    <div className="cart">
      <div className="container container-cart">
        <h1 className="heading">MY SHOPPING CART</h1>
        <div className="myshopping-cart">
          <ShoppingCartList />

          <div className="boxPrices">
            <div className="boxPrice">
              Discount
              <span>$0.00</span>
            </div>
            <div className="boxPrice">
              Delivery
              <span>$0.00</span>
            </div>
            <div className="boxPrice">
              Subtotal
              <span>${totalPrice}</span>
            </div>
            <div className="boxPrice">
              Total
              <span>${totalPrice}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
