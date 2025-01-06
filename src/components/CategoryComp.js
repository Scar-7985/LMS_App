import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const CategoryComp = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 2,
  };

  const categories = [
    { bg: "#ff0000", icon: "desktop", text: "Web Dev", color: "text-white" },
    { bg: "#ffd103", icon: "brush", text: "UI/UX", color: "" },
    { bg: "#0026ff", icon: "logo-android", text: "App Dev", color: "text-white" },
  ];

  return (
    <div className="slider-container px-1 w-100">
      <Slider {...settings}>
        {categories.map((item, index) => (
          <div key={index}>
            <button
              type="button"
              className={`btn d-flex justify-content-center ${item.color}`}
              style={{
                backgroundColor: item.bg,
                width: "100px",
                fontSize: "12px",
                padding: "0 4px",
              }}
            >
              <ion-icon name={item.icon} style={{ fontSize: "18px" }}></ion-icon>
              <span>{item.text}</span>
            </button>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default CategoryComp;
