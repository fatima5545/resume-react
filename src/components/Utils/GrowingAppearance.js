import React, { useEffect, useRef, useState } from "react";
import "./GrowingAppearance.css"; // Make sure to have the style file

const GrowingAppearance = ({ src, alt }) => {
  const [isVisible, setIsVisible] = useState(false);
  const imageRef = useRef();

  useEffect(() => {
    const handleScroll = () => {
      const element = imageRef.current;
      if (element) {
        const boundingBox = element.getBoundingClientRect();
        const isVisible = boundingBox.top <= window.innerHeight * 0.75;
        setIsVisible(isVisible);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check visibility on initial load

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={`growing-appearance ${isVisible ? "visible" : ""}`}>
      <img className="image-content" ref={imageRef} src={src} alt={alt} />
    </div>
  );
};

export default GrowingAppearance;
