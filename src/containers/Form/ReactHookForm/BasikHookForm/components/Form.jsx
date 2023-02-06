import React, { useState } from "react";
import PropTypes from "prop-types";
import EyeIcon from "mdi-react/EyeIcon";
import EmailIcon from "mdi-react/EmailIcon";
import AccountSearchIcon from "mdi-react/AccountSearchIcon";
import { Button, ButtonToolbar, Card, CardBody, Col } from "reactstrap";
import { useForm, Controller } from "react-hook-form";
import { MultiSelectField } from "@/shared/components/form/MultiSelect";
import { SelectField } from "@/shared/components/form/Select";
import { FileInputField } from "@/shared/components/form/FileInput";

const Form = ({ isHorizontal }) => {
  const [isPasswordShown, setIsPasswordShown] = useState(false);
  const showPassword = () => {
    setIsPasswordShown((prevState) => !prevState);
  };

  const { handleSubmit, register, reset, control } = useForm();
  const onSubmit = (data) => console.log(data);
  // const doSubmit = async () => {
  //     try {
  //       const { data } = this.state;
  //       document.getElementById("json").textContent = JSON.stringify(
  //         data,
  //         undefined,
  //         2
  //       );

  //       // this.props.ontoggle(false, true, true);
  //     } catch (ex) {
  //       if (ex.response && ex.response.status === 400) {
  //         const errors = { ...this.state.errors };
  //         errors.email = ex.response.data;
  //         this.setState({ errors });
  //         console.log(this.state.errors);
  //       }
  //     }
  //   };
  return (
    <Col md={12} lg={12}>
      <Card>
        <CardBody>
          <form
            className={`form ${isHorizontal && "form--horizontal"}`}
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="form__form-group">
              <span className="form__form-group-label">Role Name</span>
              <div className="form__form-group-field">
                <input
                  name="defaultInput"
                  type="text"
                  placeholder="Enter Name Here .."
                  ref={register}
                />
              </div>
            </div>
            <div className="form__form-group">
              <span className="form__form-group-label">Role Id</span>
              <div className="form__form-group-field">
                <input
                  name="defaultInput"
                  type="text"
                  placeholder="Enter Id Here .."
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
              <Col md="6">
                <Button
                  block
                  size="lg"
                  color="primary"
                  // style={{ backgroundColor: "#FFF" }}
                  className="my-4"
                  type="button"
                  data-dismiss="modal"
                >
                  Save
                </Button>
              </Col>
              <Col md="6">
                <Button
                  block
                  size="lg"
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

export default Form;
