import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { NotFoundPage } from "../pages/common/404";
import { CreateAccountPage } from "../pages/common/create-account";
import { LoginPage } from "../pages/common/login";

export const LoggedOutRouter = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/create-account">
          <CreateAccountPage />
        </Route>
        <Route exact path="/">
          <LoginPage />
        </Route>
        <Route>
          <NotFoundPage />
        </Route>
      </Switch>
    </Router>
  );
};
