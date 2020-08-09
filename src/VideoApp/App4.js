import "./App4.css";

import React, { useState, useEffect } from "react";
import axios from "axios";
import { Router, Route, Switch } from "react-router-dom";
import Header from "./Header/Header";
import BodyRight from "./Body/BodyRight";
import BodyLeft from "./Body/BodyLeft";
import Modal from "./Modal";
import youtube from "./apis/youtube";
import history from "./history";

import Search from "./components/Search/Search";
import ViewLeft from "./components/View/ViewLeft";
import ViewRight from "./components/View/ViewRight";
import Login from "./components/Login/Login";

const KEY = "AIzaSyAR4iYaiGT4oNWSkga37lDBzxqJLp0Rg70";

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
    history.push("/");
  };
  useEffect(() => {
    onSubmitForm("sky");
  }, []);

  return (
    <div>
      <Router history={history}>
        <Header onSubmitForm={onSubmitForm} />
        {showModal ? (
          <Modal
            onPortalDismiss={onPortalDismiss}
            selectedVideo={selectedVideo}
          />
        ) : null}

        <Switch>
          <Route exact path="/view/:id">
            <div className="view">
              <ViewLeft selectedVideo={selectedVideo} />
              <ViewRight videos={videos} />
            </div>
          </Route>

          <Route exact path="/search">
            <div className="app__body">
              <BodyLeft />
              <Search />
            </div>
          </Route>
          <Route exact path="/login" component={Login} />

          <Route exact path="/">
            <div className="app__body">
              <BodyLeft />
              <BodyRight onVideoSelect={onVideoSelect} videos={videos} />
            </div>
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App4;
