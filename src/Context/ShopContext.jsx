import { createContext, useContext } from "react";
import All_Product from "../Assets/all_product";

const shopContext = createContext({});

export function useShopContext() {
  return useContext(shopContext);
}

export function ShopContextPrivider({ children }) {
  const AllProducts = All_Product;

  return (
    <shopContext.Provider value={{ AllProducts }}>
      {children}
    </shopContext.Provider>
  );
}
