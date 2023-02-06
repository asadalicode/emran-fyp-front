import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import EyeIcon from "mdi-react/EyeIcon";
import ProjectDataService from "../../../services/projectService";
import { nanoid } from "nanoid";
import EmailIcon from "mdi-react/EmailIcon";
import AccountSearchIcon from "mdi-react/AccountSearchIcon";

import {
  ButtonToolbar,
  Card,
  CardBody,
  Button,
  Col,
  Input,
  Form,
} from "reactstrap";
import { useForm, Controller } from "react-hook-form";
import { MultiSelectField } from "@/shared/components/form/MultiSelect";
import { SelectField } from "@/shared/components/form/Select";
import { FileInputField } from "@/shared/components/form/FileInput";
import { fireAb } from "../../../firebase";
import UsersDataService from "../../../services/usersService";
import { useHistory, useParams } from "react-router-dom";

const ProjectForm = ({ isHorizontal, addUser }) => {
  const [formData, updateFormData] = React.useState({});
  const [error, setError] = React.useState(false);
  const history = useHistory();

  const handleChange = (e) => {
    updateFormData({
      ...formData,

      // Trimming any whitespace
      [e.target.name]: e.target.value.trim(),
    });
  };

  const onSubmit = (data) => {
    // e.preventDefault();
    console.log(data);

    try {
      // const len = UserDataService.getAllUsers();
      // console.log("first", len.length);
      // ye
      ProjectDataService.addUsers(data);

      // const userData = await UserDataService.getAllUsers();
      // const res = await UserDataService.addUsers(data, userData);
      // if (res == "False") {
      //   setError("True");
      // }
      // setMessage({ error: false, msg: "New Book added successfully!" });
    } catch (err) {
      console.log("Error", err);
      // setMessage({ error: true, msg: err.message });
    }
    setTimeout(() => history.push("/ProjectManage"));
  };

  const [isPasswordShown, setIsPasswordShown] = useState(false);
  const showPassword = () => {
    setIsPasswordShown((prevState) => !prevState);
  };

  const [role, setrole] = useState({
    roleId: 4,
    roleName: "ABC",
  });
  const [users, setusers] = useState([]);
  const [options, setoptions] = useState([]);
  const { handleSubmit, register, reset, control } = useForm();

  useEffect(() => {
    const dbdata = UsersDataService.getAllUsers();
    console.log("dataaa", dbdata);
    Object.keys(dbdata).map((id, index) => {
      return users.push(dbdata[id]);
    });
    Object.keys(dbdata).map((id, index) => {
      if (dbdata[id].role.value == "Team Lead") {
        return options.push({
          value: dbdata[id].userName,
          label: dbdata[id].userName,
        });
      }
    });
    console.log(users);
    setusers(dbdata);
  }, []);

  return (
    <Col md={12} lg={12}>
      <Card>
        <CardBody>
          <form
            className={`form ${isHorizontal && "form--horizontal"}`}
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="form__form-group">
              <span className="form__form-group-label">Project Name</span>
              <div className="form__form-group-field">
                <input
                  name="projectName"
                  type="text"
                  placeholder="Enter projectName Here .."
                  ref={register}
                />
              </div>
            </div>

            <div className="form__form-group">
              <span className="form__form-group-label">Description</span>
              <div className="form__form-group-field">
                <input
                  name="description"
                  type="text"
                  placeholder="Enter description Here .."
                  ref={register}
                />
              </div>
            </div>
            <div className="form__form-group">
              <span className="form__form-group-label">Start Date</span>
              <div className="form__form-group-field">
                <input
                  name="startDate"
                  type="text"
                  placeholder="Enter Start Date Here .."
                  ref={register}
                />
              </div>
            </div>
            <div className="form__form-group">
              <span className="form__form-group-label">End Date</span>
              <div className="form__form-group-field">
                <input
                  name="endDate"
                  type="text"
                  placeholder="Enter End Date Here .."
                  ref={register}
                />
              </div>
            </div>
            <div className="form__form-group">
              <span className="form__form-group-label">Requirements</span>
              <div className="form__form-group-field">
                <input
                  name="requirements"
                  type="text"
                  placeholder="Enter Requirements Here .."
                  ref={register}
                />
              </div>
            </div>

            <div className="form__form-group">
              <span className="form__form-group-label">Members</span>
              <div className="form__form-group-field">
                <Controller
                  name="teammembers"
                  as={MultiSelectField}
                  control={control}
                  // defaultValue={{ value: "Team Lead", label: "Team Lead" }}
                  options={options}
                />
              </div>
            </div>

            <div>
              {/* <input value={name} onChange={(e) => setname(e.target.value)} /> */}
              <Button type="submit">save</Button>
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

export default ProjectForm;
