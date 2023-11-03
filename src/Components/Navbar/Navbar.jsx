import React, { useState } from "react";
import "./Navbar.css";
import Logo from "../../Assets/logo.png";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [isLogin, setIsLogin] = useState(false);

  const navigate = useNavigate();
  const [lineStyleElement, setLineStyleElement] = useState({
    width: 86,
    left: 0,
  });

  const handleActiveLink = (e) => {
    let widthValueTarget = e.target.offsetWidth;
    let leftValueTarget = e.target.offsetLeft;

    setLineStyleElement({ width: widthValueTarget, left: leftValueTarget });
  };

  const toggleLoginState = () => {
    setIsLogin((prev) => !prev);

    if (isLogin) {
      navigate("/signup");
    } else {
      navigate("/login");
    }
  };

  const links = [
    { text: "Shop", url: "/" },
    { text: "Men", url: "/mens" },
    { text: "Women", url: "/women" },
    { text: "Kids", url: "/kids" },
  ];

  const handleLogoClick = () => {
    // Điều hướng về trang mặc định
    navigate("/");
    handleActiveLink({
      target: document.querySelector(".link"),
      offsetLeft: 0,
    });
  };

  return (
    <div className="navbar">
      <div className="container navbar-container">
        <div className="logo" onClick={handleLogoClick}>
          <img src={Logo} alt="" className="logo-img" />
          <h1 className="logo-name">
            SHOP<span>PER</span>
          </h1>
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
          <button className="btn btn-login" onClick={toggleLoginState}>
            {isLogin ? "Sign Up" : "Login"}
          </button>

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
