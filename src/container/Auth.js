import React, { Component, Fragment } from "react";
// import { Card } from "@material-ui/core";

import AuthComp from "../components/Auth/AuthComp";

class Auth extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Auth: {
        login: ["Username", "Password"],
        register: ["Username", "Password", "Confirm password", "Phone"]
      },
      isNewAccount: false
    };
  }

  render() {
    return (
      <Fragment>
        <AuthComp state={this.state} />
      </Fragment>
    );
  }
}

export default Auth;
