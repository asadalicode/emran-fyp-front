import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import EyeIcon from "mdi-react/EyeIcon";
import UserDataService from "../../../services/usersService";
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
import { SelectField } from "@/shared/components/form/Select";
import { FileInputField } from "@/shared/components/form/FileInput";
import { fireAb } from "../../../firebase";
import { useHistory } from "react-router";

const TeamForm = ({ isHorizontal, addUser }) => {
  const [formData, updateFormData] = React.useState({});
  const [error, setError] = React.useState(false);
  const [number, setNumber] = React.useState(0);

  const history = useHistory();
  useEffect(() => {
    fireAb.child("team").on("value", (snapshot) => {
      if (snapshot.val() !== null) {
        setNumber(snapshot.numChildren());
      }
    });
  }, []);

  const onSubmit = (data) => {
    // e.preventDefault();
    console.log(data);

    try {
      data.teamId = number + 1;
      fireAb.child("team").push(data, (err) => {});
      setTimeout(() => history.push("/TeamManage"), 1000);
    } catch (err) {
      console.log("Error", err);
    }
  };

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
              <span className="form__form-group-label">Team Name</span>
              <div className="form__form-group-field">
                <input
                  name="teamName"
                  type="text"
                  placeholder="Enter Team Name Here .."
                  ref={register}
                />
              </div>
            </div>

            <div className="form__form-group">
              <span className="form__form-group-label">Description</span>
              <div className="form__form-group-field">
                <textarea
                  name="description"
                  type="textbox"
                  placeholder="Enter Team Description Here .."
                  ref={register}
                />
              </div>
            </div>

            <div>
              {/* <input value={name} onChange={(e) => setname(e.target.value)} /> */}
              <Button color="primary">Save</Button>
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

export default TeamForm;
