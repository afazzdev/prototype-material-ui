import React from "react";
import { withRouter } from "react-router-dom";

const Redirect = RedirectedComponent => {
  class NewComp extends React.Component {
    state = {};
    //WARNING! To be deprecated in React v17. Use componentDidMount instead.
    componentDidMount() {
      const { history, location } = this.props;
      if (localStorage.getItem("token")) {
        history.push("/dashboard");
      } else if (!localStorage.getItem("token")) {
        history.push("/");
      }
    }

    render() {
      return <RedirectedComponent {...this.props} />;
    }
  }

  return withRouter(NewComp);
};

export default Redirect;
