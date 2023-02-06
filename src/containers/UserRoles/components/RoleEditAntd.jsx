import { useHistory } from "react-router";
import { Button, Form, Input, Select, message } from "antd";
import { useEffect } from "react";
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
const RoleEditAntd = (props) => {
  let history = useHistory();

  const [form] = Form.useForm();
  //const [userData, setUserdata] = useState(props.location.state.data);
  const [rolesData, setRolesData] = useState(props.location.state.proj);
  useEffect(() => {}, []);
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
      `http://localhost:7000/api/roles/${rolesData.id}`,
      requestOptions
    ).then((data) =>
      data.json().then((data2) => {
        console.log("Data Response,", data2);
        if (data2 != null) {
          console.log("data is not null");
          // success;
          // history.goBack();
          history.push("/admin/Dashboardme");
        } else {
          console.log("data is null");
          error();
        }
      })
    );
  };

  return (
    <Form
      {...formItemLayout}
      form={form}
      name="register"
      initialValues={rolesData}
      onFinish={onFinish}
      style={{
        maxWidth: 600,
      }}
      scrollToFirstError
    >
      <Form.Item
        name="role"
        label="Role"
        tooltip="Enter Role?"
        rules={[
          {
            required: true,
            message: "Please enter Role!",
            whitespace: true,
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        name="description"
        label="Description"
        tooltip="Enter Description of Role?"
        rules={[
          {
            required: true,
            message: "Please input Role Description!",
            whitespace: true,
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item {...tailFormItemLayout}>
        <Button type="primary" htmlType="submit">
          Update
        </Button>
      </Form.Item>
    </Form>
  );
};
export default RoleEditAntd;
