import React, { useState, useEffect } from "react";
import { Card, CardBody, Col, Row } from "reactstrap";
import { Link } from "react-router-dom";
import { Button } from "antd";

import ProjectImg from "./project.png";
import UserImg from "./users.png";
import TaskImg from "./task.png";
import RepoImg from "./repo.png";
import auth from "../../../services/auth";
import { ProjectOutlined, UserAddOutlined } from "@ant-design/icons";

const CardBasic = () => {
  console.log("Card Basic", localStorage.getItem("role"));
  const [role, setRole] = useState("");

  useEffect(() => {
    const roles = localStorage.getItem("role");
    setRole(roles);
    console.log("ssdas");
    const user = auth.loggedInUser();
    console.log(user);
    //setrole(user.role);
  });
  return (
    console.log("role", role),
    (
      <Row>
        {role == "ceo" ? (
          <>
            <Col>
              <Link to={"/UserManagement"}>
                <Card>
                  <CardBody className="pricing-card pricing-card--primary">
                    <div className="pricing-card__body">
                      <img className="pricing-card__img" src={UserImg} alt="" />
                      <h3 className="pricing-card__plan">Users</h3>
                      <hr />
                      <p className="pricing-card__price">
                        ..<span>/..</span>
                      </p>
                      <Link to="/UserManagement">
                        {" "}
                        <Button style={{ marginBottom: 10 }} type="primary">
                          <UserAddOutlined />
                          All Users
                        </Button>
                      </Link>
                      <Link to="/UserForm/add">
                        {" "}
                        <Button
                          style={{ backgroundColor: "green" }}
                          type="primary"
                        >
                          <UserAddOutlined />
                          Add Users
                        </Button>
                      </Link>
                    </div>
                  </CardBody>
                </Card>
              </Link>
            </Col>
            <Col>
              <Link to={"/AllRoles"}>
                <Card>
                  <CardBody className="pricing-card pricing-card--primary">
                    <div className="pricing-card__body">
                      <img className="pricing-card__img" src={UserImg} alt="" />
                      <h3 className="pricing-card__plan">Role</h3>
                      <hr />
                      <p className="pricing-card__price">
                        ..<span>/..</span>
                      </p>
                      <Link to="/AllRoles">
                        {" "}
                        <Button style={{ marginBottom: 10 }} type="primary">
                          <ProjectOutlined />
                          All Roles
                        </Button>
                      </Link>
                      <Link to="/AddRole">
                        {" "}
                        <Button
                          style={{ backgroundColor: "green" }}
                          type="primary"
                        >
                          <ProjectOutlined />
                          Add Roles
                        </Button>
                      </Link>
                    </div>
                  </CardBody>
                </Card>
              </Link>
            </Col>
            <Col>
              <Link to={"/ProjectManage"}>
                <Card>
                  <CardBody className="pricing-card pricing-card--primary">
                    <div className="pricing-card__body">
                      <img
                        className="pricing-card__img"
                        src={ProjectImg}
                        alt=""
                      />
                      <h3 className="pricing-card__plan">Projects</h3>
                      <hr />
                      <p className="pricing-card__price">
                        ..<span>/..</span>
                      </p>
                      {/* <p className="pricing-card__feature">
                        Completed projects
                      </p>
                      <p className="pricing-card__feature">
                        incompleted projects
                      </p> */}
                      <Link to="/ProjectManage">
                        {" "}
                        <Button style={{ marginBottom: 10 }} type="primary">
                          <ProjectOutlined />
                          All Projects
                        </Button>
                      </Link>
                      <Link to="/AddProject">
                        {" "}
                        <Button
                          style={{ backgroundColor: "green" }}
                          type="primary"
                        >
                          <ProjectOutlined />
                          Add Projects
                        </Button>
                      </Link>
                    </div>
                  </CardBody>
                </Card>
              </Link>
            </Col>
          </>
        ) : (
          <></>
        )}
        {role == "Project Manager" ? (
          <>
            <Col>
              {/* <Link to={"/ProjectManage"}>
                <Card>
                  <CardBody className="pricing-card pricing-card--primary">
                    <div className="pricing-card__body">
                      <img
                        className="pricing-card__img"
                        src={ProjectImg}
                        alt=""
                      />
                      <h3 className="pricing-card__plan">Projects</h3>
                      <hr />
                      <p className="pricing-card__price">
                        ..<span>/..</span>
                      </p>
                      <p className="pricing-card__feature">
                        Completed projects
                      </p>
                      <p className="pricing-card__feature">
                        incompleted projects
                      </p>
                      <p className="pricing-card__feature pricing-card__feature--inactive">
                        to do
                      </p>
                      <p className="pricing-card__feature pricing-card__feature--inactive">
                        not do
                      </p>
                    </div>
                  </CardBody>
                </Card>
              </Link> */}
              <Link to={"/ProjectManage"}>
                <Card>
                  <CardBody className="pricing-card pricing-card--primary">
                    <div className="pricing-card__body">
                      <img
                        className="pricing-card__img"
                        src={ProjectImg}
                        alt=""
                      />
                      <h3 className="pricing-card__plan">Projects</h3>
                      <hr />
                      <p className="pricing-card__price">
                        ..<span>/..</span>
                      </p>

                      <Link to="/ProjectManage">
                        {" "}
                        <Button type="primary">All Projects</Button>
                      </Link>
                      <Link to="/AddProject">
                        {" "}
                        <Button type="primary">Add Projects</Button>
                      </Link>
                    </div>
                  </CardBody>
                </Card>
              </Link>
            </Col>

            {/* <Col>
              <Link to={"/ProjectRepository"}>
                <Card>
                  <CardBody className="pricing-card pricing-card--primary">
                    <div className="pricing-card__body">
                      <img className="pricing-card__img" src={RepoImg} alt="" />
                      <h3 className="pricing-card__plan">Project Repository</h3>
                      <hr />
                      <p className="pricing-card__price">
                        ..<span>/..</span>
                      </p>
                      <p className="pricing-card__feature">
                        Completed Projects
                      </p>
                      <p className="pricing-card__feature">updated projects</p>
                      <p className="pricing-card__feature pricing-card__feature--inactive"></p>
                      <p className="pricing-card__feature pricing-card__feature--inactive">
                        completed by
                      </p>
                    </div>
                  </CardBody>
                </Card>
              </Link>
            </Col> */}

            {/* <Col>
              <Link to={"/TaskManagement"}>
                <Card>
                  <CardBody className="pricing-card pricing-card--primary">
                    <div className="pricing-card__body">
                      <img className="pricing-card__img" src={TaskImg} alt="" />
                      <h3 className="pricing-card__plan">Tasks</h3>
                      <hr />
                      <p className="pricing-card__price">
                        ..<span>/..</span>
                      </p>
                      <p className="pricing-card__feature">Completed Task</p>
                      <p className="pricing-card__feature">incompleted Task</p>
                      <p className="pricing-card__feature pricing-card__feature--inactive">
                        to do
                      </p>
                      <p className="pricing-card__feature pricing-card__feature--inactive">
                        not do
                      </p>
                    </div>
                  </CardBody>
                </Card>
              </Link>
            </Col> */}
          </>
        ) : (
          <></>
        )}

        {role == "Team Lead" ? (
          <>
            <Col>
              <Link to={"/ProjectManagement"}>
                <Card>
                  <CardBody className="pricing-card pricing-card--primary">
                    <div className="pricing-card__body">
                      <img
                        className="pricing-card__img"
                        src={ProjectImg}
                        alt=""
                      />
                      <h3 className="pricing-card__plan">Projects</h3>
                      <hr />
                      <p className="pricing-card__price">
                        ..<span>/..</span>
                      </p>
                      <p className="pricing-card__feature">
                        Completed projects
                      </p>
                      <p className="pricing-card__feature">
                        incompleted projects
                      </p>
                      <p className="pricing-card__feature pricing-card__feature--inactive">
                        to do
                      </p>
                      <p className="pricing-card__feature pricing-card__feature--inactive">
                        not do
                      </p>
                    </div>
                  </CardBody>
                </Card>
              </Link>
            </Col>
          </>
        ) : (
          <></>
        )}

        {role == "Team Member" ? (
          <>
            <Col>
              <Link to={"/TaskManagement"}>
                <Card>
                  <CardBody className="pricing-card pricing-card--primary">
                    <div className="pricing-card__body">
                      <img className="pricing-card__img" src={TaskImg} alt="" />
                      <h3 className="pricing-card__plan">Tasks</h3>
                      <hr />
                      <p className="pricing-card__price">
                        ..<span>/..</span>
                      </p>
                      <p className="pricing-card__feature">Completed Task</p>
                      <p className="pricing-card__feature">incompleted Task</p>
                      <p className="pricing-card__feature pricing-card__feature--inactive">
                        to do
                      </p>
                      <p className="pricing-card__feature pricing-card__feature--inactive">
                        not do
                      </p>
                    </div>
                  </CardBody>
                </Card>
              </Link>
            </Col>
          </>
        ) : (
          <></>
        )}
      </Row>
    )
  );
};

export default CardBasic;
