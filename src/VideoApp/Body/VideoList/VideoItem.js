import React from "react";
import "./VideoItem.css";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
const VideoItem = (props) => {
  let imageAvatar = images[Math.floor(Math.random() * images.length)];
  const { video, onVideoSelect, stream } = props;

  const renderAdmin = () => {
    if (video.userId === props.currentUserId) {
      return (
        <div className="user__admin">
          <Link to={`/streams/edit/${video.id}`} className="ui primary button">
            Edit
          </Link>
          <button className="ui red button">Delete</button>
        </div>
      );
    }
  };
  return (
    <div className="video__card">
      <img
        onClick={() => onVideoSelect(video)}
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
          {renderAdmin()}
        </div>
      </div>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    currentUserId: state.auth.userId,
    streams: Object.values(state.streams),
  };
};
export default connect(mapStateToProps)(VideoItem);

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
