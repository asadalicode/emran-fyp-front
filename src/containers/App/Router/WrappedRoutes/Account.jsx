import React from "react";
import { Route, Switch } from "react-router-dom";
import Profile from "../../../Account/Profile/index";
import ChangePassword from "../../../UserManagement/ChangePassword";

export default () => (
  <Switch>
    <Route path="/account/profile" component={Profile} />
    <Route path="/account/changePassword" component={ChangePassword} />
  </Switch>
);
