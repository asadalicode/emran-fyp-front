import { Button, Form, Input, Select } from "antd";
import { useEffect } from "react";
import { useState } from "react";
import { useHistory } from "react-router";
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
const UserFormEditAntd = (props) => {
  const history = useHistory();
  console.log("props for are", props);
  const [form] = Form.useForm();
  //const [userData, setUserdata] = useState(props.location.state.data);
  const [userData, setUserdata] = useState(props.location.state.data);
  const [isEdit, setIsEdit] = useState(false);

  useEffect(() => {
    if (userData == null) {
      setIsEdit(false);
    } else {
      setIsEdit(true);
    }
    console.log(isEdit);
  }, []);

  console.log(props.location.state.proj);
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
      `http://localhost:7000/api/users/${userData.id}`,
      requestOptions
    ).then((data) =>
      data.json().then((data2) => {
        console.log("in Data,", data2);
        if (data2.rows != null) {
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
      name="register"
      onFinish={onFinish}
      initialValues={userData}
      style={{
        maxWidth: 600,
      }}
      scrollToFirstError
    >
      <Form.Item
        name="username"
        label="E-mail"
        rules={[
          {
            type: "email",
            message: "The input is not valid E-mail!",
          },
          {
            required: true,
            message: "Please input your E-mail!",
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="firstName"
        label="First Name"
        tooltip="What do you want others to call you?"
        rules={[
          {
            required: true,
            message: "Please input your first name!",
            whitespace: true,
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        name="lastName"
        label="LastName"
        tooltip="What do you want others to call you?"
        rules={[
          {
            required: true,
            message: "Please input your lastName!",
            whitespace: true,
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        name="role"
        label="Role"
        rules={[
          {
            required: true,
            message: "Please select role!",
          },
        ]}
      >
        <Select placeholder="select your role">
          <Option value="ceo">CEO</Option>
          <Option value="admin">Admin</Option>
          <Option value="Project Manager">Project Manager</Option>
        </Select>
      </Form.Item>

      <Form.Item {...tailFormItemLayout}>
        <Button type="primary" htmlType="submit">
          Update
        </Button>
      </Form.Item>
    </Form>
  );
};
export default UserFormEditAntd;
