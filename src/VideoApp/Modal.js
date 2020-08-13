import "./Modal.css";
import React from "react";
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";
import history from "./history";
const Modal = (props) => {
  const {
    onPortalDismiss,

    selectedVideo: {
      id: { videoId },
      snippet,
    },
  } = props;
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
          <Link
            onClick={onPortalDismiss}
            to={`view/${videoId}`}
            className="ui primary button"
          >
            View Detail
          </Link>
          <Link to="/" onClick={onPortalDismiss} className="ui button">
            Close
          </Link>
        </div>
      </div>
    </div>,
    document.querySelector("#modal")
  );
};

export default Modal;
