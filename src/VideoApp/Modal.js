import "./Modal.css";
import React, { useState, useRef, useEffect } from "react";
import ReactDOM from "react-dom";

const Modal = ({
  onPortalDismiss,

  selectedVideo: {
    id: { videoId },
    snippet,
  },
}) => {
  const videoSrc = `https://www.youtube.com/embed/${videoId}`;
  return ReactDOM.createPortal(
    <div onClick={onPortalDismiss} className="ui dimmer modals visible active">
      <div
        onClick={(e) => e.stopPropagation()}
        className="ui standard modal visible active "
      >
        <div className="ui embed">
          <iframe src={videoSrc} />
        </div>
        <h4 id="modal__h4" className="ui header">
          {snippet.title}
        </h4>
        <p id="modal__p">{snippet.description}</p>
        <div id="modal__action" className="actions">
          <button className="ui primary button">View Detail</button>
          <button onClick={onPortalDismiss} className="ui button">
            Close
          </button>
        </div>
      </div>
    </div>,
    document.querySelector("#modal")
  );
};

export default Modal;
