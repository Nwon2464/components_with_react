import React from "react";
// import "./Carousel.css";
import CarouselMiddleCategory from "./CarouselMiddleFirst/CarouselMiddleCategory";
import CarouselMiddleLiveChannel from "./CarouselMiddleFirst/CarouselMiddleLiveChannel";
const CarouseMiddle = (props) => {
  return (
    <div className="game__card">
      <CarouselMiddleLiveChannel />
      {/* <CarouselMiddleCategory /> */}
    </div>
  );
};

export default CarouseMiddle;
