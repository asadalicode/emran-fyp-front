import React from "react";
import { Col, Container, Row } from "reactstrap";
import CardBasic from "./components/Cards";

const Dashboardme = () => (

  <Container>
    <Row>
      <Col md={12}>
        <h3 className="page-title">Main Dashboard</h3>
      </Col>
    </Row>
    <Row dir="ltr">
      {/* <CardBasic data={props.location.state.user} /> */}
      <CardBasic />
    </Row>
  </Container>
);

export default Dashboardme;
