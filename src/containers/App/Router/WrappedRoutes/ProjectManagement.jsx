import React from "react";
import { Route, Switch } from "react-router-dom";
import UserManagement from "../../../UserManagement/index";
import ProjectManagement from "../../../ProjectManagement/index";

export default () => (
  <Switch>
    <Route
      path="/ProjectManagement/ProjectManagement"
      component={ProjectManagement}
    />
  </Switch>
);
