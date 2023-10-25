import React from "react";
import "./Offers.css";
import image_offers from "../../Assets/exclusive_image.png";

const Offers = () => {
  return (
    <div className="offers">
      <div className="container offers-container">
        <div className="offers-left">
          <div className="title">
            Exclusive <br />
            Offers For You
          </div>
          <div className="sub-title">ONLY ON BEST SELLERS PRODUCTS</div>

          <button className="btn btn-cta">Check Now</button>
        </div>

        <div className="offers-right">
          <img src={image_offers} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Offers;
