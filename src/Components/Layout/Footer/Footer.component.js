import React from "react";
import {Row, Col } from "reactstrap";
import logoTagExpress from "../../../Assets/logo-tag-express.png";
import "./footer.style.css";

const FooterComponent = () => {
  return (
    // Footer
    <footer className="footer-distributed">
      <div className="footer-left">
        <img src={logoTagExpress} alt="logo TagExpress" />
        <h3>
          AYUDANDO A<span> MOVILIZARTE</span>
        </h3>
      </div>
      <div className="footer-center">
        <div style={{ padding: "5px" }}>
          <i className="fa fa-map-marker"></i>
          <p>Autopista General Rumiñahui</p>
          <div style={{ padding: "5px" }}>
            <i className="fa fa-phone"></i>
            <p>0981218994</p>
          </div>
          <div style={{ padding: "5px" }}>
            <i className="fa fa-envelope"></i>
            <p>
              <a href="mailto:support@eduonix.com">
                servicioalclientecalprandina@tagexpress.club
              </a>
            </p>
          </div>
        </div>
      </div>
      <div className="footer-right">
      <div style={{padding:"60px"}}>
        <Row md="12">
          <Col sm="4">
            
            <a href="#" className="fa fa-facebook"></a>
           
          </Col>
          <Col sm="4">
         
          <a href="#" className="fa fa-instagram"></a>
          
          </Col>
          <Col sm="4">
         
          <a href="#" className="fa fa-twitter"></a>
         
          </Col>
          <div>
          <p className="footer-company-about">
          © 2019 CALPRANDINA . Todos los derechos reservados
        </p>
        </div>
        </Row>
        </div>
      </div>
    </footer>
  );
};

export default FooterComponent;
