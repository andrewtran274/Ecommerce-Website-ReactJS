import React from "react";
import "./Footer.css";
import LogoFooter from "../../Assets/logo.png";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container footer-container">
        <div className="logo">
          <img src={LogoFooter} alt="" />
          <div className="logo-name">SHOPPER</div>
        </div>

        <ul className="footer-list">
          <li className="footer-link">Company</li>
          <li className="footer-link">Product</li>
          <li className="footer-link">Offices</li>
          <li className="footer-link">About</li>
          <li className="footer-link">Contact</li>
        </ul>

        <div className="social-list">
          <div className="social-item">
            <i className="fa-brands fa-instagram"></i>
          </div>
          <div className="social-item">
            <i className="fa-brands fa-facebook"></i>
          </div>
          <div className="social-item">
            <i className="fa-brands fa-twitter"></i>
          </div>
        </div>
        <div className="copy-right">Copyright @ 2023 - All Right Reserved</div>
      </div>
    </div>
  );
};

export default Footer;
