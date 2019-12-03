import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Auth from "../container/Auth";
import Dashboard from "../container/Dashboard/Dashboard";

const Routes = () => {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/" component={Auth} />
          <Route path="/dashboard" component={Dashboard} />
        </Switch>
      </Router>
    </>
  );
};

export default Routes;
