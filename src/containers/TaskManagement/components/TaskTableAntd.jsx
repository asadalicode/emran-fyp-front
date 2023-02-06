import React, { useState, useEffect } from "react";
import {
  Card,
  Row,
  Col,
  Breadcrumb,
  Table,
  Tooltip,
  Alert,
  Button,
} from "antd";
import {
  DeleteOutlined,
  DashboardOutlined,
  EditOutlined,
  PlusOutlined,
} from "@ant-design/icons";
import { Link, useParams } from "react-router-dom";

const TaskTableAntd = () => {
  const [role, setrole] = useState("");
  const [tasks, setTasks] = useState();
  const params = useParams();
  console.log("use Params are", params);
  const id = params.id;
  useEffect(() => {
    getTasks();
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
          if (data2 == "successfully deleted") {
            <Alert message="Successfully Deleted" type="success" showIcon />;
            getTasks();
          } else {
            console.log("data is null");
          }
        })
    );
  };
  const getTasks = async () => {
    const requestOptions = {
      method: "get",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    };
    fetch(
      `http://localhost:7000/api/project/${id}/task/getAll`,
      requestOptions
    ).then((data) =>
      data.json().then((data2) => {
        console.log("In second Api ");
        console.log("in Data,", data2);
        if (data2.rows != null) {
          console.log("data is not null");
          setTasks(data2.rows);
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
      title: "Name",
      dataIndex: "name",
      align: "left",
      // render: (v) => <Link to={`/taskTableAntd/${v.id}`}>{`${v.name}`}</Link>,
    },
    {
      title: "Description",
      dataIndex: "name",
      align: "left",
    },
    {
      title: "Requirements",
      dataIndex: "name",
      align: "left",
    },
    {
      title: "Start Date",
      dataIndex: "name",
      align: "left",
    },
    {
      title: "End Date",
      dataIndex: "name",
      align: "left",
    },
    {
      title: "Action",
      ellipsis: true,
      align: "center",
      render: (proj) => (
        <div key={proj.id}>
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
            title="Tasks"
          >
            <Row>
              <Col lg={12} md={12} sm={24} xs={24} className="gx-text-left">
                <Breadcrumb>
                  <Breadcrumb.Item>
                    <Link>
                      <span className="gx-link">Home</span>
                    </Link>
                  </Breadcrumb.Item>
                  <Breadcrumb.Item>Tasks</Breadcrumb.Item>
                </Breadcrumb>
              </Col>

              <Col lg={12} md={12} sm={24} xs={24} className="gx-text-right">
                <Link
                  className="gx-btn gx-btn-primary gx-mb-0"
                  to={`/AddTask/${id}`}
                >
                  <Button>
                    <PlusOutlined title=" Add Task" />
                  </Button>
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
              dataSource={tasks}
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

export default TaskTableAntd;
