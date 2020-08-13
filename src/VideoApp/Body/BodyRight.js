import React from "react";
import "./BodyRight.css";
import VideoList from "./VideoList/VideoList";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

const Body = (props) => {
  const renderCreate = () => {
    if (props.isSignedIn) {
      return (
        <div className="render__create">
          <Link to="/streams/new">Create New Stream</Link>
        </div>
      );
    }
  };

  return (
    <div className="body__right">
      <h2>Stream Lists</h2>
      {renderCreate()}
      <VideoList onVideoSelect={props.onVideoSelect} streams={props.streams} />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    isSignedIn: state.auth.isSignedIn,
  };
};
export default connect(mapStateToProps)(Body);
