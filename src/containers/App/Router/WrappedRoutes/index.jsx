import React from "react";
import { Route } from "react-router-dom";
import Layout from "../../../Layout/index";
import Commerce from "./Commerce";
import Finance from "./Finance";
import OnLineMarketingDashboard from "../../../Dashboards/OnLineMarketing/index";
import AppDashboard from "../../../Dashboards/App/index";
import BookingDashboard from "../../../Dashboards/Booking/index";
import FitnessDashboard from "../../../Dashboards/Fitness/index";
import UI from "./UI";
import Mail from "../../../Mail/index";
import Chat from "../../../Chat/index";
import Todo from "../../../Todo/index";
import Forms from "./Forms";
import Tables from "./Tables";
import Charts from "./Charts";
import Maps from "./Maps";
import Account from "./Account";
import ECommerce from "./ECommerce";
// import UserManagement from './UserManagement';
import TaskManagement from "../../../TaskManagement/index";
import ProjectManagement from "../../../ProjectManagement/index";
import ProjectManage from "../../../ProjectManage/index";
import ProjectForm from "../../../ProjectManage/components/ProjectForm";
import ProjectRepository from "../../../ProjectRepository";
import UserManagement from "../../../UserManagement/index";
import UserRoles from "../../../UserRoles/index";
import DefaultPages from "./DefaultPages";
import Documentation from "./Documentation";
import Roles from "../../../UserRoles/components/Roles";
import Dashboardme from "../../../Dashboardme";
import ProfileManagement from "./../../../ProfileManagement/index";
import EditUserForm from "./../../../UserManagement/components/EditUserForm";
import UserForm from "./../../../UserManagement/components/UserForm";
import EditProjectForm from "../../../ProjectManage/components/EditProjectForm";
import TeamManagement from "../../../TeamManagement";
import TeamForm from "../../../TeamManagement/components/TeamForm";
import EditTeamForm from "../../../TeamManagement/components/EditTeamForm";
import UserFormAntd from "../../../UserManagement/components/UserFormAntd";
import ProjectFormAntd from "../../../ProjectManage/components/ProjectFormAntd";
import UserFormEditAntd from "../../../UserManagement/components/UserFormEditAntd";
import ProjectFormEditAntd from "../../../ProjectManage/components/ProjectFormEditAntd";
import TaskTableAntd from "../../../TaskManagement/components/TaskTableAntd";
import RolesTableAntd from "../../../UserRoles/components/RolesTableAntd";
import RoleEditAntd from "../../../UserRoles/components/RoleEditAntd";
import RoleFormAntd from "../../../UserRoles/components/RoleFormAntd";
import TaskFormAntd from "../../../TaskManagement/components/TaskFormAntd";
export default () => (
  <div>
    <Layout />
    <div className="container__wrap">
      <Route path="/e_commerce_dashboard" component={Commerce} />
      <Route path="/UserManagement" component={UserManagement} />
      <Route path="/User/edit/:id" component={EditUserForm} />
      <Route path="/User/add" component={UserForm} />
      <Route path="/UserForm/add" component={UserFormAntd} />
      <Route path="/UserForm/edit" component={UserFormEditAntd} />
      <Route path="/Profiles/view/:pid" component={ProfileManagement} />
      <Route path="/UserRoles" component={UserRoles} />
      <Route path="/AllRoles" component={RolesTableAntd} />
      <Route path="/EditRole" component={RoleEditAntd} />
      <Route path="/AddRole" component={RoleFormAntd} />

      <Route path="/ProjectManagement" component={ProjectManagement} />

      <Route path="/ProjectManage" component={ProjectManage} />
      <Route path="/Project/edit/:id" component={EditProjectForm} />
      <Route path="/ProjectAdd" component={ProjectForm} />
      <Route path="/AddProject" component={ProjectFormAntd} />
      <Route path="/EditProject" component={ProjectFormEditAntd} />

      <Route path="/TeamManage" component={TeamManagement} />
      <Route path="/Team/edit/:id" component={EditTeamForm} />
      <Route path="/TeamAdd" component={TeamForm} />

      <Route path="/ProjectRepository" component={ProjectRepository} />
      <Route path="/taskTableAntd/:id" component={TaskTableAntd} />
      <Route path="/AddTask/:id" component={TaskFormAntd} />

      <Route path="/TaskManagement" component={TaskManagement} />
      <Route path="/admin/Dashboardme" component={Dashboardme} />

      <Route exact path="/app_dashboard" component={AppDashboard} />
      <Route path="/booking_dashboard" component={BookingDashboard} />
      <Route path="/finance_dashboard" component={Finance} />
      <Route path="/fitness_dashboard" component={FitnessDashboard} />
      <Route path="/ui" component={UI} />
      <Route path="/mail" component={Mail} />
      <Route path="/chat" component={Chat} />
      <Route path="/todo" component={Todo} />
      <Route path="/forms" component={Forms} />
      <Route path="/tables" component={Tables} />
      <Route path="/charts" component={Charts} />
      <Route path="/maps" component={Maps} />
      <Route path="/account" component={Account} />
      <Route path="/e-commerce" component={ECommerce} />
      <Route path="/default_pages" component={DefaultPages} />
      <Route path="/documentation" component={Documentation} />
      {/* <Route path="/ProjectManagement" component={ProjectManagement} /> */}

      {/* <Route path="/TaskManagement" component={TaskManagement} /> */}
    </div>
  </div>
);
