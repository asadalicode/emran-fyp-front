import React from "react";
import { Route, Switch } from "react-router-dom";
import UserManagement from "../../../UserManagement/index";
import ProfileManagement from "../../../ProfileManagement/index";

export default () => (
  <Switch>
    <Route path="/view/:pid" component={ProfileManagement} />
  </Switch>
);
