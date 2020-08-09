import React, { useState } from "react";
import "./VideoItem.css";

const VideoItem = ({ video, onVideoSelect }) => {
  const [modalOpen, setModalOpen] = useState(false);
  let imageAvatar = images[Math.floor(Math.random() * images.length)];

  const hanldeModal = () => {
    if (video) {
      setModalOpen(!modalOpen);
    }
  };
  
  return (
    <div onClick={() => onVideoSelect(video)} className="video__card">
      <img
        className="video__card__img"
        src={video.snippet.thumbnails.medium.url}
        alt={video.snippet.title}
      />
      <div className="video__card__info">
        <img
          src={imageAvatar}
          className="video__card__avatar ui avatar image"
        />
        <div className="video__card__text">
          <h4 className="video__card__h4">{video.snippet.title}</h4>
          <p>{video.snippet.channelTitle}</p>
          <p>{video.snippet.publishTime}</p>
        </div>
      </div>
    </div>
  );
};

export default VideoItem;

const images = [
  "https://semantic-ui.com/images/avatar/small/jenny.jpg",
  "https://semantic-ui.com/images/avatar/small/elliot.jpg",
  "https://semantic-ui.com/images/avatar2/small/molly.png",
  "https://semantic-ui.com/images/avatar2/small/elyse.png",
  "https://semantic-ui.com/images/avatar/small/helen.jpg",
  "https://semantic-ui.com/images/avatar/small/joe.jpg",
  "https://semantic-ui.com/images/avatar/small/justen.jpg",
  "https://semantic-ui.com/images/avatar/small/steve.jpg",
  "https://semantic-ui.com/images/avatar/small/laura.jpg",
  "https://semantic-ui.com/images/avatar2/small/mark.png",
  "https://semantic-ui.com/images/avatar/small/daniel.jpg",
  "https://semantic-ui.com/images/avatar/small/matt.jpg",
  "https://semantic-ui.com/images/avatar/small/veronika.jpg",
];
