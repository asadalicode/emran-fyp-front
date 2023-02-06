import React, { useEffect, useState } from "react";
import {
  Card,
  CardBody,
  Col,
  Container,
  Row,
  Button,
  ButtonToolbar,
} from "reactstrap";
import { useForm, Controller } from "react-hook-form";
import * as yup from "yup";
// import { yupResolver } from 'react-hook-form-resolvers';
import UserDataService from "../../services/usersServiceOld";
import { fireAb } from "./../../firebase";
import { useHistory } from "react-router";

function ChangePassword({ isHorizontal }) {
  const schema = yup.object().shape({
    // oldPassword: yup.string().min(8).required(),
    newPassword: yup.string().min(8).required(),
    confirmPassword: yup.string().oneOf([yup.ref("newPassword"), null]),
  });

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    // resolver: yupResolver(schema),
  });
  const [userdata, setData] = useState({});
  const [id, setId] = useState(localStorage.getItem("id"));
  const [state, setState] = useState({});
  const history = useHistory();
  useEffect(() => {
    fireAb.child("users").on("value", (snapshot) => {
      if (snapshot.val() !== null) {
        // console.log(snapshot.numChildren());
        setData({ ...snapshot.val() });
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
      console.log("sec", userdata[id]);
      setState({ ...userdata[id] });
    }
  }, [id, userdata]);

  const onSubmit = (data) => {
    const userName = localStorage.getItem("id");

    state.password = data.newPassword;
    // console.log(data, state, userName);
    fireAb.child(`users/${userName}`).set(state, (err) => { });
    setTimeout(() => history.push("/UserManagement"));
  };
  return (
    <div>
      <Container className="dashboard">
        <Row>
          <Col md={12}>
            <h3 className="page-title">Change Password</h3>
          </Col>
        </Row>
        <Row>
          <Col md={3}></Col>
          <Col md={6}>
            <Card>
              <CardBody className="dashboard__card-widget">
                <form
                  className={`form ${isHorizontal && "form--horizontal"}`}
                  onSubmit={handleSubmit(onSubmit)}
                >
                  {/* <div className="form__form-group">
                    <span className="form__form-group-label">Old Password</span>
                    <div className="form__form-group-field">
                      <input
                        name="oldPassword"
                        color="danger"
                        type="text"
                        placeholder="Enter Old Password Here .."
                        ref={register}
                      />
                      <p>{errors?.oldPassword?.message}</p>
                    </div>
                  </div> */}
                  <div className="form__form-group">
                    <span className="form__form-group-label">New Password</span>
                    <div className="form__form-group-field">
                      <input
                        name="newPassword"
                        type="text"
                        placeholder="Enter New Password Here .."
                        ref={register}
                      />
                      <p color="danger">{errors?.newPassword?.message}</p>
                    </div>
                  </div>
                  <div className="form__form-group">
                    <span className="form__form-group-label">
                      Confirm New Password
                    </span>
                    <div className="form__form-group-field">
                      <input
                        name="confirmPassword"
                        type="text"
                        placeholder="Enter New Password Again .."
                        ref={register}
                      />
                      <p color="danger">{errors?.confirmPassword?.message}</p>
                    </div>
                  </div>

                  <Row>
                    <Col md="12">
                      <Button
                        size="lg"
                        color="primary"
                        className="my-4"
                        type="submit"
                        data-dismiss="modal"
                      >
                        Change Password
                      </Button>
                    </Col>
                    {/* <Col md="6">
                        <Button
                          block
                          size="lg"
                          color="secondary"
                          className="my-4"
                          type="button"
                          data-dismiss="modal"
                        >
                          Cancel
                        </Button>
                      </Col> */}
                  </Row>
                </form>
              </CardBody>
            </Card>
          </Col>
          <Col md={3}></Col>
        </Row>
      </Container>
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
    </div>
  );
}

export default ChangePassword;
