import React from "react";
import "./NewsLetter.css";

const Newsletter = () => {
  return (
    <div className="newsletter">
      <div className="container newsletter-container">
        <div className="title">Get Exclusive Offers On Your Email</div>
        <div className="sub-heading">
          Subscribe to our newsletter and stay updated
        </div>

        <div className="subscribe">
          <input
            type="email"
            placeholder="Enter your email..."
            className="input-email"
          />
          <button className="btn btn-cta btn-subscribe">Subscribe</button>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
