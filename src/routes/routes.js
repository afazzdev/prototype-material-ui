import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Auth from "../container/Auth";

const Routes = () => {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/" component={Auth} />
        </Switch>
      </Router>
    </>
  );
};

export default Routes;
