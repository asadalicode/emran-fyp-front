import React, { useState } from 'react';
import PropTypes from 'prop-types';
import EyeIcon from 'mdi-react/EyeIcon';
import {nanoid} from 'nanoid';
import EmailIcon from 'mdi-react/EmailIcon';

import {
  Button,
  ButtonToolbar,
  Card,
  CardBody,
  Col,
  Row,
  Input,
  Form
} from 'reactstrap';
import { useForm, Controller } from 'react-hook-form';
import { MultiSelectField } from '@/shared/components/form/MultiSelect';
import { SelectField } from '@/shared/components/form/Select';
import { FileInputField } from '@/shared/components/form/FileInput';

const ProjectForm = ({ isHorizontal,addProject }) => {
  const [formData, updateFormData] = React.useState({});
 
  const handleChange = (e) => {
    updateFormData({
      ...formData,

      // Trimming any whitespace
      [e.target.name]: e.target.value.trim()
    });
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault()
  //   console.log(formData);
  //   // ... submit to API or something
  // };

  const [isPasswordShown, setIsPasswordShown] = useState(false);
  const showPassword = () => {
    setIsPasswordShown(prevState => !prevState);
  };

  
  const [name, setname] = useState("ABLP");
  const {
    handleSubmit,
    register,
    reset,
    control,
  } = useForm();
  return (
    <Col md={12} lg={12}>
      <Card>
        <CardBody>
          <form
            className={`form ${isHorizontal && 'form--horizontal'}`}
            // onSubmit={handleSubmit(onSubmit)}
          >
            <div className="form__form-group">
              <span className="form__form-group-label">Project ID</span>
              <div className="form__form-group-field">
                <input
                  name="defaultInput"
                  type="text"
                  placeholder="Enter Project ID Here .."
                  ref={register}
                />
              </div>
            </div>
            <div className="form__form-group">
              <span className="form__form-group-label">Project Name</span>
              <div className="form__form-group-field">
                <input
                  name="defaultInput"
                  type="text"
                  placeholder="Enter Project Name Here .."
                  ref={register}
                />
              </div>
            </div>
            <div className="form__form-group">
              <span className="form__form-group-label">Start Date</span>
              <div className="form__form-group-field">
                <input
                  name="defaultInput"
                  type="text"
                  placeholder="Enter Start Date Here .."
                  ref={register}
                  dateFormat={true}
                  timeFormat={false}
                />
              </div>
            </div>
            <div className="form__form-group">
              <span className="form__form-group-label">Submit Date</span>
              <div className="form__form-group-field">
                <input
                  name="defaultInput"
                  type="text"
                  placeholder="Enter Submit Date Here .."
                  ref={register}
                  dateFormat={true}
                  timeFormat={false}
                />
              </div>
            </div>
           
           
           
            <div className="form__form-group">
              <span className="form__form-group-label">Members</span>
              <div className="form__form-group-field">
                <Controller
                  name="Select Members"
                  as={SelectField}
                  control={control}
                  // options={this.state.Members
                  // }
                />
              </div>
            </div>
            <div>
            <Row>
                  {/* <Col md="6">{this.renderButton("Submit", "primary")}</Col> */}

                  <Col md="6">
                    <Button
                      block
                      size="lg"
                      color="primary"
                      // style={{ backgroundColor: "#FFF" }}
                      className="my-4"
                      type="button"
                      data-dismiss="modal"
                      onClick={() => this.doSubmit()}
                    >
                      Save
                    </Button>
                  </Col>
                  {/* </form> */}
                  <Col md="6">
                    <Button
                      block
                      size="lg"
                      style={{ backgroundColor: "#FFF" }}
                      className="my-4"
                      type="button"
                      data-dismiss="modal"
                      onClick={() => this.toggleModal()}
                    >
                      Cancel
                    </Button>
                  </Col>
                </Row>
      
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
