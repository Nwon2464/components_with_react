import React, { useState, useEffect, useRef } from "react";
import "./Header.css";

import SearchBar from "./SearchBar/SearchBar";

import VideoCallIcon from "@material-ui/icons/VideoCall";
import MenuIcon from "@material-ui/icons/Menu";
import AppsIcon from "@material-ui/icons/Apps";
import NotificationsIcon from "@material-ui/icons/Notifications";
import FaceIcon from "@material-ui/icons/Face";
import SearchIcon from "@material-ui/icons/Search";
import { Link } from "react-router-dom";
import GoogleAuth from "../GoogleAuth";
const Header = (props) => {
  const [isActive, setIsActive] = useState(false);
  const onFaceIconClick = () => {
    setIsActive(!isActive);
  };
  const dropdownRef = useRef(null);
  console.log(isActive);

  useEffect(() => {
    const pageClickEvent = (e) => {
      if (
        dropdownRef.current !== null &&
        !dropdownRef.current.contains(e.target)
      ) {
        setIsActive(!isActive);
      }
    };
    if (isActive) {
      window.addEventListener("click", pageClickEvent);
    }
    return () => {
      window.removeEventListener("click", pageClickEvent);
    };
  }, [isActive]);
  console.log(props);
  return (
    <div className="header">
      <div className="header__left">
        <button>
          <MenuIcon />
        </button>
        <Link to="/">
          <img
            className="header__logo"
            src="https://images.indianexpress.com/2017/08/youtube_logo_new-759.jpg"
            alt="youtube"
          />
        </Link>
      </div>
      <div className="header__input">
        <SearchBar onSubmitForm={props.onSubmitForm} />
        {/* icon need to be replaced */}
        <SearchIcon className="header__inputButton" />
      </div>
      <div className="header__icons">
        <button>
          <VideoCallIcon className="header__icon" />
        </button>
        <button>
          <AppsIcon className="header__icon" />
        </button>
        <button>
          <NotificationsIcon className="header__icon" />
        </button>

        <button onClick={onFaceIconClick}>
          <FaceIcon className="header__icon" />
        </button>
        <div
          ref={dropdownRef}
          className={`menu ${isActive ? "active" : "inactive"}`}
        >
          <div className="links">
            <GoogleAuth />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
