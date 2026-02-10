import React, { useEffect } from "react";
import "./Preloader.css";

const Preloader = ({ onFinish }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      if (onFinish) onFinish();
    }, 5000); // 5 seconds

    return () => clearTimeout(timer);
  }, [onFinish]);

  const text = "Santosh Polyfab";

  return (
    <div className="preloader-wrapper">
      <div className="loader-circle">
        <span></span>
        <span></span>
        <span></span>
      </div>

      <div className="brand-text handwriting">
        {text.split("").map((char, index) => (
          <span
            key={index}
            style={{ animationDelay: `${index * 0.12}s` }}
          >
            {char === " " ? "\u00A0" : char}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Preloader;
