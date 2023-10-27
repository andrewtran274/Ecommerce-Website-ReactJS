import React from "react";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Shop from "./Pages/Shop";
import ShopCategory from "./Pages/ShopCategory";
import Product from "./Pages/Product";
import Cart from "./Pages/Cart";
import LoginSignup from "./Pages/LoginSignup";
import Footer from "./Components/Footer/Footer";
import ScrollToTop from "./Components/ScrollToTop/ScrollToTop";
import mensBanner from "./Assets/banner_mens.png";
import womenBanner from "./Assets/banner_women.png";
import kidsBanner from "./Assets/banner_kids.png";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Shop />} />
          <Route
            path="/mens"
            element={<ShopCategory category="men" imageBanner={mensBanner} />}
          />
          <Route
            path="/women"
            element={
              <ShopCategory category="women" imageBanner={womenBanner} />
            }
          />
          <Route
            path="/kids"
            element={<ShopCategory category="kid" imageBanner={kidsBanner} />}
          />
          <Route path="/product" element={<Product />}>
            <Route path=":productId" element={<Product />} />
          </Route>
          <Route path="/cart" element={<Cart />} />
          <Route
            path="/login"
            element={<LoginSignup isLoginOrSignUp="login" />}
          />
          <Route
            path="/signup"
            element={<LoginSignup isLoginOrSignUp="signup" />}
          />
        </Routes>
        <Footer />
        <ScrollToTop />
      </BrowserRouter>
    </>
  );
};

export default App;
