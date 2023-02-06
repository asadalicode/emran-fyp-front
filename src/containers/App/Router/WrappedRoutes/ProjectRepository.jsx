import React from 'react';
import { Route, Switch } from 'react-router-dom';
import UserManagement from '../../../UserManagement/index';
import ProjectManagement from '../../../ProjectManagement/index';
import ProjectRepository from '../../../ProjectRepository';

export default () => (
  <Switch>
    <Route path="/ProjectRepository/ProjectRepository" component={ProjectRepository} />
  
  </Switch>
);
