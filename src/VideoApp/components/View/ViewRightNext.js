import React from "react";
import "./ViewRightNext.css";
import { identity } from "lodash";
const ViewRightNext = ({ streams }) => {
  console.log(streams);
  const renderList = streams.slice(1).map((stream, id) => {
    return (
      <div key={id} className="view__right__next__info">
        <img src={stream.imgUrl} alt={stream.title} />

        <div className="view__right__next__all">
          <h5 className="view__right__next__title">
            {stream.title.length > 35 && stream.title.slice(0, 35) + "...."}
          </h5>
          <p className="view__right__next__channel">{stream.channelTitle}</p>
          <p className="view__right__view__description">Description</p>
        </div>

        {id === 0 && <hr />}
      </div>
    );
  });

  return <div>{renderList}</div>;
};

export default ViewRightNext;
