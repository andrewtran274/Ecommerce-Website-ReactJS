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
    // Kiểm tra sản phẩm đã có trong Cart hay chưa
    const existingProduct = cart.find((prod) => prod.id === product.id);

    if (existingProduct) {
      // Nếu đã tồn tại trong Cart thì cập nhật Quantity lên + 1
      setCart((prevCart) => {
        return prevCart.map((cartItem) =>
          cartItem.id === product.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      });
    } else {
      // Không tồn tại thì lấy thông tin sản phẩm và thêm vào CART
      const productToCart = AllProducts.find((prod) => prod.id === product.id);

      if (productToCart) {
        setCart((prevCart) => [
          ...prevCart,
          { ...productToCart, quantity: 1, size: product.size },
        ]);
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
          return null;
        }
      } else {
        return cartItem;
      }
    });

    const filteredCart = updateCart.filter((item) => item !== null);
    setCart(filteredCart);
  };

  //Xoa san pham cua CART
  const deleteFromCart = (productId) => {
    const updatedCart = cart.filter((cartItem) => cartItem.id !== productId);
    setCart(updatedCart);
  };

  //tinh tong cac san pham trong CART
  const totalQuantityInCart = () => {
    const totalQuantity = cart.reduce((total, cartItem) => {
      return total + cartItem.quantity;
    }, 0);

    return totalQuantity;
  };

  //Tinh Tong Tien Cac san pham TRONG CART

  const calculateTotalPriceInCart = () => {
    const totalQuantity = cart.reduce((total, cartItem) => {
      return total + cartItem.new_price * cartItem.quantity;
    }, 0);

    return totalQuantity;
  };

  return (
    <shopContext.Provider
      value={{
        AllProducts,
        cart,
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
