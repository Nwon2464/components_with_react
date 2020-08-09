import "./App4.css";

import React, { useState, useEffect } from "react";
import axios from "axios";

import Header from "./Header/Header";
import BodyRight from "./Body/BodyRight";
import BodyLeft from "./Body/BodyLeft";
import Modal from "./Modal";
import youtube from "./apis/youtube";

const KEY = "AIzaSyB_csrPZiDs4dD7wZ8uThfqK9uY4K86azU";

const App4 = () => {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);
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
    setSelectedVideo(video);
    // return <Modal />;
  };
  useEffect(() => {
    onSubmitForm("sky");
  }, []);
  return (
    <div>
      <Header onSubmitForm={onSubmitForm} />
      <div className="app__body">
        <BodyLeft />
        <BodyRight onVideoSelect={onVideoSelect} videos={videos} />
      </div>
    </div>
  );
};

export default App4;
