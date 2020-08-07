import React, { useState, useEffect, useRef } from "react";

const ImageCard = (props) => {
  const {
    id,
    description,
    urls: { regular },
  } = props.eachImage;
  const [spans, setSpans] = useState(0);
  const imageRef = useRef();
  
  
  useEffect(() => {
    imageRef.current.addEventListener("load", loadImage);
  }, []);
  const loadImage = () => {
    const heights = imageRef.current.clientHeight;
    const spans = Math.ceil(heights / 10);
    setSpans(spans);
  };

  return (
    <div style={{ gridRowEnd: `span ${spans}` }}>
      <img ref={imageRef} src={regular} alt={description} />
    </div>
  );
};

export default ImageCard;
