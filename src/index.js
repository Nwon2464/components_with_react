import React from "react";
import ReactDOM from "react-dom";

//unsplashImages
import App from "./UnsplashImages/App";

//Dropdown
import App2 from "./Dropdown/App2";

//Search
import App3 from "./Search/App3";

//VideoApp
import App4 from "./VideoApp/App4";
import { BrowserRouter, Route } from "react-router-dom";

const rootElement = document.getElementById("root");

ReactDOM.render(
  <BrowserRouter>
    <div>
      <Route component={App4} />
    </div>
  </BrowserRouter>,
  rootElement
);
