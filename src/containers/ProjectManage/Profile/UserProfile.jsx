import React from "react";
import { Col, Container, Row } from "reactstrap";
import ProfileMain from "./components/ProfileMain";
import ProfileCalendar from "./components/ProfileCalendar";
import ProfileTasks from "./components/ProfileTasks";
import ProfileTabs from "./components/ProfileTabs";
import { useParams } from "react-router-dom";

const UserProfile = () => {
  // console.log("first");
  // const { id } = useParams();
  // console.log("id", id);
  return (
    <Container>
      <div className="profile">
        <Row>
          <Col md={12} lg={12} xl={4}>
            <Row>
              <ProfileMain id={id} />
              {/* <ProfileCalendar /> */}
              <ProfileTasks id={id} />
            </Row>
          </Col>
          {/* <ProfileTabs /> */}
        </Row>
      </div>
    </Container>
  );
};

export default UserProfile;
