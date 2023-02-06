import { useHistory, useParams } from "react-router";
import { Button, Form, Input, DatePicker, Select } from "antd";
import { useState } from "react";
const { Option } = Select;
const formItemLayout = {
  labelCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 8,
    },
  },
  wrapperCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 16,
    },
  },
};
const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 16,
      offset: 8,
    },
  },
};
const TaskFormAntd = () => {
  const history = useHistory();
  const [projData, setProjData] = useState();
  const params = useParams();
  const id = params.id;
  console.log();
  const [form] = Form.useForm();
  const onFinish = (values) => {
    let value = {};
    value = values;
    console.log("Received values of form: ", value);
    const requestOptions = {
      method: "put",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(values),
    };
    fetch(
      `http://localhost:7000/api/project/${id}/task/save`,
      requestOptions
    ).then((data) =>
      data.json().then((data2) => {
        console.log("In second Api ");
        console.log("in Data,", data2);
        if (data2 != null) {
          console.log("data is not null");
          history.push("/admin/Dashboardme");
        } else {
          console.log("data is null");
        }
      })
    );
  };

  return (
    <Form
      {...formItemLayout}
      form={form}
      name="addProject"
      onFinish={onFinish}
      style={{
        maxWidth: 600,
      }}
      scrollToFirstError
    >
      <h2>ADD TASK</h2>
      <Form.Item
        name="name"
        label="Name"
        rules={[
          {
            type: "string",
          },
          {
            required: true,
            message: "Please input your Name!",
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        name="description"
        label="Description"
        rules={[
          {
            type: "string",
          },
          {
            required: true,
            message: "Please input Description!",
          },
        ]}
      >
        <Input />
      </Form.Item>

      {/* <Form.Item
        name="requirements"
        label="Requirement"
        rules={[
          {
            type: "string",
          },
          {
            required: true,
            message: "Please input requirements!",
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        name="teamMembers"
        label="Team Members"
        rules={[
          {
            type: "string",
          },
          {
            required: true,
            message: "Please input team Members!",
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Start Date"
        name="startDate"
        tooltip="Enter Project Start Date"
        colon={false}
        valuePropName="date"
      >
        <DatePicker format={"DD-MM-YYYY"} />
      </Form.Item>
      <Form.Item
        label="End Date"
        name="endDate"
        tooltip="Enter Project End Date"
        colon={false}
        valuePropName="date"
      >
        <DatePicker format={"DD-MM-YYYY"} />
      </Form.Item> */}

      <Form.Item {...tailFormItemLayout}>
        <Button type="primary" htmlType="submit">
          Add Task
        </Button>
      </Form.Item>
    </Form>
  );
};
export default TaskFormAntd;
