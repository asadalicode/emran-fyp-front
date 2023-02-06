import React from "react";
import { Route, Switch } from "react-router-dom";
import UserManagement from "../../../UserManagement/index";
import UserProfile from "../../../UserManagement/Profile/UserProfile";

export default () => (
  <Switch>
    <Route path="/UserManagement/UserDetails" component={UserManagement} />
  </Switch>
);
