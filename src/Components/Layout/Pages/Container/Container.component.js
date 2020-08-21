import React from "react";
import { Container, Row, Col } from "reactstrap";
import "./container.css";
import SupplierImage from '../../../../Assets/hero.jpg'

const ContainerComponent = () => {
  return (
    <Container>
      <h1>Lorem Ipsum is simply dummy text</h1>
      <Row md="12" className="brandImg">
        <Col sm="2"><img className="logoImg" src={SupplierImage} alt="logo"></img></Col>
        <Col sm="2"><img className="logoImg" src={SupplierImage} alt="logo"></img></Col>    
        <Col sm="2"><img className="logoImg" src={SupplierImage} alt="logo"></img></Col>
        <Col sm="2"><img className="logoImg" src={SupplierImage} alt="logo"></img></Col>
        <Col sm="2"><img className="logoImg" src={SupplierImage} alt="logo"></img></Col>
        <Col sm="2"><img className="logoImg" src={SupplierImage} alt="logo"></img></Col>
      </Row>
      <Row md="12" className="brandImg">
        <Col sm="3">
        <img src={SupplierImage} alt="Suppliers"></img>
          <h2>Supplier</h2>
          <p className="serviceText">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s,
          </p>
        </Col>
        <Col sm="3">
        <img src={SupplierImage} alt="Suppliers"></img>
          <h2>Buyers</h2>
          <p className="serviceText">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s,
          </p>
        </Col>
        <Col sm="3">
        <img src={SupplierImage} alt="Suppliers"></img>
          <h2>Partners & Data Providers</h2>
          <p className="serviceText">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s,
          </p>
        </Col>
        <Col sm="3">
        <img src={SupplierImage} alt="Suppliers"></img>
          <h2>Data Marketplace</h2>
          <p className="serviceText">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s,
          </p>
        </Col>
      </Row>

      <section>
        <h2>Trust your suppliers</h2>
        <p className="serviceText">
          Lorem Ipsum is simply dummy text of the printing and typesetting
        </p>
        <p className="serviceText">-Patent Pending-</p>
        <div className="imgSuppliers">
          <img src={SupplierImage} alt="Suppliers"></img>
        </div>
      </section>
    </Container>
  );
};

export default ContainerComponent;
