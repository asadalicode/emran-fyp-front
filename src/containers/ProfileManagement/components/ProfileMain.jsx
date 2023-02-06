import React, { useEffect, useState } from "react";
import { Card, CardBody, Col, Button, Badge } from "reactstrap";
import MessageTextOutlineIcon from "mdi-react/MessageTextOutlineIcon";
import { fireAb } from "../../../firebase";
import { useHistory, useParams, Link } from "react-router-dom";

const ProfileMain = ({ id }) => {
  const [user, setUser] = useState({});

  useEffect(() => {
    console.log("first", id);
    fireAb
      .child(`users/${id}`)
      .get()
      .then((snapshot) => {
        if (snapshot.exists()) {
          setUser({ ...snapshot.val() });
          console.log("user is", user);
        } else {
          console.log("user is a", user);
          setUser({});
        }
      });
  }, [id]);

  return (
    <Col md={12} lg={12} xl={12}>
      <Card>
        <CardBody className="profile__card">
          <div className="profile__information">
            {/* <div className="profile__avatar">
              <img src={Ava} alt="avatar" />
            </div> */}
            <div className="profile__data">
              <h3 style={{ marginBottom: "10px" }} className="profile__name">
                {user.userName}
                <span>
                  {" "}
                  <Badge
                    style={{ fontSize: "12px" }}
                    color={
                      user?.status?.value == "active" ? "success" : "danger"
                    }
                  >
                    {user?.status?.value}
                  </Badge>
                </span>
              </h3>

              <h4 className="profile__work">{user?.role?.value}</h4>
              <h4 className="profile__contact">{user.email}</h4>
            </div>
          </div>
          <div className="profile__stats">
            <div className="profile__stat">
              <p className="profile__stat-number">05</p>
              <p className="profile__stat-title">Projects</p>
            </div>
            <div className="profile__stat">
              <p className="profile__stat-number">24</p>
              <p className="profile__stat-title">Tasks</p>
            </div>
            <div className="profile__stat">
              <p className="profile__stat-number">12</p>
              <p className="profile__stat-title">Completed</p>
            </div>
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default ProfileMain;
