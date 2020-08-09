import React from "react";
import "./ViewRightNext.css";
const ViewRightNext = ({ videos }) => {
  const renderList = videos.slice(1).map((video, id) => {
    return (
      <div className="view__right__next__info">
        <img
          src={video.snippet.thumbnails.medium.url}
          alt={video.snippet.title}
        />

        <div className="view__right__next__all">
          <h5 className="view__right__next__title">
            {video.snippet.title.length > 35 &&
              video.snippet.title.slice(0, 35) + "...."}
          </h5>
          <p className="view__right__next__channel">
            {video.snippet.channelTitle}
          </p>
          <p className="view__right__view__description">Description</p>
        </div>

        {id === 0 && <hr />}
      </div>
    );
  });

  return <div>{renderList}</div>;
};

export default ViewRightNext;
