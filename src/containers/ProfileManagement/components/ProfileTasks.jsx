import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Card, CardBody, Col } from "reactstrap";

// import todoCard from "../../../Todo/types";
// import ProfileToDo from "./ProfileTodo";

const ProfileTasks = () => {
  // const { ids } = useParams();
  // console.log("ids", ids);
  return (
    <Col md={12} lg={12} xl={12}>
      <Card>
        <CardBody className="profile__card">
          <p className="profile__current-tasks-title">
            Current tasks <span>123</span>
          </p>
          <div className="profile__current-tasks">
            {/* {noArchivedTodoElements &&
              noArchivedTodoElements.map((element) => (
                <ProfileToDo
                  key={element.data.id}
                  id={element.data.id}
                  label={element.data.title}
                  checked={element.data.isCompleted}
                  onChange={editTodoElementData({
                    todoElements,
                    editTodoElementAction,
                  })}
                />
              ))}
            {archivedTodoElements &&
              archivedTodoElements.map((element) => (
                <ProfileToDo
                  key={element.data.id}
                  id={element.data.id}
                  label={element.data.title}
                  checked={element.data.isCompleted}
                  disabled
                />
              ))}
            <Link to="/todo" className="profile__see-all-tasks">
              See all tasks
            </Link> */}
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default ProfileTasks;
