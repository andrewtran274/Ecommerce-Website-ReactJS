import { createContext, useContext, useState } from "react";
import All_Product from "../Assets/all_product";

const shopContext = createContext({});

export function useShopContext() {
  return useContext(shopContext);
}

export function ShopContextPrivider({ children }) {
  const AllProducts = All_Product;
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    //Kiem tra san pham da co trong Cart hay chua
    const existingProduct = cart.find((prod) => prod.id === product.id);

    if (existingProduct) {
      //Neu da ton tai trong Cart thi Cap nhap Quantity len + 1
      setCart((prevCart) => {
        prevCart.map((product) => {
          product.id === product.id
            ? { ...product, quantity: product.quantity + 1 }
            : product;
        });
      });
    } else {
      //Khong co tien hanh lay ra thong tin san pham va them vao CART
      const productToCart = AllProducts.find(
        (product) => product.id === product.id
      );

      if (productToCart) {
        setCart((prevCart) => [...prevCart, { productToCart, quantity: 1 }]);
      }
    }
  };

  //Giam so luong san pham tu CART
  const removeFromCart = (productId) => {
    const updateCart = cart.map((cartItem) => {
      if (cartItem.id === productId) {
        if (cartItem.quantity > 1) {
          return { ...cartItem, quantity: cartItem.quantity - 1 };
        } else {
          deleteFromCart(productId);
        }
      } else {
        return cartItem;
      }
    });
  };

  //Xoa san pham cua CART
  const deleteFromCart = (productId) => {
    const updateCart = cart.filter((cartItem) => {
      cartItem.id !== productId;
    });

    setCart(updateCart);
  };

  //tinh tong cac san pham trong CART
  const totalQuantityInCart = () => {
    const totalQuantity = cart.reduce((total, cartItem) => {
      total + cartItem.quantity;
    }, 0);

    return totalQuantity;
  };

  //Tinh Tong Tien Cac san pham TRONG CART

  const calculateTotalPriceInCart = () => {
    const totalQuantity = cart.reduce((total, cartItem) => {
      total + cartItem.new_price * cartItem.quantity;
    }, 0);

    return totalQuantity;
  };

  return (
    <shopContext.Provider
      value={{
        AllProducts,
        addToCart,
        totalQuantityInCart,
        removeFromCart,
        deleteFromCart,
        calculateTotalPriceInCart,
      }}
    >
      {children}
    </shopContext.Provider>
  );
}
