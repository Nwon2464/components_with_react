import React, { useState, useEffect } from "react";
import "./GoogleAuth.css";

class GoogleAuth extends React.Component {
  state = { isSignedIn: null };
  componentDidMount() {
    window.gapi.load("client:auth2", () => {
      window.gapi.client
        .init({
          clientId:
            "979708510452-oa44268dodlk7at65bponsb27c0utgn2.apps.googleusercontent.com",
          scope: "email",
        })
        .then(() => {
          this.auth = window.gapi.auth2.getAuthInstance();
          this.setState({ isSignedIn: this.auth.isSignedIn.get() });
        });
    });
  }
  renderButton() {
    if (this.state.isSignedIn === null) {
      return <div>...?</div>;
    } else if (this.state.isSignedIn) {
      return <div>You are Signed in</div>;
    } else {
      return <div>You are not signed in</div>;
    }
  }
  render() {
    console.log(this);
    return <button className="log__in">{this.renderButton()}</button>;
  }
}

export default GoogleAuth;
