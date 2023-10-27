import React, { useEffect, useState } from "react";
import "./ScrollToTop.css";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleClickScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  const handleScrollWindow = () => {
    if (window.scrollY > 100) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScrollWindow);

    return () => {
      window.removeEventListener("scroll", handleScrollWindow);
    };
  }, []);

  return (
    <div
      className="scroll-to-top"
      style={{
        opacity: `${isVisible ? 1 : 0}`,
        pointerEvents: `${isVisible ? "" : "none"}`,
      }}
      onClick={handleClickScrollToTop}
    >
      <i className="fa-solid fa-arrow-up"></i>
    </div>
  );
};

export default ScrollToTop;
