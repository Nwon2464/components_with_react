import React from "react";
import VideoItem from "./VideoItem";
import StreamsItem from "./StreamsItem";
import "./VideoList.css";
const VideoList = ({ videos, onVideoSelect, streams }) => {
  const renderList = videos.map((video, index) => {
    return (
      <VideoItem key={index} onVideoSelect={onVideoSelect} video={video} />
    );
  });
  const renderStreams = streams.map((stream, index) => {
    return (
      <StreamsItem key={index} onVideoSelect={onVideoSelect} stream={stream} />
    );
  });

  return (
    <div className="video__list">
      {renderList}
      {renderStreams}
    </div>
  );
};

export default VideoList;
