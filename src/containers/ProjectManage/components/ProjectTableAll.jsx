// import React, { useState, useEffect } from "react";
// import { Button, Table, Col, Row, Card, Badge } from "reactstrap";
// import Panel from "@/shared/components/Panel";
// import ProjectDataService from "../../../services/projectService";
// import { Link } from "react-router-dom";
// import { fireAb } from "../../../firebase";
// import auth from "../../../services/auth";
// import { Alert, Tooltip } from "antd";
// import { DeleteOutlined, EditTwoTone } from "@ant-design/icons";

// // import TestService from "../../../services/usersService";

// const reorder = (rows, startIndex, endIndex) => {
//   const result = Array.from(rows);
//   const [removed] = result.splice(startIndex, 1);
//   result.splice(endIndex, 0, removed);

//   return result;
// };
// const ProjectTableAll = () => {
//   const header = [
//     { id: 0, title: "#" },
//     { id: 1, title: "PROJECT NAME" },
//     { id: 2, title: "DESCRIPTION" },
//     { id: 3, title: "START DATE" },
//     { id: 4, title: "END DATE" },
//     { id: 5, title: "REQUIREMENTS" },
//     { id: 6, title: "ACTIONS" },
//   ];

//   const [users, setusers] = useState([]);
//   const [role, setrole] = useState("");
//   const [projects, setProjects] = useState();

//   const getProjects = async () => {
//     const requestOptions = {
//       method: "get",
//       headers: {
//         "Content-Type": "application/json",
//         Accept: "application/json",
//       },
//     };
//     fetch("http://localhost:7000/api/project/getProjects", requestOptions).then(
//       (data) =>
//         data.json().then((data2) => {
//           console.log("In second Api ");
//           console.log("in Data,", data2);
//           if (data2.rows != null) {
//             console.log("data is not null");
//             setProjects(data2.rows);
//           } else {
//             console.log("data is null");
//           }
//         })
//     );
//   };

//   useEffect(() => {
//     getProjects();
//     const user = auth.loggedInUser();
//     console.log(user);
//     const role = JSON.parse(localStorage.getItem("role"));
//     setrole(role);
//   }, []);

//   useEffect(() => {
//     const dbdata = ProjectDataService.getAllUsers();

//     setusers(dbdata);
//     setusers(dbdata);
//     console.log(dbdata);
//   }, [projects]);

//   const onDelete = (id) => {
//     const requestOptions = {
//       method: "delete",
//       headers: {
//         "Content-Type": "application/json",
//         Accept: "application/json",
//       },
//     };
//     fetch(`http://localhost:7000/api/project/${id}`, requestOptions).then(
//       (data) =>
//         data.json().then((data2) => {
//           console.log("In second Api ");
//           console.log("in Data,", data2);
//           if (data2 == "successfully deleted") {
//             <Alert message="Successfully Deleted" type="success" showIcon />;
//             getProjects();
//           } else {
//             console.log("data is null");
//           }
//         })
//     );
//   };
//   return (
//     <Col md={12} lg={12}>
//       <Panel lg={12} title={"Project Management"}>
//         {role == "Project Manager" ? (
//           <>
//             <Link style={{ float: "right" }} to="/AddProject">
//               <Button color="primary" size="sm">
//                 Add Project
//               </Button>
//             </Link>
//           </>
//         ) : (
//           <></>
//         )}

//         <Table responsive className="table--bordered">
//           <thead>
//             <tr>
//               {header.map((users) => (
//                 <th key={users.id}>{users.title}</th>
//               ))}
//             </tr>
//           </thead>
//           <tbody>
//             {projects?.map((proj, index) => {
//               return (
//                 <tr>
//                   <td>{index + 1}</td>
//                   <Tooltip title="Edit" color="blue">
//                     <Link
//                       className="gx-link gx-mb-0 gx-link h6"
//                       to={{ pathname: `/taskTableAntd`, state: { proj } }}
//                     >
//                       <td>{proj?.name}</td>
//                     </Link>
//                   </Tooltip>
//                   <td>{proj?.description}</td>
//                   <td>{proj?.startDate}</td>
//                   <td>{proj?.endDate}</td>
//                   <td>{proj?.requirements}</td>
//                   {role == "Project Manager" || "ceo" ? (
//                     <>
//                       <Link
//                         className="gx-link gx-mb-0 gx-link h5"
//                         to={{ pathname: `EditProject/`, state: { proj } }}
//                       >
//                         <Tooltip title="Edit" color="blue">
//                           <EditTwoTone />
//                         </Tooltip>
//                       </Link>
//                       <Tooltip title="Delete" color="red">
//                         <DeleteOutlined
//                           className="gx-link h5"
//                           onClick={() => onDelete(proj.id)}
//                         />
//                       </Tooltip>
//                     </>
//                   ) : (
//                     <></>
//                   )}
//                   <td></td>
//                 </tr>
//               );
//             })}
//           </tbody>
//         </Table>
//       </Panel>
//     </Col>
//   );
// };

// export default ProjectTableAll;

import React, { useState, useEffect } from "react";
import { Card, Row, Col, Breadcrumb, Table, Tooltip, Alert } from "antd";
import { DeleteOutlined, EditOutlined, PlusOutlined } from "@ant-design/icons";
import { Link, useHistory } from "react-router-dom";

const ProjectTableAll = (props) => {
  const history = useHistory();
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
    fetch(`http://localhost:7000/api/project/${id}`, requestOptions).then(
      (data) =>
        data.json().then((data2) => {
          console.log("In second Api ");
          console.log("in Data,", data2);
          if (data2.message == "successfully deleted") {
            <Alert message="Successfully Deleted" type="success" showIcon />;
            // history.push("/admin/Dashboardme");
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
    fetch("http://localhost:7000/api/project/getProjects", requestOptions).then(
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
  console.log("");
  const columns = [
    {
      title: "id",
      align: "left",
      dataIndex: "id",
    },
    {
      title: "Name",
      // dataIndex: "name",
      align: "left",
      render: (v) => <Link to={`/taskTableAntd/${v.id}`}>{`${v.name}`}</Link>,
    },
    {
      title: "Description",
      dataIndex: "description",
      align: "left",
    },
    {
      title: "Requirements",
      dataIndex: "requirements",
      align: "left",
    },
    {
      title: "Start Date",
      dataIndex: "startDate",
      align: "left",
    },
    {
      title: "End Date",
      dataIndex: "endDate",
      align: "left",
    },
    {
      title: "Action",
      ellipsis: true,
      align: "center",
      render: (proj) => (
        <div key={proj.id}>
          <Tooltip title="Edit" color={"blue"}>
            <Link
              className="gx-link gx-mb-0"
              to={{ pathname: `EditProject/`, state: { proj } }}
            >
              <EditOutlined className="gx-link h5" />
            </Link>
          </Tooltip>
          <Tooltip title="Delete" color={"red"} key={`delete${proj.id}`}>
            <DeleteOutlined
              className="gx-link h5"
              onClick={() => onDelete(proj.id)}
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
            title="Projects"
          >
            <Row>
              <Col lg={12} md={12} sm={24} xs={24} className="gx-text-left">
                <Breadcrumb>
                  <Breadcrumb.Item>
                    <Link>
                      <span className="gx-link">Home</span>
                    </Link>
                  </Breadcrumb.Item>
                  <Breadcrumb.Item>Projects</Breadcrumb.Item>
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

export default ProjectTableAll;
