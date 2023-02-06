import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Button, ButtonToolbar, Modal } from 'reactstrap';
import classNames from 'classnames';
import { RTLProps } from '@/shared/prop-types/ReducerProps';
// import RoleForm from './RolesForm';
import ProjectForm from './Form';
const ModalComponent = ({
  color, btn, title, message, colored, header, rtl,
}) => {
  const [modal, setModal] = useState(false);

  const toggle = () => {
    setModal(prevState => !prevState);
  };
const [projects, setprojects] = useState([
    {
        "projectId": "123",
        "projectName": "Zameen Website",
        "startDate": "20-07-2020",
        "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        "scope": "adipisicing elit",
        "functionalReqs": [
            {
                "id": "1",
                "description": "Admin shall be able to login to the system"
            },
            {
                "id": "2",
                "description": "Admin shall be able to view unsold properties"
            }
        ],
        "endDate": "20-07-2022",
        "TeamLead": "User",
        "Members": "User",
        "status": "In Progress"
    },
    {
        "projectId": "456",
        "projectName": "CUST Website",
        "startDate": "20-07-2020",
        "scope": "sit amet consectetur",
        "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        "functionalReqs": [
            {
                "id": "1",
                "description": "Teacher shall be able to view registered students"
            },
            {
                "id": "2",
                "description": "Teacher shall be able to upload students marks"
            }
        ],
        "endDate": "20-07-2022",
        "Members": "User",
        "status": "Completed"
    },
    {
        "projectId": "789",
        "projectName": "Mobile App",
        "startDate": "20-07-2020",
        "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        "scope": "Lorem ipsum dolor",
        "functionalReqs": [
            {
                "id": "1",
                "description": "User shall be able to message other registered users"
            },
            {
                "id": "2",
                "description": "User shall be able to login to application"
            }
        ],
        "endDate": "20-07-2022",
        "Members": "User",
        "status": "Testing"
    }
  ]);
  const addProject = (project) => {
    const newProject = [...projects, project];
    setprojects(newProject);
  };

  let Icon;

  switch (color) {
    case 'primary':
      Icon = <span className="lnr lnr-pushpin modal__title-icon" />;
      break;
    case 'success':
      Icon = <span className="lnr lnr-thumbs-up modal__title-icon" />;
      break;
    case 'warning':
      Icon = <span className="lnr lnr-flag modal__title-icon" />;
      break;
    case 'danger':
      Icon = <span className="lnr lnr-cross-circle modal__title-icon" />;
      break;
    default:
      break;
  }
  const modalClass = classNames({
    'modal-dialog--colored': colored,
    'modal-dialog--header': header,
  });

  return (
    <div>
      <Button color={color} onClick={toggle}>{btn}</Button>
      <Modal
        isOpen={modal}
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
          {header ? '' : Icon}
          <h4 className="text-modal  modal__title">{title}</h4>
        </div>
        <div className="modal__body">
          {message}
        </div>
        <ProjectForm addProject={addProject}/>
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
  title: '',
  message: '',
  colored: false,
  header: false,
};

export default connect(state => ({
  rtl: state.rtl,
}))(ModalComponent);