import React from "react";
import product_collections from "../../Assets/new_collections";
import Item from "../Item/Item";
import "./NewCollections.css";

const NewCollections = () => {
  return (
    <div className="newcollections">
      <div className="container container-newcollections">
        <h1 className="heading">NEW COLLECTIONS</h1>
        <div className="line"></div>

        <div className="product-collections">
          {product_collections.map((product) => (
            <Item key={product.id} {...product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewCollections;
