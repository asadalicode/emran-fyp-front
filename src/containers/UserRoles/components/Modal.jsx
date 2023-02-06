import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Button, ButtonToolbar, Modal } from 'reactstrap';
import classNames from 'classnames';
import { RTLProps } from '@/shared/prop-types/ReducerProps';
import RoleForm from './RolesForm';
const ModalComponent = ({
  color, btn, title, message, colored, header, rtl,
}) => {
  const [modal, setModal] = useState(false);

  const toggle = () => {
    setModal(prevState => !prevState);
  };
  const [roles, setroles] = useState([
    {
          id: 1,
          roleId: '1',
          roleName: 'CEO',
          
         
        },
        {
          id: 2,
          roleId: '2',
          roleName: 'Project Manager',
          
        },
        {
          id: 3,
          roleId: '3',
          roleName: 'Team Lead',
         
        },
        {
          id: 4,
          roleId: '4',
          roleName: 'Team Member',
        }
  ]);
  const addRole = (role) => {
    const newRoles = [...roles, role];
    setroles(newRoles);
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
        <RoleForm addRole={addRole}/>
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
