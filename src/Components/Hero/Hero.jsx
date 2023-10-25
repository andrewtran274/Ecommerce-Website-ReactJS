import React from "react";
import "./Hero.css";
import handIcon from "../../Assets/hand_icon.png";
import heroImage from "../../Assets/hero_image.png";

const Hero = () => {
  return (
    <div className="hero">
      <div className="container hero-container">
        <div className="hero-left">
          <div className="sub-title">NEW ARRIVALS ONLY</div>
          <div className="title">
            new <img src={handIcon} alt="" /> <br />
            collections <br />
            for everyone
          </div>

          <button className="btn btn-cta">
            Lastest Collection<i class="fa-solid fa-arrow-right-long"></i>
          </button>
        </div>

        <div className="hero-right">
          <img src={heroImage} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
