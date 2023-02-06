import React from "react";
import { Col, Container, Row } from "reactstrap";
import ProfileMain from "./components/ProfileMain";
// import ProfileCalendar from "./components/ProfileCalendar";
import ProfileTasks from "./components/ProfileTasks";
// import ProfileTabs from "./components/ProfileTabs";
import { useParams, useLocation } from "react-router-dom";

const ProfileManagement = () => {
  const location = useLocation();
  console.log(location); // see below
  const { pid } = useParams();
  console.log("id", pid);
  return (
    <Container>
      <div className="profile">
        <Row>
          <Col md={12} lg={12} xl={12}>
            <Row>
              <ProfileMain id={pid} />
              {/* <ProfileCalendar /> */}
              <ProfileTasks id={pid} />
            </Row>
          </Col>
          {/* <ProfileTabs /> */}
        </Row>
      </div>
    </Container>
  );
};

export default ProfileManagement;
