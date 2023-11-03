import React from "react";
import Breadcums from "../Components/Breadcums/Breadcums";
import { useShopContext } from "../context/ShopContext";
import { useParams } from "react-router-dom";
import "../Pages/CSS/Product.css";
import ProductDisplay from "../Components/ProductDisplay/ProductDisplay";

const Product = () => {
  const { AllProducts } = useShopContext();
  const { productId } = useParams();

  const product = AllProducts.find((prod) => prod.id === Number(productId));

  return (
    <div className="product">
      <div className="container container-product">
        <Breadcums product={product} />
        <ProductDisplay product={product} />
      </div>
    </div>
  );
};

export default Product;
