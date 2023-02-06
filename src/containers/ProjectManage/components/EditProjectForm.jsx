import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { useHistory, useParams } from "react-router-dom";
import ProjectDataService from "../../../services/projectService";

import { Card, CardBody, Button, Col, Input, Form } from "reactstrap";

import { useForm, Controller } from "react-hook-form";
import { MultiSelectField } from "@/shared/components/form/MultiSelect";
import { SelectField } from "@/shared/components/form/Select";
import { FileInputField } from "@/shared/components/form/FileInput";
import { fireAb } from "../../../firebase";
import UsersDataService from "../../../services/usersService";

const initialState = {
  description: "",
  endDate: "",
  projectName: "",
  requirements: "",
  startDate: "",
  teammembers: [
    {
      value: "asdasd",
      label: "asd",
    },
    {
      value: "asdasd",
      label: "asd",
    },
  ],
};

const EditProjectForm = ({ isHorizontal, addUser }) => {
  const [formData, updateFormData] = React.useState({});
  const [error, setError] = React.useState(false);

  const handleChange = (e) => {
    updateFormData({
      ...formData,

      // Trimming any whitespace
      [e.target.name]: e.target.value.trim(),
    });
  };

  const onSubmit = (data) => {
    console.log(data);
    fireAb.child(`projects/${id}`).set(data, (err) => {});
    setTimeout(() => history.push("/ProjectManage"));
    // data.userId = number + 1;
    // if (!userName) {
    // console.log(userName);
    // }
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
  const { handleSubmit, register, defaultValue, reset, control } = useForm();

  const [data, setData] = useState({});
  const [number, setNumber] = useState(0);
  const [state, setState] = useState(initialState);
  const { id } = useParams();
  const history = useHistory();

  // useEffect(() => {
  //   const dbdata = UsersDataService.getAllUsers();
  //   console.log(dbdata);
  //   Object.keys(dbdata).map((id, index) => {
  //     return users.push(dbdata[id]);
  //   });
  //   Object.keys(dbdata).map((id, index) => {
  //     return options.push({
  //       value: dbdata[id].userName,
  //       label: dbdata[id].userName,
  //     });
  //   });
  //   console.log(users);
  //   setusers(dbdata);
  // }, []);

  useEffect(() => {
    const dbdata = UsersDataService.getAllUsers();
    console.log(dbdata);
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
    setusers(dbdata);
    console.log(users);

    fireAb.child("projects").on("value", (snapshot) => {
      if (snapshot.val() !== null) {
        setData({ ...snapshot.val() });
        setNumber(snapshot.numChildren());
      } else {
        setData({});
      }
    });

    return () => {
      setData({});
    };
  }, [id]);

  useEffect(() => {
    if (id) {
      console.log("sec", data[id]);
      setState({ ...data[id] });
    } else {
      setState({ ...initialState });
    }
    return () => {
      setState({ ...initialState });
    };
  }, [id, data]);

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
                  defaultValue={state.projectName || ""}
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
                  defaultValue={state.description || ""}
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
                  defaultValue={state.startDate || ""}
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
                  defaultValue={state.endDate || ""}
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
                  defaultValue={state.requirements || ""}
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
                  defaultValue={state?.teammembers || []}
                  as={MultiSelectField}
                  control={control}
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

export default EditProjectForm;
