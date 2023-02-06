import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Button, Table, Col, Row, Card, Badge } from "reactstrap";
import Panel from "@/shared/components/Panel";
import ProjectDataService from "../../../services/projectService";
import { Link } from "react-router-dom";
import { fireAb } from "../../../firebase";
import auth from "../../../services/auth";

// import TestService from "../../../services/usersService";

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
    { id: 3, title: "START DATE" },
    { id: 4, title: "END DATE" },
    { id: 4, title: "REQUIREMENTS" },
    { id: 5, title: "ACTIONS" },
  ];

  const [users, setusers] = useState([]);
  const [role, setrole] = useState("");

  useEffect(() => {
    const user = auth.loggedInUser();
    console.log(user);
    setrole(user.role);
  }, []);
  useEffect(() => {
    const dbdata = ProjectDataService.getAllUsers();

    setusers(dbdata);
    setusers(dbdata);
    console.log(dbdata);
  }, []);

  const getUsers = () => {
    // const data = await UserDataService.getAllUsers();

    const dbdata = ProjectDataService.getAllUsers();

    setusers(dbdata);
    setusers(dbdata);
    console.log(dbdata);
    // console.log(data.docs);
    // setusers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };
  // const getRoles = async () => {
  //   const data = await UserRoleService.getAllRoles();
  //   console.log(data.docs);
  //   setroles(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  // };

  const statusHandler = async (user) => {
    // const res = await UserDataService.updateUser(user.id, user);
    // console.log(res);
    getUsers();
  };
  const getBadgeColor = (userRole) => {
    if (userRole == "Project Manager") return "info";
    else if (userRole == "Team Lead") return "danger";
    else if (userRole == "CEO") return "warning";
    else return "success";
  };
  const onDelete = (id) => {
    fireAb.child(`projects/${id}`).remove();
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

      {/* <Link to={`Profiles/view/${id}`}>
                      <Button color="primary" size="sm">
                        View Profile
                      </Button>
                    </Link> */}
      <Panel lg={12} title={"Project Management"}>
        {role == "Project Manager" ? (
          <>
            <Link style={{ float: "right" }} to="/ProjectAdd">
              <Button color="primary" size="sm">
                Add Project
              </Button>
            </Link>
          </>
        ) : (
          <></>
        )}

        <Table responsive className="table--bordered">
          <thead>
            <tr>
              {header.map((users) => (
                <th key={users.id}>{users.title}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {Object?.keys(users)?.map((id, index) => {
              for (
                let index = 0;
                index < users[id].teammembers?.length;
                index++
              ) {
                console.log("asdasdasd", users[id].teammembers[index]);
                if (
                  users[id].teammembers[index].value == auth.loggedInUser().name
                ) {
                  return (
                    <tr>
                      <td>{index + 1}</td>
                      <td>{users[id]?.projectName}</td>
                      <td>{users[id]?.description}</td>
                      <td>{users[id]?.startDate}</td>
                      <td>{users[id]?.endDate}</td>
                      <td>{users[id]?.requirements}</td>
                      {role == "Project Manager" ? (
                        <>
                          <Link to={`Project/edit/${id}`}>
                            <Button color="primary" size="sm">
                              Edit
                            </Button>
                          </Link>
                          <Button
                            color="danger"
                            size="sm"
                            onClick={() => onDelete(id)}
                          >
                            Delete
                          </Button>
                        </>
                      ) : (
                        <></>
                      )}
                      <td></td>
                    </tr>
                  );
                }
              }
            })}
          </tbody>
        </Table>
      </Panel>
    </Col>
  );
};

export default UserTable;
