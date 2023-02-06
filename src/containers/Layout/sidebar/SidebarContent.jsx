import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import SidebarLink from "./SidebarLink";
import SidebarCategory from "./SidebarCategory";

const SidebarContent = ({ onClick, sidebarCollapse }) => {
  const [role, setrole] = useState();

  useEffect(() => {
    const roles = localStorage.getItem('role');
    console.log(roles);
    setrole(roles);
  }, [role]);
  const hideSidebar = () => {
    onClick();
  };

  return (
    <div className="sidebar__content">
      <ul className="sidebar__block">
        <SidebarLink
          title="Dashboard"
          icon="home"
          route="/admin/Dashboardme"
          onClick={hideSidebar}
        />
        
        {/* Admin */}
        {role == "admin" ? (
          <>
            {/* user management */}
            <SidebarCategory
              title="User management"
              icon="layers"
              sidebarCollapse={sidebarCollapse}
            >
              <SidebarLink
                title="User Details"
                icon="home"
                route="/UserManagement"
                onClick={hideSidebar}
              />
              <SidebarLink
                title="User Roles"
                icon="home"
                route="/UserRoles"
                onClick={hideSidebar}
              />
            </SidebarCategory>
          </>
        ) : (
          <></>
        )}

        {/* Team Member */}
        {role == "Team Member" ? (
          <>
            <SidebarLink
              title="Task Management"
              icon="home"
              route="/TaskManagement"
              onClick={hideSidebar}
            />
          </>
        ) : (
          <></>
        )}


        {/* CEO */}

        {role == "ceo" ? (
          <>
            {/* user management */}
            <SidebarCategory
              title="User management"
              icon="layers"
              sidebarCollapse={sidebarCollapse}
            >
              <SidebarLink
                title="User Details"
                icon="home"
                route="/UserManagement"
                onClick={hideSidebar}
              />
              <SidebarLink
                title="User Roles"
                icon="home"
                route="/AllRoles"
                onClick={hideSidebar}
              />
            </SidebarCategory>
            {/* Project management */}
            <SidebarCategory
              title="Project management"
              icon="layers"
              sidebarCollapse={sidebarCollapse}
            >
              <SidebarLink
                title="Project Management"
                icon="home"
                route="/ProjectManage"
                onClick={hideSidebar}
              />
              {/* <SidebarLink
                title="Project Repository"
                icon="home"
                route="/ProjectRepository"
                onClick={hideSidebar}
              /> */}
            </SidebarCategory>
            {/* Project management */}
            {/* <SidebarCategory
              title="Project management"
              icon="layers"
              sidebarCollapse={sidebarCollapse}
            >
              <SidebarLink
                title="Project Repository"
                icon="home"
                route="/ProjectRepository"
                onClick={hideSidebar}
              />
            </SidebarCategory> */}
            {/* <SidebarCategory
              title="Task Management"
              icon="layers"
              sidebarCollapse={sidebarCollapse}
            >
              <SidebarLink
                title="Task Management"
                icon="home"
                route="/TaskManagement"
                onClick={hideSidebar}
              />
            </SidebarCategory> */}
          </>
        ) : (
          <></>
        )}

        {/* Project Manager */}
        {role == "Project Manager" ? (
          <>
            {/* Project management */}
            <SidebarCategory
              title="Project management"
              icon="layers"
              sidebarCollapse={sidebarCollapse}
            >
              <SidebarLink
                title="Project Management"
                icon="home"
                route="/ProjectManage"
                onClick={hideSidebar}
              />
       
            </SidebarCategory>
            <SidebarLink
              title="Team Management"
              icon="home"
              route="/TeamManage"
              onClick={hideSidebar}
            />
          </>
        ) : (
          <></>
        )}
      </ul>
      <ul className="sidebar__block">
        <SidebarLink title="Log Out" icon="exit" route="/log_in" />
      </ul>
  

    </div>
  );
};

SidebarContent.propTypes = {
  changeToDark: PropTypes.func.isRequired,
  changeToLight: PropTypes.func.isRequired,
  onClick: PropTypes.func.isRequired,
  sidebarCollapse: PropTypes.bool,
};

SidebarContent.defaultProps = {
  sidebarCollapse: false,
};

export default SidebarContent;
