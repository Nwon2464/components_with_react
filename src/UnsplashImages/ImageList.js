import React from "react";
import ImageCard from "./ImageCard";
import "./App.css";

const ImageList = (props) => {
  //   console.log(props);
  const images = props.data.map((eachImage) => {
    return <ImageCard key={eachImage.id} eachImage={eachImage} />;
  });
  return <div className="grid">{images}</div>;
};

export default ImageList;
