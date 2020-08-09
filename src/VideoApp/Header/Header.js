import React from "react";
import "./Header.css";

import SearchBar from "./SearchBar/SearchBar";

import VideoCallIcon from "@material-ui/icons/VideoCall";
import MenuIcon from "@material-ui/icons/Menu";
import AppsIcon from "@material-ui/icons/Apps";
import NotificationsIcon from "@material-ui/icons/Notifications";
import FaceIcon from "@material-ui/icons/Face";
import SearchIcon from "@material-ui/icons/Search";
import { Link } from "react-router-dom";
const Header = (props) => {
  console.log(props);
  return (
    <div className="header">
      <div className="header__left">
        <MenuIcon />
        <img
          className="header__logo"
          src="https://images.indianexpress.com/2017/08/youtube_logo_new-759.jpg"
          alt="youtube"
        />
      </div>
      <div className="header__input">
        <SearchBar onSubmitForm={props.onSubmitForm} />
        {/* icon need to be replaced */}
        <SearchIcon className="header__inputButton" />
      </div>
      <div className="header__icons">
        <VideoCallIcon className="header__icon" />
        <AppsIcon className="header__icon" />
        <NotificationsIcon className="header__icon" />
        <FaceIcon className="header__icon" />
      </div>
    </div>
  );
};

export default Header;
