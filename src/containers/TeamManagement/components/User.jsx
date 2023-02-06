import React from "react";
import { useTranslation } from "react-i18next";
import { ButtonToolbar, Card, CardBody, Col, Button } from "reactstrap";
import { Link } from "react-router-dom";

const UserAdd = () => {
  const { t } = useTranslation("common");

  return (
    <Col md={12}>
      <Card>
        <CardBody style={{ backgroundColor: "transparent" }}>
          {/* <h2>users</h2> */}
          <ButtonToolbar style={{ float: "right" }}>
            <div>
              <Link to={"/TeamAdd"}>
                <Button color="primary" size="sm">
                  Add Team
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
