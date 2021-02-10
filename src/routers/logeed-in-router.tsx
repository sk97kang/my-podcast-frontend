import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { NotFoundPage } from "../pages/common/404";
import { LoginPage } from "../pages/common/login";

export const LoggedInRouter = () => {
  return (
    <Router>
      <Switch>
        <Route path="/">
          <LoginPage />
        </Route>
        <Route>
          <NotFoundPage />
        </Route>
      </Switch>
    </Router>
  );
};
