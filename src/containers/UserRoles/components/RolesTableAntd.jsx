import { useHistory } from "react-router-dom";
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
  message,
} from "antd";
import { DeleteOutlined, EditOutlined, PlusOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

const RolesTableAntd = (props) => {
  const history = useHistory();
  const [roles, setRoles] = useState();

  useEffect(() => {
    getProjects();
  }, []);
  const [messageApi, contextHolder] = message.useMessage();
  const success = () => {
    messageApi.open({
      type: "success",
      content: "This is a success message",
    });
  };
  const error = () => {
    messageApi.open({
      type: "error",
      content: "This is an error message",
    });
  };

  const onDelete = (id) => {
    const requestOptions = {
      method: "delete",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    };
    fetch(`http://localhost:7000/api/roles/${id}`, requestOptions).then(
      (data) =>
        data.json().then((data2) => {
          console.log("Data.Response,", data2);
          if (data2.message == "successfully deleted") {
            //history.goBack();
            history.push("/admin/Dashboardme");
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
    fetch("http://localhost:7000/api/roles/getRoles", requestOptions).then(
      (data) =>
        data.json().then((data2) => {
          console.log("In second Api ");
          console.log("in Data,", data2);
          if (data2.rows != null) {
            console.log("data is not null");
            setRoles(data2.rows);
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
      dataIndex: "role",
      align: "left",
      //render: (v) => <Link to={`/taskTableAntd/${v.id}`}>{`${v.name}`}</Link>,
    },
    {
      title: "Description",
      dataIndex: "description",
      align: "left",
    },
    {
      title: "Status",
      //dataIndex: "isActive",
      align: "left",
      render: (role) => (
        <div>
          <Switch defaultChecked={role.isActive}></Switch>
        </div>
      ),
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
              to={{ pathname: `EditRole/`, state: { proj } }}
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
            title="Roles"
          >
            <Row>
              <Col lg={12} md={12} sm={24} xs={24} className="gx-text-left">
                <Breadcrumb>
                  <Breadcrumb.Item>
                    <Link>
                      <span className="gx-link">Home</span>
                    </Link>
                  </Breadcrumb.Item>
                  <Breadcrumb.Item>Roles</Breadcrumb.Item>
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
              dataSource={roles}
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

export default RolesTableAntd;
