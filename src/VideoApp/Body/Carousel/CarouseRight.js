import React from "react";
import "./Carousel.css";
const CarouseRight = (props) => {
  //   const { description, profile_image_url } = props.getTwitchUsers;
//   console.log(props.getTwitchUsers);
  return (
    <div className="image__card">
      <div className="image__card__upper">
        <img
          //   src={slide.streamJPG}
          alt="streamJPG"
          className="image__card__upper__image"
        />
        <div className="image__card__upper__info">
          {/* <p>{slide.streamTitle}</p> */}
          {/* <a href="#">{slide.genere}</a> */}
          {/* <p>{slide.viewers}</p> */}
        </div>
      </div>
      {/* <div className="image__card__middle">
        <a href="#">{slide.tags[0]}</a>
        <a style={{ display: `${!slide.tags[1] ? "none" : ""}` }} href="#">
          {slide.tags[1]}
        </a>
      </div> */}
      {/* <div className="image__card__bottom">{slide.description} </div> */}
    </div>
  );
};

export default CarouseRight;
