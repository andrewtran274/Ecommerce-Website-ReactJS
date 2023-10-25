import React, { useState } from "react";
import "./Navbar.css";
import Logo from "../../Assets/logo.png";

const Navbar = () => {
  const [lineStyleElement, setLineStyleElement] = useState({
    width: 86,
    left: 0,
  });

  const handleActiveLink = (e, index) => {
    let widthValueTarget = e.target.offsetWidth;
    let leftValueTarget = e.target.offsetLeft;

    setLineStyleElement({ width: widthValueTarget, left: leftValueTarget });
  };

  const links = ["Shop", "Men", "Women", "Kids"];

  return (
    <div className="navbar">
      <div className="container navbar-container">
        <div className="logo">
          <img src={Logo} alt="" className="logo-img" />
          <h1 className="logo-name">SHOPPER</h1>
        </div>

        <ul className="navbar-list">
          {links.map((link, index) => (
            <li
              key={index}
              className="link"
              onClick={(e) => handleActiveLink(e, index)}
            >
              {link}
            </li>
          ))}
          <div
            className="line"
            style={{
              width: `${lineStyleElement.width}px`,
              left: `${lineStyleElement.left}px`,
            }}
          ></div>
        </ul>

        <div className="navbar-cta">
          <button className="btn btn-login">Login</button>
          <div className="shopping">
            <div className="logo-shopping">
              <i className="fa-solid fa-cart-shopping"></i>
            </div>
            <div className="count-product">1</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
