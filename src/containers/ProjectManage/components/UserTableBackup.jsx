import React, { useState, useEffect } from "react";
import { Button, Table, Col, Row, Card, Badge } from "reactstrap";
import Panel from "@/shared/components/Panel";
import ReactTableBase from "@/shared/components/table/ReactTableBase";
import UserDataService from "../../../services/usersService";
import UserRoleService from "../../../services/rolesService";
import UserAdd from "./User";
import { getRoles } from "@testing-library/react";

const reorder = (rows, startIndex, endIndex) => {
  const result = Array.from(rows);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
};
const UserTable = () => {
  // const [rows, setData] = useState(users);
  // const [isEditable, setIsEditable] = useState(false);
  // const [isResizable, setIsResizable] = useState(false);
  // const [isDisabledDragAndDrop, setIsDisabledDragAndDrop] = useState(false);
  // const [isDisabledEditable, setIsDisabledEditable] = useState(false);
  // const [isDisabledResizable, setIsDisabledResizable] = useState(false);
  // const [withDragAndDrop, setWithDragAndDrop] = useState(false);
  // const [withSearchEngine, setWithSearchEngine] = useState(true);

  const [isSortable, setIsSortable] = useState(false);
  const [withPagination, setWithPaginationTable] = useState(false);
  const header = [
    { id: 0, title: "#" },
    { id: 1, title: "USERNAME" },
    { id: 2, title: "ROLE" },
    { id: 3, title: "EMAIL" },
    { id: 4, title: "STATUS" },
    { id: 5, title: "ACTIONS" },
  ];

  const [users, setusers] = useState([]);
  useEffect(() => {
    getUsers();
    // getRoles();
  }, []);

  const getUsers = async () => {
    const data = await UserDataService.getAllUsers();
    console.log(data.docs);
    setusers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };
  // const getRoles = async () => {
  //   const data = await UserRoleService.getAllRoles();
  //   console.log(data.docs);
  //   setroles(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  // };

  const statusHandler = async (user) => {
    // const res = await UserDataService.getUser(id);
    const res = await UserDataService.updateUser(user.id, user);
    console.log(res);
    getUsers();
  };
  const getBadgeColor = (userRole) => {
    if (userRole == "Project Manager") return "info";
    else if (userRole == "Team Lead") return "danger";
    else if (userRole == "CEO") return "warning";
    else return "success";
  };
  return (
    <Col md={12} lg={12}>
      {/* <ReactTableBase
        key={"common"}
        columns={header}
        data={rows}
        tableConfig={tableConfig}
      /> */}
      <Panel lg={12} title={"User Management"}>
        <Table responsive className="table--bordered">
          <thead>
            <tr>
              {header.map((users) => (
                <th key={users.id}>{users.title}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {users.map((user) =>
              user.role.value == "admin" ? (
                <></>
              ) : (
                <tr>
                  <td>{user.userId}</td>
                  <td>{user.userName}</td>
                  <td>
                    {" "}
                    <Badge
                      // style={{ fontSize: "12px" }}
                      color={getBadgeColor(user?.role)}
                    >
                      {user?.role?.value}
                    </Badge>
                  </td>

                  <td>{user.email}</td>
                  <td>
                    <Badge
                      style={{ fontSize: "12px" }}
                      color={user?.status == "active" ? "success" : "danger"}
                    >
                      {user?.status?.value}
                    </Badge>
                  </td>
                  <td>
                    <Button color="primary" size="sm">
                      Edit
                    </Button>
                    <Button
                      onClick={() => statusHandler(user)}
                      color="danger"
                      size="sm"
                    >
                      Change Status to{" "}
                      {user?.status.value == "active" ? "Disabled" : "Activate"}
                    </Button>
                  </td>
                </tr>
              )
            )}
          </tbody>
        </Table>
      </Panel>
    </Col>
  );
};

export default UserTable;
