import React from "react";
import "./VideoItem.css";

import { Link } from "react-router-dom";
import { connect } from "react-redux";
const StreamsItems = (props) => {
  const { stream, onVideoSelect } = props;

  let imageAvatar = images[Math.floor(Math.random() * images.length)];

  const renderAdmin = () => {
    if (stream.userId === props.currentUserId) {
      return (
        <div className="user__admin">
          <Link to={`/streams/edit/${stream.id}`} className="ui primary button">
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
        onClick={() => onVideoSelect(stream)}
        className="video__card__img"
        src={stream.snippet.thumbnails.medium.url}
        alt={stream.snippet.title}
      />
      <div className="video__card__info">
        <img
          src={imageAvatar}
          className="video__card__avatar ui avatar image"
        />
        <div className="video__card__text">
          <h4 className="video__card__h4">{stream.snippet.title}</h4>
          <p>{stream.snippet.channelTitle}</p>
          <p>{stream.snippet.publishTime}</p>
          {renderAdmin()}
        </div>
      </div>
    </div>
  );
};

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

const mapStateToProps = (state) => {
  return {
    currentUserId: state.auth.userId,
    streams: Object.values(state.streams),
  };
};
export default connect(mapStateToProps)(StreamsItems);
