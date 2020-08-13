import React from "react";
import "./VideoItem.css";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
const VideoItem = (props) => {
  const { onVideoSelect, stream } = props;

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
        src={stream.imgUrl}
        alt={stream.title}
      />
      <div className="video__card__info">
        <img
          src={stream.imageAvatar}
          className="video__card__avatar ui avatar image"
        />
        <div className="video__card__text">
          <h4 className="video__card__h4">{stream.title}</h4>
          <p>{stream.channelTitle}</p>

          <p>{stream.publishTime}</p>
          {renderAdmin()}
        </div>
      </div>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    currentUserId: state.auth.userId,
  };
};
export default connect(mapStateToProps)(VideoItem);
