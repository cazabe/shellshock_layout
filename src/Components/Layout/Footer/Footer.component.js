import React from "react";
import { Row, Col } from "reactstrap";
import "./footer.style.css";

const FooterComponent = () => {
  return (
      
        <Row md="12">
          <Col sm="4">Trust your suppliers</Col>
          <Col sm="4">
            <strong>Contact Us</strong>
            <small>info@trust.com</small>
          </Col>
          <Col sm="4">Social</Col>
        </Row>
      
  );
};

export default FooterComponent;
