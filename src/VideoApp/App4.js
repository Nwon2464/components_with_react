import "./App4.css";

import React, { useState, useEffect } from "react";
import axios from "axios";

import Header from "./Header/Header";
import BodyRight from "./Body/BodyRight";
import BodyLeft from "./Body/BodyLeft";
import Modal from "./Modal";
import youtube from "./apis/youtube";
import history from "./history";
const KEY = "AIzaSyC0oraH7K4oODv6UPAgBeFG0uW8IpFKoVc";

const App4 = (props) => {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);

  const [showModal, setShowModal] = useState(false);

  const onSubmitForm = async (term) => {
    const response = await youtube.get("/search", {
      params: {
        part: "snippet",
        type: "video",
        maxResults: 20,
        key: KEY,
        q: term,
      },
    });
    setVideos(response.data.items);
  };
  const onVideoSelect = (video) => {
    setShowModal(true);
    setSelectedVideo(video);
  };

  const onPortalDismiss = () => {
    setShowModal(false);
    props.history.push("/");
  };

  useEffect(() => {
    onSubmitForm("sky");
  }, []);
  return (
    <div>
      {showModal ? (
        <Modal
          onPortalDismiss={onPortalDismiss}
          selectedVideo={selectedVideo}
        />
      ) : null}
      <Header onSubmitForm={onSubmitForm} />
      <div className="app__body">
        <BodyLeft />
        <BodyRight onVideoSelect={onVideoSelect} videos={videos} />
      </div>
    </div>
  );
};

export default App4;
