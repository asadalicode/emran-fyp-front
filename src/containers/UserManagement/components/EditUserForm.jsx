import React, { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import EyeIcon from "mdi-react/EyeIcon";
import { fireAb } from "../../../firebase";
import {
  Card,
  Container,
  Row,
  CardBody,
  Button,
  Col,
  Input,
  Form,
} from "reactstrap";
import { SelectField } from "@/shared/components/form/Select";

import { useForm, Controller } from "react-hook-form";

const initialState = {
  userId: 0,
  userName: "",
  role: {
    value: "",
    label: "",
  },
  status: {
    value: "",
    label: "",
  },
  email: "",
  password: "",
};
function EditUserForm() {
  const { handleSubmit, defaultValue, register, reset, control } = useForm();

  const [data, setData] = useState({});
  const [number, setNumber] = useState(0);
  const [state, setState] = useState(initialState);
  const { id } = useParams();
  const history = useHistory();

  const [isPasswordShown, setIsPasswordShown] = useState(false);
  const showPassword = () => {
    setIsPasswordShown((prevState) => !prevState);
  };
  //   const { userName, email, password, userId, role, status } = state;
  useEffect(() => {
    fireAb.child("users").on("value", (snapshot) => {
      if (snapshot.val() !== null) {
        // console.log(snapshot.numChildren());
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

  //   const handleInputChange = (e) => {
  //     const { name, value } = e.target;
  //     setState({ ...state, [name]: value });
  //   };

  const onSubmit = (data) => {
    console.log(data);
    fireAb.child(`users/${id}`).set(data, (err) => {});
    setTimeout(() => history.push("/UserManagement"));
    // data.userId = number + 1;
    // if (!userName) {
    // console.log(userName);
    // }
  };

  return (
    <div>
      <Container>
        {" "}
        <h3>Edit User</h3>
      </Container>

      <Col md={12} lg={12}>
        <Card>
          <CardBody>
            <form
              className={`form "form--horizontal"}`}
              onSubmit={handleSubmit(onSubmit)}
            >
              <div className="form__form-group">
                <span className="form__form-group-label">User Name</span>
                <div className="form__form-group-field">
                  <input
                    name="userName"
                    type="text"
                    defaultValue={state.userName || ""}
                    placeholder="Enter UserName Here .."
                    ref={register}
                  />
                </div>
              </div>

              <div className="form__form-group">
                <span className="form__form-group-label">Email</span>
                <div className="form__form-group-field">
                  <input
                    name="email"
                    type="text"
                    defaultValue={state.email || ""}
                    placeholder="Enter Email Here .."
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
                    defaultValue={state.password || ""}
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
                    defaultValue={{ value: "active", label: "Active" }}
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
                    defaultValue={{ value: "Team Lead", label: "Team Lead" }}
                    options={[
                      { value: "CEO", label: "CEO" },
                      { value: "Project Manager", label: "Project Manager" },
                      { value: "Team Lead", label: "Team Lead" },
                      { value: "Team Member", label: "Team Member" },
                    ]}
                  />
                </div>
              </div>
              {/* <div className="form__form-group">
                <span className="form__form-group-label">Email</span>
                <div className="form__form-group-field">
                  <input
                    name="email"
                    type="text"
                    value={email}
                    placeholder="Enter Email Here .."
                    onChange={handleInputChange}
                  />
                </div>
              </div> */}
              {/* 
              <div className="form__form-group">
                <span className="form__form-group-label">Email</span>
                <div className="form__form-group-field">
                  <select
                    id="exampleSelect"
                    name="role"
                    value={role.value}
                    onChange={handleInputChange}
                    type="select"
                  >
                    <option value="Project Manager">Project Manager</option>
                    <option value="Team Lead">Team Lead</option>
                    <option value="Team Member">Team Member</option>
                  </select>
                </div>
              </div> */}

              <div>
                <Button color="primary" type="submit">
                  save
                </Button>
              </div>
            </form>
          </CardBody>
        </Card>
      </Col>
    </div>
  );
}
// Form.propTypes = {
//   isHorizontal: PropTypes.bool,
// };

// Form.defaultProps = {
//   isHorizontal: false,
// };
export default EditUserForm;
