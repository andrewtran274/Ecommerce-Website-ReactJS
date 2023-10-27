import React, { useState } from "react";
import "./Navbar.css";
import Logo from "../../Assets/logo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isLogin, setIsLogin] = useState(false);

  const [lineStyleElement, setLineStyleElement] = useState({
    width: 86,
    left: 0,
  });

  const handleActiveLink = (e, index) => {
    let widthValueTarget = e.target.offsetWidth;
    let leftValueTarget = e.target.offsetLeft;

    setLineStyleElement({ width: widthValueTarget, left: leftValueTarget });
  };

  const links = [
    { text: "Shop", url: "/" },
    { text: "Men", url: "/mens" },
    { text: "Women", url: "/women" },
    { text: "Kids", url: "/kids" },
  ];

  return (
    <div className="navbar">
      <div className="container navbar-container">
        <div className="logo">
          <img src={Logo} alt="" className="logo-img" />
          <h1 className="logo-name">SHOPPER</h1>
        </div>

        <ul className="navbar-list">
          {links.map((link, index) => (
            <Link
              key={index}
              className="link"
              onClick={(e) => handleActiveLink(e, index)}
              to={link.url}
            >
              {link.text}
            </Link>
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
          <Link
            to={`${isLogin ? "/signup" : "/login"}`}
            onClick={() => setIsLogin((prev) => !prev)}
          >
            <button className="btn btn-login">
              {isLogin ? "Sign Up" : "Login"}
            </button>
          </Link>
          <Link to={"/cart"}>
            <div className="shopping">
              <div className="logo-shopping">
                <i className="fa-solid fa-cart-shopping"></i>
              </div>
              <div className="count-product">1</div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
