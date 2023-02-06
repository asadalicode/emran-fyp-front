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
  teamId: 0,
  teamName: "",
  teamDescription: "",
};
function EditTeamForm() {
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
  //   const { teamName, email, password, userId, role, status } = state;
  useEffect(() => {
    fireAb.child("team").on("value", (snapshot) => {
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
    fireAb.child(`team/${id}`).set(data, (err) => {});
    setTimeout(() => history.push("/TeamManage"));
    // data.userId = number + 1;
    // if (!teamName) {
    // console.log(teamName);
    // }
  };

  return (
    <div>
      <Container>
        <h3>Edit Team</h3>
      </Container>

      <Col md={12} lg={12}>
        <Card>
          <CardBody>
            <form
              className={`form "form--horizontal"}`}
              onSubmit={handleSubmit(onSubmit)}
            >
              <div className="form__form-group">
                <span className="form__form-group-label">Team Name</span>
                <div className="form__form-group-field">
                  <input
                    name="teamName"
                    type="text"
                    defaultValue={state.teamName || ""}
                    placeholder="Enter Team Name Here .."
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
                    placeholder="Enter Description Here .."
                    ref={register}
                  />
                </div>
              </div>

              <div>
                <Button color="primary" type="submit">
                  Save
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
export default EditTeamForm;
