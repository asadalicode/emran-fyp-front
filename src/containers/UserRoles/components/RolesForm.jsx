import React, { useState } from "react";
import PropTypes from "prop-types";
import EyeIcon from "mdi-react/EyeIcon";
import EmailIcon from "mdi-react/EmailIcon";
import AccountSearchIcon from "mdi-react/AccountSearchIcon";
import UserRoleService from "../../../services/rolesService";

import { Button, ButtonToolbar, Card, CardBody, Col, Form } from "reactstrap";
import { useForm, Controller } from "react-hook-form";
import { MultiSelectField } from "@/shared/components/form/MultiSelect";
import { SelectField } from "@/shared/components/form/Select";
import { FileInputField } from "@/shared/components/form/FileInput";

const RoleForm = ({ isHorizontal, addUser }) => {
  const [isPasswordShown, setIsPasswordShown] = useState(false);
  const showPassword = () => {
    setIsPasswordShown((prevState) => !prevState);
  };
  const [role, setrole] = useState({
    role_id: 0,
    role_name: "",
  });

  const [name, setname] = useState("ABLP");
  const { handleSubmit, register, reset, control } = useForm();

  const onSubmit = async (data) => {
    console.log(data);
    await UserRoleService.addRoles(data);
  };

  return (
    <Col md={20} lg={20}>
      <Card>
        <CardBody>
          <form
            className={`form ${isHorizontal && "form--horizontal"}`}
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="form__form-group">
              <span className="form__form-group-label">Role Id</span>
              <div className="form__form-group-field">
                <input
                  name="role_id"
                  type="text"
                  placeholder="Enter Id Here .."
                  ref={register}
                />
              </div>
            </div>
            <div className="form__form-group">
              <span className="form__form-group-label">Role Name</span>
              <div className="form__form-group-field">
                <input
                  name="role_name"
                  type="text"
                  placeholder="Enter Name Here .."
                  ref={register}
                />
              </div>
            </div>

            {/* <div className="form__form-group">
              <span className="form__form-group-label">First Name</span>
              <div className="form__form-group-field">
                <input
                  name="defaultInput"
                  type="text"
                  placeholder="Enter First Name Here .."
                  ref={register}
                />
              </div>
            </div>
            <div className="form__form-group">
              <span className="form__form-group-label">Last Name</span>
              <div className="form__form-group-field">
                <input
                  name="defaultInput"
                  type="text"
                  placeholder="Enter Last Name Here .."
                  ref={register}
                />
              </div>
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
                  type={isPasswordShown ? 'text' : 'password'}
                  placeholder="Password"
                  ref={register}
                />
                <button
                  type="button"
                  className={`form__form-group-button${isPasswordShown ? ' active' : ''}`}
                  onClick={showPassword}
                ><EyeIcon />
                </button>
              </div>
            </div>
           
            <div className="form__form-group">
              <span className="form__form-group-label">Role</span>
              <div className="form__form-group-field">
                <Controller
                  name="select"
                  as={SelectField}
                  control={control}
                  options={[
                    { value: 'one', label: 'Team Member' },
                    { value: 'two', label: 'Team Lead' },
                  ]}
                />
              </div>
            </div> */}
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

            <ButtonToolbar className="form__button-toolbar">
              <Col md="8">
                <Button
                  block
                  size="md"
                  color="primary"
                  // style={{ backgroundColor: "#FFF" }}
                  className="my-4"
                  type="submit"
                  data-dismiss="modal"
                  // onClick={() => addUser(role)}
                >
                  Save
                </Button>
              </Col>
              <Col md="">
                <Button
                  block
                  size="md"
                  style={{ backgroundColor: "#FFF" }}
                  className="my-4"
                  type="button"
                  data-dismiss="modal"
                >
                  Cancel
                </Button>
              </Col>
            </ButtonToolbar>
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

export default RoleForm;
