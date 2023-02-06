import React, { useState, useEffect } from "react";
import { Button, Table, Col, Row, Card, Badge } from "reactstrap";
import Panel from "@/shared/components/Panel";
import UsersDataService from "../../../services/usersService";

import { Link } from "react-router-dom";
// import TestService from "../../../services/usersService";
import { fireAb } from "./../../../firebase";
import auth from "../../../services/auth";

const reorder = (rows, startIndex, endIndex) => {
  const result = Array.from(rows);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
};
const UserTable = () => {
  const header = [
    { id: 0, title: "#" },
    { id: 1, title: "TEAM NAME" },
    { id: 2, title: "DESCRIPTION" },
    { id: 5, title: "ACTIONS" },
  ];

  const [users, setusers] = useState([]);
  const [role, setrole] = useState("");

  useEffect(() => {
    let data = {};
    fireAb.child("team").on("value", (snapshot) => {
      if (snapshot.val() !== null) {
        console.log("snap", snapshot.val());
        data = snapshot.val();
        // console.log(data);
      }
    });
    setusers(data);
    setusers(data);

    const user = auth.loggedInUser();
    console.log(user);
    setrole(user.role);

    // getUsers();
    // getRoles();
  }, []);

  const getUsers = () => {
    // const data = await UserDataService.getAllUsers();
    let data = {};
    fireAb.child("team").on("value", (snapshot) => {
      if (snapshot.val() !== null) {
        console.log("snap", snapshot.val());
        data = snapshot.val();
        // console.log(data);
      }
    });
    console.log(data);
    // users = dbdata;
    setusers(data);
    setusers(data);
    // console.log(data.docs);
    // setusers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };
  // const getRoles = async () => {
  //   const data = await UserRoleService.getAllRoles();
  //   console.log(data.docs);
  //   setroles(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  // };
  const onDelete = (id) => {
    fireAb.child(`team/${id}`).remove();
    getUsers();
  };
  const statusHandler = async (user, id) => {
    // const res = await UserDataService.updateUser(user.id, user);
    if (user.status.value == "active") {
      user.status.value = "disabled";
      user.status.label = "Disabled";
    } else {
      user.status.value = "active";
      user.status.label = "Active";
    }
    console.log(user);
    fireAb.child(`users/${id}`).set(user, (err) => {});
    // setTimeout(() => history.push("/UserManagement"), 500);
    getUsers();
  };

  return (
    <Col md={12} lg={12}>
      {/* <ReactTableBase
        key={"common"}
        columns={header}
        data={rows}
        tableConfig={tableConfig}
      /> */}
      <Panel lg={12} title={"Team Management"}>
        <Table responsive className="table--bordered">
          <thead>
            <tr>
              {header.map((users) => (
                <th key={users.id}>{users.title}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {Object.keys(users).map((id, index) => {
              return (
                <tr>
                  <td>{index + 1}</td>
                  <td>{users[id].teamName}</td>
                  <td>{users[id].description}</td>

                  <td>
                    {/* /UserManagement/view/:id */}
                    <Row>
                      <Col md={4}>
                        <Link to={`Team/edit/${id}`}>
                          <Button color="primary" size="sm">
                            Edit
                          </Button>
                        </Link>
                      </Col>
                      <Col md={5}>
                        <Button
                          color="danger"
                          size="sm"
                          onClick={() => onDelete(id)}
                        >
                          Delete
                        </Button>
                      </Col>
                    </Row>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </Panel>
    </Col>
  );
};

export default UserTable;
