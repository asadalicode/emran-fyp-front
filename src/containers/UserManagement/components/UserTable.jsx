// import React, { useState, useEffect } from "react";
// import { Table, Col } from "reactstrap";
// import Panel from "@/shared/components/Panel";
// import UsersDataService from "../../../services/usersService";
// import auth from "../../../services/auth";
// import { Link } from "react-router-dom";
// import { Button, Switch, Tooltip, Alert } from "antd";
// import { DeleteOutlined, EditTwoTone } from "@ant-design/icons";

// const UserTable = () => {
//   const header = [
//     { id: 0, title: "#" },
//     { id: 1, title: "USERNAME" },
//     { id: 2, title: "ROLE" },
//     { id: 3, title: "EMAIL" },
//     { id: 4, title: "STATUS" },
//     { id: 5, title: "ACTIONS" },
//   ];

//   const [users, setusers] = useState([]);
//   const [role, setRole] = useState("");
//   const [user, setUser] = useState();

//   useEffect(() => {
//     const roles = localStorage.getItem("role");
//     console.log("role in s", roles);
//     setRole(roles);
//     getUsers();

//     const dbdata = UsersDataService.getAllUsers();
//     console.log(dbdata);
//     setusers(dbdata);
//     setusers(dbdata);

//     const user = auth.loggedInUser();
//     console.log(user);
//   }, []);

//   const getUsers = () => {
//     const requestOptions = {
//       method: "get",
//       headers: {
//         "Content-Type": "application/json",
//         Accept: "application/json",
//       },
//     };
//     fetch("http://localhost:7000/api/users/getUsers", requestOptions).then(
//       (data) =>
//         data.json().then((data2) => {
//           console.log("In second Api ");
//           console.log("in Data,", data2);
//           if (data2 != null) {
//             console.log("data is not null");
//             setUser(data2.rows);
//           } else {
//             console.log("data is null");
//           }
//         })
//     );
//   };

//   const onDelete = (id) => {
//     const requestOptions = {
//       method: "delete",
//       headers: {
//         "Content-Type": "application/json",
//         Accept: "application/json",
//       },
//     };
//     fetch(`http://localhost:7000/api/users/${id}`, requestOptions).then(
//       (data) =>
//         data.json().then((data2) => {
//           if (data2 == "successfully deleted") {
//             <Alert message="Successfully Deleted" type="success" showIcon />;
//             getUsers();
//           } else {
//             console.log("data is null");
//           }
//         })
//     );
//   };

//   const onChange = (checked) => {
//     console.log("toggle", checked);
//   };

//   return (
//     <Col md={12} lg={12}>
//       <Panel lg={12} title={"User Managementss"}>
//         <Table striped bordered hover responsive="xl" size="xl">
//           <thead>
//             <tr>
//               {header.map((users) => (
//                 <th key={users.id}>
//                   <h4>
//                     <strong>{users.title}</strong>
//                   </h4>
//                 </th>
//               ))}
//             </tr>
//           </thead>
//           <tbody>
//             {console.log("log is", user)}
//             {user &&
//               user.map((data, key) => (
//                 <tr key={key}>
//                   <td>
//                     <h5>{key + 1}</h5>
//                   </td>
//                   <td>
//                     <strong>{data.username}</strong>
//                   </td>
//                   <td>
//                     <strong>{data.role}</strong>
//                   </td>
//                   <td>
//                     <strong>{data.firstName}</strong>
//                   </td>
//                   <td>
//                     <strong>{data.status ? "true" : "false"}</strong>
//                     <Switch defaultChecked onChange={onChange}></Switch>
//                   </td>
//                   <td>
//                     {((role == "ceo" || "admin") && (
//                       <>
//                         <Link
//                           className="gx-link gx-mb-0 gx-link h5"
//                           to={{ pathname: `/UserForm/edit`, state: { data } }}
//                         >
//                           <Tooltip title="Edit" color="blue">
//                             <EditTwoTone />
//                           </Tooltip>
//                         </Link>
//                         <Tooltip title="Delete" color="red">
//                           <DeleteOutlined
//                             className="gx-link h5"
//                             onClick={() => onDelete(data.id)}
//                           />
//                         </Tooltip>
//                       </>
//                     )) || <></>}
//                   </td>
//                 </tr>
//               ))}
//           </tbody>
//         </Table>
//       </Panel>
//     </Col>
//   );
// };

// export default UserTable;

import React, { useState, useEffect } from "react";
import {
  Card,
  Row,
  Col,
  Breadcrumb,
  Table,
  Tooltip,
  Alert,
  Switch,
} from "antd";
import { DeleteOutlined, EditOutlined, PlusOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

const UserTable = (props) => {
  const [role, setrole] = useState("");
  const [projects, setProjects] = useState();

  useEffect(() => {
    getProjects();
  }, []);

  const onDelete = (id) => {
    const requestOptions = {
      method: "delete",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    };
    fetch(`http://localhost:7000/api/users/${id}`, requestOptions).then(
      (data) =>
        data.json().then((data2) => {
          console.log("In second Api ");
          console.log("in Data,", data2);
          if (data2 == "successfully deleted") {
            <Alert message="Successfully Deleted" type="success" showIcon />;
            getProjects();
          } else {
            console.log("data is null");
          }
        })
    );
  };
  const getProjects = async () => {
    const requestOptions = {
      method: "get",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    };
    fetch("http://localhost:7000/api/users/getUsers", requestOptions).then(
      (data) =>
        data.json().then((data2) => {
          console.log("In second Api ");
          console.log("in Data,", data2);
          if (data2.rows != null) {
            console.log("data is not null");
            setProjects(data2.rows);
          } else {
            console.log("data is null");
          }
        })
    );
  };
  const columns = [
    {
      title: "id",
      align: "left",
      dataIndex: "id",
    },
    {
      title: "UserName",
      dataIndex: "username",
      align: "left",
    },
    {
      title: "Role",
      dataIndex: "role",
      align: "left",
    },
    {
      title: "First Name",
      dataIndex: "firstName",
      align: "left",
    },
    {
      title: "Last Name",
      dataIndex: "lastName",
      align: "left",
    },
    {
      title: "Status",
      //dataIndex: "isActive",
      align: "left",
      render: (user) => (
        <div>
          <Switch defaultChecked={user.status}></Switch>
        </div>
      ),
    },
    {
      title: "Action",
      ellipsis: true,
      align: "center",
      render: (data) => (
        <div key={data.id}>
          <Tooltip title="Edit" color={"blue"}>
            <Link
              className="gx-link gx-mb-0"
              to={{ pathname: `/UserForm/edit`, state: { data } }}
            >
              <EditOutlined className="gx-link h5" />
            </Link>
          </Tooltip>
          <Tooltip title="Delete" color={"red"} key={`delete${data.id}`}>
            <DeleteOutlined
              className="gx-link h5"
              onClick={() => onDelete(data.id)}
            />
          </Tooltip>
        </div>
      ),
    },
  ];

  return (
    <div>
      <Row>
        <Col xs={24}>
          <Card
            className="gx-card gx-mb-3"
            bodyStyle={{ paddingTop: "1rem", paddingBottom: "1rem" }}
            title="Users"
          >
            <Row>
              <Col lg={12} md={12} sm={24} xs={24} className="gx-text-left">
                <Breadcrumb>
                  <Breadcrumb.Item>
                    <Link>
                      <span className="gx-link">Home</span>
                    </Link>
                  </Breadcrumb.Item>
                  <Breadcrumb.Item>Users</Breadcrumb.Item>
                </Breadcrumb>
              </Col>

              <Col lg={12} md={12} sm={24} xs={24} className="gx-text-right">
                <Link
                  className="gx-btn gx-btn-primary gx-mb-0"
                  to={"/AddProject"}
                >
                  <PlusOutlined title=" Add Project" />
                </Link>
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col xs={24}>
          <Card>
            <Table
              columns={columns}
              bordered={true}
              dataSource={projects}
              pagination={{
                showSizeChanger: true,
                hideOnSinglePage: true,
                showTotal: (total, range) =>
                  `${range[0]}-${range[1]} of ${total} items`,
              }}
            />
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default UserTable;
