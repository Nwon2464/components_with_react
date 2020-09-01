import React from "react";
import "./BodyRight.css";
import VideoList from "./VideoList/VideoList";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Carousel from "./Carousel/Carousel";

import CarouselTwitch from "./Carousel/CarouselTwitch";
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
      {/* <h2>Stream Lists</h2> */}

      <Carousel />
      {/* <CarouselTwitch /> */}
      <p>asdf</p>
      <p>asdf</p>
      <p>asdf</p>
      <p>asdf</p>
      <p>asdf</p>
      <p>asdf</p>
      <p>asdf</p>
      <p>asdf</p>
      <p>asdf</p>
      <p>asdf</p>
      <p>asdf</p>
      <p>asdf</p>
      <p>asdf</p>
      <p>asdf</p>
      <p>asdf</p>
      <p>asdf</p>
      <p>asdf</p>
      <p>asdf</p>
      <p>asdf</p>
      <p>asdf</p>
      <p>asdf</p>
      <p>asdf</p>
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
