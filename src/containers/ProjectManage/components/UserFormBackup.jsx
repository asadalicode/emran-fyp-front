import React, { useState } from "react";
import PropTypes from "prop-types";
import EyeIcon from "mdi-react/EyeIcon";
import UserDataService from "../../../services/usersServiceOld";
import { nanoid } from "nanoid";
import EmailIcon from "mdi-react/EmailIcon";
import AccountSearchIcon from "mdi-react/AccountSearchIcon";
import {
  Button,
  ButtonToolbar,
  Card,
  CardBody,
  Col,
  Input,
  Form,
} from "reactstrap";
import { useForm, Controller } from "react-hook-form";
import { MultiSelectField } from "@/shared/components/form/MultiSelect";
import { SelectField } from "@/shared/components/form/Select";
import { FileInputField } from "@/shared/components/form/FileInput";

const UserForm = ({ isHorizontal, addUser }) => {
  const [formData, updateFormData] = React.useState({});
  const [error, setError] = React.useState(false);

  const handleChange = (e) => {
    updateFormData({
      ...formData,

      // Trimming any whitespace
      [e.target.name]: e.target.value.trim(),
    });
  };

  const onSubmit = async (data) => {
    // e.preventDefault();
    console.log(data);

    try {
      const userData = await UserDataService.getAllUsers();
      const res = await UserDataService.addUsers(data, userData);
      if (res == "False") {
        setError("True");
      }

      // setMessage({ error: false, msg: "New Book added successfully!" });
    } catch (err) {
      console.log("Error", err);
      // setMessage({ error: true, msg: err.message });
    }
  };

  const [isPasswordShown, setIsPasswordShown] = useState(false);
  const showPassword = () => {
    setIsPasswordShown((prevState) => !prevState);
  };

  const [role, setrole] = useState({
    roleId: 4,
    roleName: "ABC",
  });
  const [name, setname] = useState("ABLP");
  const { handleSubmit, register, reset, control } = useForm();
  return (
    <Col md={12} lg={12}>
      <Card>
        <CardBody>
          <form
            className={`form ${isHorizontal && "form--horizontal"}`}
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="form__form-group">
              <span className="form__form-group-label">User Name</span>
              <div className="form__form-group-field">
                <input
                  name="userName"
                  type="text"
                  placeholder="Enter UserName Here .."
                  ref={register}
                />
              </div>
              {error == "True" ? <p>Username Already Exist</p> : <></>}
            </div>

            <div className="form__form-group">
              <span className="form__form-group-label">Email</span>
              <div className="form__form-group-field">
                <input
                  name="email"
                  type="email"
                  placeholder="Enter Email Address Here .."
                  ref={register}
                />
              </div>
            </div>
            <div className="form__form-group">
              <span className="form__form-group-label">Password</span>
              <div className="form__form-group-field">
                <input
                  name="password"
                  type={isPasswordShown ? "text" : "password"}
                  placeholder="Password"
                  ref={register}
                />
                <button
                  type="button"
                  className={`form__form-group-button${
                    isPasswordShown ? " active" : ""
                  }`}
                  onClick={showPassword}
                >
                  <EyeIcon />
                </button>
              </div>
            </div>
            <div className="form__form-group">
              <span className="form__form-group-label">User Status</span>
              <div className="form__form-group-field">
                <Controller
                  name="status"
                  as={SelectField}
                  control={control}
                  options={[
                    { value: "active", label: "Active" },
                    { value: "disabled", label: "Disabled" },
                  ]}
                />
              </div>
            </div>
            <div className="form__form-group">
              <span className="form__form-group-label">Role</span>
              <div className="form__form-group-field">
                <Controller
                  name="role"
                  as={SelectField}
                  control={control}
                  options={[
                    { value: "CEO", label: "CEO" },
                    { value: "Project Manager", label: "Project Manager" },
                    { value: "Team Lead", label: "Team Lead" },
                    { value: "Team Member", label: "Team Member" },
                  ]}
                />
              </div>
            </div>
            <div>
              {/* <input value={name} onChange={(e) => setname(e.target.value)} /> */}
              <button onClick={() => addUser(role)}>save</button>
            </div>
            {/* <div className="form__form-group">
              <span className="form__form-group-label">Multiselect</span>
              <div className="form__form-group-field">
                <Controller
                  name="multiSelect"
                  control={control}
                  options={[
                    { value: 'one', label: 'One' },
                    { value: 'two', label: 'Two' },
                  ]}
                  as={MultiSelectField}
                />
              </div>
            </div> */}
          </form>
        </CardBody>
      </Card>
    </Col>
  );
};

Form.propTypes = {
  isHorizontal: PropTypes.bool,
};

Form.defaultProps = {
  isHorizontal: false,
};

export default UserForm;
