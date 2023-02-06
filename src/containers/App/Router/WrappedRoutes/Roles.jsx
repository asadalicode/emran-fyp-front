import React from 'react';
import { Route, Switch } from 'react-router-dom';
import UserRoles from '../../../UserRoles/index';


export default () => (
  <Switch>
    <Route path="/UserRoles/Roles" component={UserRoles} />
  
  </Switch>
);
