import React, { useEffect, useState } from "react";
import "./CSS/LoginSignup.css";
import { useLocation } from "react-router-dom";

const LoginSignup = () => {
  const location = useLocation();

  const [isLogin, setIsLogin] = useState(location.pathname === "/signup");

  useEffect(() => {
    setIsLogin(location.pathname === "/signup");
  }, [location.pathname]);

  return (
    <div className="loginSignup">
      <div className="loginSignupForm">
        <div className="heading">{isLogin ? "Sign Up" : "Login"}</div>

        <input type="text" className="userName" placeholder="Enter your name" />
        {isLogin && (
          <input
            type="email"
            className="userEmail"
            placeholder="Enter your email"
          />
        )}
        <input
          type="text"
          className="userPassword"
          placeholder="Enter your password"
        />

        <button className="btn btn-signUpLogin">Continue</button>

        {isLogin ? (
          <p className="subText">
            <span> Alrealy have an account? </span>
            <span>Login here</span>
          </p>
        ) : (
          <p className="subText">
            <span> Forgot your password? </span>
            <span>Click here</span>
          </p>
        )}

        {isLogin && (
          <div className="acceptPolicy">
            <div className="check">
              <input type="checkbox" className="checkbox" />
            </div>
            <p className="contentPolicy">
              By continuing i agree to the terms of use & privacy policy.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default LoginSignup;
