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

import StreamsCreate from "./components/Streams/StreamsCreate";
import StreamsDelete from "./components/Streams/StreamsDelete";
import StreamsEdit from "./components/Streams/StreamsEdit";
import StreamsShow from "./components/Streams/StreamsShow";
import GoogleAuth from "./GoogleAuth";

import Search from "./components/Search/Search";
import ViewLeft from "./components/View/ViewLeft";
import ViewRight from "./components/View/ViewRight";
import Login from "./components/Login/Login";

const KEY = "AIzaSyAR4iYaiGT4oNWSkga37lDBzxqJLp0Rg70";
const clientId =
  "979708510452-oa44268dodlk7at65bponsb27c0utgn2.apps.googleusercontent.com";
const App4 = (props) => {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [showModal, setShowModal] = useState(false);

  //Youtube API
  // const onSubmitForm = async (term) => {
  //   const response = await youtube.get("/search", {
  //     params: {
  //       part: "snippet",
  //       type: "video",
  //       maxResults: 20,
  //       key: KEY,
  //       q: term,
  //     },
  //   });
  //   setVideos(response.data.items);
  // };
  // useEffect(() => {
  //   onSubmitForm("sky");
  // }, []);

  //Json API
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get("http://localhost:3001/videos");
      setVideos(response.data);
    };
    fetchData();
  }, []);

  const onVideoSelect = (video) => {
    setShowModal(true);
    setSelectedVideo(video);
  };

  const onPortalDismiss = () => {
    setShowModal(false);
    history.push("/");
  };
  return (
    <div>
      <Router history={history}>
        {/* <Header onSubmitForm={onSubmitForm} /> */}
        <Header />
        {/* <Route
          path="/"
          render={(props) => <Header {...props} videos={videos} />}
        /> */}
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
          <Route exact path="/streams/new" component={StreamsCreate} />
          <Route exact path="/streams/edit" component={StreamsEdit} />
          <Route exact path="/streams/delete" component={StreamsDelete} />
          <Route exact path="/streams/show" component={StreamsShow} />

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
