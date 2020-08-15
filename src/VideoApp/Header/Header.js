import React, { useState, useEffect, useRef } from "react";
import "./Header.css";
import { connect } from "react-redux";
import SearchBar from "./SearchBar/SearchBar";

import GoogleAuth from "../GoogleAuth";
import LoginModal from "./LoginModal";
import LoginSignUpButton from "./LoginSignUpButton";

import VideoCallIcon from "@material-ui/icons/VideoCall";
import MenuIcon from "@material-ui/icons/Menu";
import AppsIcon from "@material-ui/icons/Apps";
import NotificationsIcon from "@material-ui/icons/Notifications";
import FaceIcon from "@material-ui/icons/Face";
import SearchIcon from "@material-ui/icons/Search";
import { Link } from "react-router-dom";
import HeaderIconRight from "../FirstIconRight";
const Header = (props) => {
  console.log(props);
  const [isActive, setIsActive] = useState(false);
  const onFaceIconClick = () => {
    setIsActive(!isActive);
  };
  const dropdownRef = useRef(null);

  useEffect(() => {
    const pageClickEvent = (e) => {
      if (dropdownRef.current !== null) {
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

  const renderButton = () => {
    if (props.isSignedIn === null) {
      return (
        <div
          style={{ marginLeft: "10px" }}
          className="ui active inline loader"
        ></div>
      );
    } else if (props.isSignedIn) {
      return (
        <img
          style={{ marginLeft: "10px", width: "25px", borderRadius: "25px" }}
          src={props.userImage}
        />
      );
    } else {
      return <FaceIcon className="header__icon" />;
    }
  };
  return (
    <div className="header">
      <div className="header__left">
        <button>
          <MenuIcon />
        </button>
        <Link to="/">
          <img
            className="header__logo"
            src="https://react.semantic-ui.com/logo.png"
            alt="youtube"
          />
        </Link>
      </div>
      <div className="header__input">
        <SearchBar onSubmitForm={props.onSubmitForm} />
        <SearchIcon className="header__inputButton" />
      </div>
      <div className="header__icons">
        <Link to="/streams/new">
          <VideoCallIcon
            style={{ marginRight: "10px" }}
            className="header__icon"
          />
        </Link>
        {!props.isSignedIn ? <LoginSignUpButton /> : null}

        <button onClick={onFaceIconClick}>{renderButton()}</button>
        <div
          ref={dropdownRef}
          className={`menu ${isActive ? "active" : "inactive"}`}
        >
          <GoogleAuth />
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    isSignedIn: state.auth.isSignedIn,
    userId: state.auth.userId,
    userImage: state.auth.userImage,
  };
};
export default connect(mapStateToProps)(Header);
