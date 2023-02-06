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
const UserFormAntd = () => {
  const history = useHistory();
  const [form] = Form.useForm();
  //const [userData, setUserdata] = useState(props.location.state.data);
  const [userData, setUserdata] = useState();
  const [isEdit, setIsEdit] = useState(false);

  useEffect(() => {}, []);
  const onFinish = (values) => {
    let value = {};
    value = values;
    console.log("Received values of form: ", value);
    const requestOptions = {
      method: "post",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(values),
    };
    fetch(`http://localhost:7000/api/users/user`, requestOptions).then((data) =>
      data.json().then((data2) => {
        console.log("in Data,", data2);
        if (data2 != null) {
          history.push("/admin/Dashboardme");
          console.log("data is not null");
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
        name="password"
        label="Password"
        rules={[
          {
            required: true,
            message: "Please input your password!",
          },
        ]}
        hasFeedback
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
        name="confirm"
        label="Confirm Password"
        dependencies={["password"]}
        hasFeedback
        rules={[
          {
            required: true,
            message: "Please confirm your password!",
          },
          ({ getFieldValue }) => ({
            validator(_, value) {
              if (!value || getFieldValue("password") === value) {
                return Promise.resolve();
              }
              return Promise.reject(
                new Error("The two passwords that you entered do not match!")
              );
            },
          }),
        ]}
      >
        <Input.Password />
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
          Register
        </Button>
      </Form.Item>
    </Form>
  );
};
export default UserFormAntd;
