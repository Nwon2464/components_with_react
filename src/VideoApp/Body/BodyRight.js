import React from "react";
import "./BodyRight.css";
import VideoList from "./VideoList/VideoList";
const Body = (props) => {
  return (
    <div className="body__right">
      <h2>Recommended</h2>
      <VideoList onVideoSelect={props.onVideoSelect} videos={props.videos} />
    </div>
  );
};

export default Body;
