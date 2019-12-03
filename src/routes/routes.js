import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Auth from "../container/Auth";
import Dashboard from "../container/Dashboard/Dashboard";
import Redirect from "./Redirect";

const Routes = () => {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" component={Redirect(Auth)} />
          <Route path="/dashboard" component={Redirect(Dashboard)} />
        </Switch>
      </Router>
    </>
  );
};

export default Routes;
