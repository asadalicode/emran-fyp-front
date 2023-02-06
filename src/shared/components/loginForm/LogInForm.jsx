import React, { useState, useEffect } from "react";
import { Field, reduxForm, Form } from "redux-form";
import { connect } from "react-redux";
import EyeIcon from "mdi-react/EyeIcon";
import KeyVariantIcon from "mdi-react/KeyVariantIcon";
import AccountOutlineIcon from "mdi-react/AccountOutlineIcon";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";
import { Alert, Button } from "reactstrap";
import renderCheckBoxField from "../form/CheckBox";
import { useHistory } from "react-router-dom";
// import users from "../../data/users.json";
import UserDataService from "../../../services/usersService";
import { fireAb } from "../../../firebase";

const LogInForm = ({
  errorMessage,
  errorMsg,
  fieldUser,
  typeFieldUser,
  form,
}) => {
  const history = useHistory();
  const [error, setError] = useState(false);
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    fireAb.child("users").on("value", (snapshot) => {
      if (snapshot.val() !== null) {
        console.log(snapshot.val());
      }
    });
    fireAb.child("users").on("value", (snapshot) => {
      if (snapshot.val() !== null) {
        console.log(snapshot.val());
      }
    });
  }, []);

  const getUsers = () => {
    const data = UserDataService.getAllUsers();
    // console.log(data.docs);
  };
  const onChangePassword = (e) => {
    console.log("password is", e.target.value);
    setPassword(e.target.value);
  };
  const onChangeInput = (e) => {
    console.log("userName is", e.target.value);
    setUserName(e.target.value);
  };

  const showPasswordToggle = () => {
    setShowPassword(!showPassword);
  };

  const signIn = () => {
    console.log("in Login");
    const requestOptions = {
      method: "post",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({ username: userName, password: password }),
    };
    fetch("http://localhost:7000/login", requestOptions).then((data) =>
      data.json().then((data2) => {
        if (data2 != null) {
          localStorage.setItem('role', (data2.user.role));
          history.push({ pathname: "/admin/Dashboardme", state: data2 });
        } else {
          console.log("data is null");
        }
      })
    );
  };

  return (
    // <form className="form login-form" onSubmit={handleSubmit(onSubmit)}>
    <div>
      <Alert color="danger" isOpen={!!errorMessage || !!errorMsg}>
        {errorMessage}
        {errorMsg}
      </Alert>
      <div className="form__form-group">
        <span className="form__form-group-label">{fieldUser}</span>
        <div className="form__form-group-field">
          <div className="form__form-group-icon">
            <AccountOutlineIcon />
          </div>
          <input
            style={{ border: "2px solid #F2F4F7" }}
            component="input"
            type={typeFieldUser}
            name="email"
            placeholder="Enter Your Email"
            onChange={(e) => onChangeInput(e)}
            //value={user.email}
            className="input-without-border-radius"
          />
        </div>
      </div>
      <div className="form__form-group">
        <span className="form__form-group-label">Password</span>
        <div className="form__form-group-field">
          <div className="form__form-group-icon">
            <KeyVariantIcon />
          </div>
          <input
            style={{ border: "2px solid #F2F4F7" }}
            name="password"
            onChange={(e) => onChangePassword(e)}
            //value={user.password}
            component="input"
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            className="input-without-border-radius"
          />
          <button
            type="button"
            className={`form__form-group-button${
              showPassword ? " active" : ""
            }`}
            onClick={showPasswordToggle}
          >
            <EyeIcon />
          </button>
          <div className="account__forgot-password">
            <NavLink to="/reset_password">Forgot a password?</NavLink>
          </div>
        </div>
      </div>
      <div className="form__form-group">
        <div className="form__form-group form__form-group-field">
          <Field
            name={`remember_me-${form}`}
            component={renderCheckBoxField}
            label="Remember me"
          />
        </div>
      </div>
      <div className="account__btns">
        <Button
          onClick={() => signIn()}
          // className="account__btn"
          type="submit"
          color="primary"
        >
          Login
        </Button>
      </div>
      {error ? (
        <Alert color="danger">
          <strong>Error! </strong> Email or password is incorrect!
        </Alert>
      ) : (
        <></>
      )}
      {error == "disable" ? (
        <Alert color="danger">
          <strong>Error! </strong> User is disabled
        </Alert>
      ) : (
        <></>
      )}
    </div>
  );
};

LogInForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  errorMessage: PropTypes.string,
  errorMsg: PropTypes.string,
  fieldUser: PropTypes.string,
  typeFieldUser: PropTypes.string,
  form: PropTypes.string.isRequired,
};

LogInForm.defaultProps = {
  errorMessage: "",
  errorMsg: "",
  fieldUser: "Email_address",
  typeFieldUser: "text",
};

export default connect((state) => ({
  errorMsg: state.user.error,
}))(reduxForm()(LogInForm));
