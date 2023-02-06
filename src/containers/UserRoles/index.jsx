import React, { useState, useEffect } from "react";
// import { useTranslation } from 'react-i18next';
import {
  Col,
  Container,
  Row,
  Button,
  Modal,
  Card,
  CardBody,
  ButtonToolbar,
} from "reactstrap";
import BasicHookForm from "../Form/ReactHookForm/BasikHookForm";
import RolesDetails from "./components/RolesDetails";
import RolesTable from "./components/RoleTable";
import RoleAdd from "./components/Roles";
import RoleForm from "./components/RolesForm";
import auth from "../../services/auth";

const UserRoles = () => {
  // const { t } = useTranslation('common');
  const [role, setrole] = useState("");

  useEffect(() => {
    const user = auth.loggedInUser();
    console.log(user);
    setrole(user.role);
  }, []);
  const [roles, setroles] = useState([
    {
      id: 1,
      roleId: "1",
      roleName: "CEO",
    },
    {
      id: 2,
      roleId: "2",
      roleName: "Project Manager",
    },
    {
      id: 3,
      roleId: "3",
      roleName: "Team Lead",
    },
    {
      id: 4,
      roleId: "4",
      roleName: "Team Member",
    },
  ]);
  const addRole = (role) => {
    const newRoles = [...roles, role];
    setroles(newRoles);
  };
  return (
    <Container className="dashboard">
      <div className="clearfix" style={{ marginTop: "20px" }}></div>
      <Row>
        <Col md={12}>
          <h2>Roles</h2>
        </Col>
      </Row>

      <CardBody>
        <Row>
          {/* <RoleForm roles={roles}/> */}
          {role == "ceo" ? <></> : <RoleAdd />}

          {/* <RolesDetails /> */}
          <div>
            <RolesTable roles={roles} />
          </div>
        </Row>
      </CardBody>
    </Container>
  );
};

export default UserRoles;
