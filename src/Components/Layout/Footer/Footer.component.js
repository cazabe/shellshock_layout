import React from "react";
import {Row, Col } from "reactstrap";
import logoTagExpress from "../../../Assets/logo-sin-fondo-tag-express.png";
import "./footer.style.css";

const FooterComponent = () => {
  
  return (
    // Footer
    <footer className="footer-distributed">
      <div className="footer-left">
        <img src={logoTagExpress} alt="logo TagExpress" />
      </div>
      <div className="footer-center">
        <div style={{ padding: "5px" }}>
          <i style={{ padding: "0px" }} className="fa fa-map-marker"></i>
          <p>Autopista General Rumiñahui</p>
          </div>
          <div style={{ padding: "5px" }}>
            <i style={{ padding: "0px" }} className="fa fa-phone"></i>
            <p>098-558-7634 / 022600686</p>
          </div>
          <div style={{ padding: "5px" }}>
            <i style={{ padding: "0px" }} className="fa fa-envelope"></i>
            <p>
              <a href="mailto:support@eduonix.com">
                servicioalcliente@tagexpress.club
              </a>
            </p>
          </div>
      </div>
      <div className="footer-right">
      <div style={{padding:"60px"}}>
        <Row md="12">
          <Col sm="4">
            
            <a href="https://www.facebook.com/TagExpressEcuador" target="_blank" className="fa fa-facebook"></a>
           
          </Col>
          <Col sm="4">
         
          <a href="https://www.instagram.com/tag.express.ecuador/" target="_blank" className="fa fa-instagram"></a>
          
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
