import React from "react";
import { useTranslation } from "react-i18next";
import { ButtonToolbar, Card, CardBody, Col, Button } from "reactstrap";
import Modal from "./UserModal";

import Form from "../../Form/ReactHookForm/BasikHookForm/components/Form";
import { Link } from "react-router-dom";

const UserAdd = () => {
  const { t } = useTranslation("common");

  return (
    <Col md={12}>
      <Card>
        <CardBody>
          {/* <h2>users</h2> */}
          <ButtonToolbar style={{ float: "right" }}>
            <div>
              <Link to={"/User/add"}>
                <Button color="primary" size="sm">
                  Add User
                </Button>
              </Link>
              {/* <Modal
                color="primary"
                title="Add User"
                btn="Add User"
                message="...."
              /> */}
            </div>
          </ButtonToolbar>
        </CardBody>
      </Card>
    </Col>
  );
};

export default UserAdd;
