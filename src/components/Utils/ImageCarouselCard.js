import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "./ImageCarouselCard.css";

const ImageCarouseICard = ({ images }) => {
  const settings = {
    dots: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
  };
  return (
    <div className="image-carousel-card">
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index} className="image-slide">
            <div className="text-overlay">
              <p className="slide-text">{image["text"]}</p>
            </div>
            <img
              src={image["image"]}
              alt={`Image ${index + 1}`}
              className="carousel-image"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ImageCarouseICard;
