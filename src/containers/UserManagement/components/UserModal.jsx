import React, { useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Button, ButtonToolbar, Modal } from "reactstrap";
import classNames from "classnames";
import { RTLProps } from "@/shared/prop-types/ReducerProps";
import UserForm from "./UserForm";

const ModalComponent = ({
  color,
  btn,
  title,
  message,
  colored,
  header,
  rtl,
}) => {
  const [modal, setModal] = useState(false);

  const toggle = () => {
    setModal((prevState) => !prevState);
  };
  const [users, setusers] = useState([
    {
      id: 1,
      userName: "Administrator",
      userId: "123",
      firstName: "Admin",
      lastName: "User",
      email: "admin@gmail.com",
      password: "123123",
      role: "admin",
      status: "active",
    },
    {
      id: 2,
      userName: "EmaanUser",
      userId: "124",
      firstName: "Emaan",
      lastName: "Saqib",
      email: "emaan@gmail.com",
      password: "123123",
      role: "CEO",
      status: "active",
    },
    {
      id: 3,
      userName: "AnsaUser",
      userId: "125",
      firstName: "Ansa",
      lastName: "Azka",
      email: "ansa@gmail.com",
      password: "123123",
      role: "Project Manager",
      status: "active",
    },
    {
      id: 4,
      userName: "Humaira",
      userId: "126",
      firstName: "Humaira",
      lastName: "shakeel",
      email: "humaira@gmail.com",
      password: "123123",
      role: "Team Lead",
      status: "success",
    },
    {
      id: 5,
      userName: "Ali",
      userId: "127",
      firstName: "Ali",
      lastName: "mujtaba",
      email: "aliahmed@gmail.com",
      password: "123123",
      role: "Team Member",
      status: "active",
    },
    {
      id: 6,
      userName: "Salman",
      userId: "128",
      firstName: "Salman",
      lastName: "khan",
      email: "salma@gmail.com",
      password: "123123",
      role: "Team Member",
      status: "inactive",
    },
  ]);
  const addUser = (user) => {
    const newUser = [...users, user];
    setusers(newUser);
  };
  let Icon;

  switch (color) {
    case "primary":
      Icon = <span className="lnr lnr-pushpin modal__title-icon" />;
      break;
    case "success":
      Icon = <span className="lnr lnr-thumbs-up modal__title-icon" />;
      break;
    case "warning":
      Icon = <span className="lnr lnr-flag modal__title-icon" />;
      break;
    case "danger":
      Icon = <span className="lnr lnr-cross-circle modal__title-icon" />;
      break;
    default:
      break;
  }
  const modalClass = classNames({
    "modal-dialog--colored": colored,
    "modal-dialog--header": header,
  });

  return (
    <div>
      <Button color={color} onClick={toggle}>
        {btn}
      </Button>
      <Modal
        isOpen={modal}
        style={{ maxWidth: "840px" }}
        toggle={toggle}
        modalClassName={`${rtl.direction}-support`}
        className={`modal-dialog--${color} ${modalClass}`}
      >
        <div className="modal__header">
          <button
            className="lnr lnr-cross modal__close-btn"
            aria-label="modal__close-btn"
            type="button"
            onClick={toggle}
          />
          {header ? "" : Icon}
          <h4 className="text-modal  modal__title">{title}</h4>
        </div>
        <div className="modal__body">{message}</div>
        <UserForm addUser={addUser} />
        <ButtonToolbar className="modal__footer">
          {/* <Button className="modal_cancel" onClick={toggle}>Cancel</Button>{' '}
          <Button className="modal_ok" outline={colored} color={color} onClick={toggle}>Ok</Button> */}
        </ButtonToolbar>
      </Modal>
    </div>
  );
};

ModalComponent.propTypes = {
  title: PropTypes.string,
  message: PropTypes.string,
  color: PropTypes.string.isRequired,
  colored: PropTypes.bool,
  header: PropTypes.bool,
  btn: PropTypes.string.isRequired,
  rtl: RTLProps.isRequired,
};

ModalComponent.defaultProps = {
  title: "",
  message: "",
  colored: false,
  header: false,
};

export default connect((state) => ({
  rtl: state.rtl,
}))(ModalComponent);
