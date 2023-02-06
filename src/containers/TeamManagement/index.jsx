import React, { useState, useEffect } from "react";
// import { useTranslation } from 'react-i18next';
import { Col, Container, Row, Button } from "reactstrap";
import UserTable from "./components/UserTable";
import UserAdd from "./components/User";
import userData from "../../shared/data/users.json";
import auth from "../../services/auth";
import { Link } from "react-router-dom";

const TeamManagement = () => {
  // const { t } = useTranslation('common');
  const [users, setusers] = useState([]);
  const [role, setrole] = useState("");

  useEffect(() => {
    const user = auth.loggedInUser();
    console.log(user);
    setrole(user.role);
  }, []);
  return (
    <Container>
      {/* <div className="clearfix" style={{ marginTop: "20px" }}></div> */}
      <Row style={{ marginBottom: "20px" }}>
        <Col md={6}>
          <h2>Team Management</h2>
          {/* <h2>users</h2> */}
        </Col>
        <Col md={6} style={{ float: "right" }}>
          {/* Team Lead */}
          {/* {role == "admin" ? (
            <> */}
          <UserAdd />
          {/* </>
          ) : (
            <></>
          )} */}
        </Col>
      </Row>

      <Row>
        {/* <RolesDetails /> */}
        <UserTable users={users} />
      </Row>
      {/* </CardBody> */}
    </Container>
  );
};

export default TeamManagement;
