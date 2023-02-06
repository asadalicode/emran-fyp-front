import {
    Button,
    Form,
    Input,
    Select,
  } from 'antd';
import { useEffect } from 'react';
  import { useState } from 'react';
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
  const RoleFormAntd = () => {

    const [form] = Form.useForm();
    //const [userData, setUserdata] = useState(props.location.state.data);
    const [userData, setUserdata] = useState();
    const [isEdit, setIsEdit] = useState(false);
    
    useEffect(()=>{
    },[])
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
      fetch(
        `http://localhost:7000/signup`,
        requestOptions
      ).then((data) =>
        data.json().then((data2) => {
          console.log("in Data,", data2);
          if (data2.rows != null) {
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
          name="role"
          label="Role"
          tooltip="Enter Role?"
          rules={[
            {
              required: true,
              message: 'Please enter Role!',
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
              message: 'Please input Role Description!',
              whitespace: true,
            },
          ]}
        >
          <Input />
        </Form.Item>
  
  
  
        <Form.Item {...tailFormItemLayout}>
          <Button type="primary" htmlType="submit">
            Register
          </Button>
        </Form.Item>
      </Form>
    );
  };
  export default RoleFormAntd;