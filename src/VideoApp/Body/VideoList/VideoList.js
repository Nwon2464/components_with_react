import React from "react";
import VideoItem from "./VideoItem";
import "./VideoList.css";
const VideoList = ({ videos, onVideoSelect }) => {
  const renderList = videos.map((video) => {
    return <VideoItem onVideoSelect={onVideoSelect} video={video} />;
  });

  return <div className="video__list">{renderList}</div>;
};

export default VideoList;
