import React, { Fragment } from "react";
import "./GoogleAuth.css";
import { Link } from "react-router-dom";
import { signIn, signOut } from "./actions/index";
import { connect } from "react-redux";

import AccountCircleIcon from "@material-ui/icons/AccountCircle";
class GoogleAuth extends React.Component {
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
      return;
    } else if (this.props.isSignedIn) {
      return (
        <div
          style={{ backgroundColor: "white", border: "1px solid red" }}
          className="dropdown__auth"
        >
          <ul id="log__in__auth2">
            <li>
              <AccountCircleIcon />
              <a onClick={this.onSignOut} href="#">
                Logout
              </a>
            </li>
            <li>
              <a onClick={this.onSignOut} href="#">
                <AccountCircleIcon />
              </a>
            </li>
            <li>
              <img className="auth__logged__in" src={this.props.userImage} />
            </li>
            <li>
              <a href="#">ProfileProfileProfile</a>
            </li>
          </ul>
        </div>
      );
    } else {
      return (
        <div className="dropdown__auth">
          <ul>
            <li style={{ backgroundColor: "#CB4024" }}>
              <a onClick={this.onSignIn} href="#">
                <i class="google icon" />
                Log in with Google
              </a>
            </li>

            <li style={{ backgroundColor: "#333333" }}>
              <a onClick={this.onSignIn} href="#">
                <i class="github icon" />
                Log in with Github
              </a>
            </li>
            <li style={{ backgroundColor: "#333333" }}>
              <Link to="/signup">Sign Up</Link>
            </li>
          </ul>
        </div>
      );
    }
  }

  render() {
    console.log(this.props);
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
