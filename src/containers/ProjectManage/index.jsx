import React, { useState, useEffect } from "react";
// import { useTranslation } from 'react-i18next';
import { Col, Container, Row } from "reactstrap";
import UserTable from "./components/UserTable";
import UserAdd from "./components/User";
import userData from "../../shared/data/users.json";
import auth from "../../services/auth";
import ProjectTableAll from "./components/ProjectTableAll";
const ProfileManage = () => {
  // const { t } = useTranslation('common');
  const [users, setusers] = useState(userData);
  const [role, setrole] = useState("");

  useEffect(() => {
    const user = auth.loggedInUser();
    console.log(user);
    setrole(user.role);
  }, []);
  return (
    <Container>
      {/* <div className="clearfix" style={{ marginTop: "20px" }}></div> */}
      <Row>
        <Col md={6}>
          <h2>Project Managementss</h2>
          {/* <h2>users</h2> */}
        </Col>
      </Row>

      <Row>
        <ProjectTableAll />
      </Row>
      {/* </CardBody> */}
    </Container>
  );
};

export default ProfileManage;
