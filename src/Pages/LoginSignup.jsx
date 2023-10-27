import React from "react";
import "./CSS/LoginSignup.css";

const LoginSignup = () => {
  return (
    <div className="loginSignup">
      <div className="loginSignupForm">
        <div className="heading">Sign Up</div>

        <input type="text" className="userName" placeholder="Enter your name" />
        <input
          type="email"
          className="userEmail"
          placeholder="Enter your email"
        />
        <input
          type="text"
          className="userPassword"
          placeholder="Enter your password"
        />

        <button className="btn btn-signUpLogin">Continue</button>

        <p className="subText">
          <span> Alrealy have an account? </span>
          <span>Login here</span>
        </p>

        <div className="acceptPolicy">
          <div className="check">
            <input type="checkbox" className="checkbox" />
          </div>
          <p className="contentPolicy">
            By continuing i agree to the terms of use & privacy policy.
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginSignup;
