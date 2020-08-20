import React, { Fragment } from "react";
import "./GoogleAuth.css";
import { Link } from "react-router-dom";
import { signIn, signOut } from "./actions/index";
import { connect } from "react-redux";

import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import LoginModal from "./Header/LoginModal";
import LoginModalForm from "./Header/LoginModalForm";
import ToggleOffOutlinedIcon from "@material-ui/icons/ToggleOffOutlined";
import Brightness2OutlinedIcon from "@material-ui/icons/Brightness2Outlined";
import FirstIconRight from "./FirstIconRight";
import FaceIcon from "@material-ui/icons/Face";
import NavBar from "./Header/NavBar/NavBar";
import NavItem from "./Header/NavBar/NavItem";
import DropdownMenu from "./Header/NavBar/DropdownMenu";
import PersonOutlineIcon from "@material-ui/icons/PersonOutline";
import SubscriptionsOutlinedIcon from "@material-ui/icons/SubscriptionsOutlined";

import AccountCircleOutlinedIcon from "@material-ui/icons/AccountCircleOutlined";

import DashboardOutlinedIcon from "@material-ui/icons/DashboardOutlined";
import LanguageIcon from "@material-ui/icons/Language";
import SupervisedUserCircleOutlinedIcon from "@material-ui/icons/SupervisedUserCircleOutlined";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import SettingsApplicationsOutlinedIcon from "@material-ui/icons/SettingsApplicationsOutlined";
class GoogleAuth extends React.Component {
  constructor(props) {
    super(props);
    this.modalRef = React.createRef();
    this.state = {
      open: false,
    };
  }

  openLoginModal = () => {
    this.modalRef.current.openModal();
  };

  componentDidMount() {
    window.gapi.load("client:auth2", () => {
      window.gapi.client
        .init({
          clientId:
            "1039122878379-b81ks1uqmmh4frc0dl9rm1ut4rg2708f.apps.googleusercontent.com",
          scope: "email",
        })
        .then(() => {
          this.auth = window.gapi.auth2.getAuthInstance();
          this.onAuthChange(this.auth.isSignedIn.get());
          this.auth.isSignedIn.listen(this.onAuthChange);
        });
    });
  }

  onAuthChange = (isSignedIn) => {
    if (isSignedIn) {
      const profile = this.auth.currentUser.get().getBasicProfile();
      this.props.signIn(profile);
    } else {
      this.props.signOut();
    }
  };
  onSignIn = () => {
    this.auth.signIn();
  };
  onSignOut = () => {
    this.auth.signOut();
  };
  renderButton() {
    if (this.props.isSignedIn === null) {
      return (
        <div
          style={{ fontSize: "2.1875rem" }}
          className="ui active small inline loader"
        ></div>
      );
    } else if (this.props.isSignedIn) {
      return (
        <NavBar>
          <NavItem
            loggedIcon={<AccountCircleOutlinedIcon className="header__icon" />}
          >
            <DropdownMenu
              onSignOut={this.onSignOut}
              allContents={loggedInContents}
              languages={languages}
            ></DropdownMenu>
          </NavItem>
        </NavBar>
        // <div
        //   style={{ backgroundColor: "white", border: "1px solid red" }}
        //   className="dropdown__auth"
        // >
        //   <ul id="log__in__auth2">
        //     <li>
        //       <AccountCircleOutlinedIcon />
        //       <a onClick={this.onSignOut} href="#">
        //         Logout
        //       </a>
        //     </li>
        //     <li>
        //       <a onClick={this.onSignOut} href="#">
        //         <AccountCircleOutlinedIcon />
        //       </a>
        //     </li>
        //     <li>
        //       <img className="auth__logged__in" src={this.props.userImage} />
        //     </li>
        //     <li>
        //       <a href="#">ProfileProfileProfile</a>
        //     </li>
        //   </ul>
        // </div>
      );
    } else {
      return (
        <NavBar>
          <NavItem
            notLoggedIcon={
              <FaceIcon fontSize="large" className="header__icon" />
            }
          >
            <DropdownMenu
              allContents={yetLoggedInContents}
              languages={languages}
            ></DropdownMenu>
          </NavItem>
        </NavBar>
      );
    }
  }

  render() {
    return <Fragment>{this.renderButton()}</Fragment>;
  }
}

const mapStateToProps = (state) => {
  return {
    isSignedIn: state.auth.isSignedIn,
    userId: state.auth.userId,
    userImage: state.auth.userImage,
  };
};
export default connect(mapStateToProps, { signIn, signOut })(GoogleAuth);

const yetLoggedInContents = [
  {
    content: "Language",
    rightIcon: <ChevronRightIcon />,
    leftIcon: <LanguageIcon />,
    goToMenu: "settings",
  },
  {
    content: "Dark Theme",
    rightIcon: <ToggleOffOutlinedIcon />,
    leftIcon: <Brightness2OutlinedIcon />,
  },
  {
    content: "Log In",
    leftIcon: <ExitToAppIcon />,
  },
];

const loggedInContents = [
  {
    content: "dnjsskarb123",
    leftIcon: <AccountCircleOutlinedIcon />,
    logged: true,
    online: "Online",
    offline: "offline",
  },
  {
    content: "Creator Dashboard",
    leftIcon: <DashboardOutlinedIcon />,
    logged: true,
  },
  {
    content: "Friends",
    leftIcon: <SupervisedUserCircleOutlinedIcon />,
    logged: true,
  },
  {
    content: "Subscriptions",
    leftIcon: <SubscriptionsOutlinedIcon />,
    logged: true,
  },

  {
    content: "Settings",
    leftIcon: <SettingsApplicationsOutlinedIcon />,
    logged: true,
  },
  {
    content: "Language",
    goToMenu: "settings",
    rightIcon: <ChevronRightIcon />,
    leftIcon: <LanguageIcon />,
    logged: true,
  },

  {
    content: "Dark Theme",
    rightIcon: <ToggleOffOutlinedIcon />,
    leftIcon: <Brightness2OutlinedIcon />,
    logged: true,
  },
  {
    content: "Log Out",
    leftIcon: <ExitToAppIcon />,
    logged: true,
  },
  // {
  //   content: "Create DashBoard",
  //   leftIcon: <BoltIcon />
  // }
];
const languages = [
  {
    language: "Select",
    leftIcon: <ChevronLeftIcon />,
    goToMenu: "main",
    backgroundcolor: "#EFEFF1",
    logged: true,
  },
  {
    language: "English",
    logged: true,
  },
  {
    language: "Dansk",
    logged: true,
  },
  {
    language: "English - UK",
    logged: true,
  },
  {
    language: "Español - España",
    logged: true,
  },
  {
    language: "中文 简体",
    logged: true,
  },
  {
    language: "日本語",
    logged: true,
  },
  {
    language: "한국어",
    logged: true,
  },
];
