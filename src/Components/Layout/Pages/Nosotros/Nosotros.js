import React from "react";
import { Container, Row, Col } from "reactstrap";
import mision from "../../../../Assets/mision.jpg";
import "./nosotros.css";

const Nosotros = () => {
  return (
    <>
      <div>
        <div className="hero-image2">
          <div className="hero-text2">
            <h1 className="hero_title2">
              LA SOLUCIÓN PARA TODOS LOS PEAJES DEL <span>ECUADOR</span>
            </h1>
            {/* <button>Hire me</button> */}
          </div>
        </div>
      </div>
      <Container>
        <div>
          <h1 className="subtitle_section">Conoce de nosotros</h1>
        </div>
        <Row md="12" className="brandImg" id="puntosVentas">
          <Col sm="3" className="card-style" style={{ marginLeft: "100px" }}>
          <img src={mision} alt="Suppliers"></img>
            <div>
              <h5>Misión</h5>
            </div>
              <ul className="ulMision">
              <li>Facilitar la movilidad</li> 
              <li>Marcar la diferencia al conectar estaciones de peaje</li> 
              <li>Garantizar accesibilidad a los servicios</li>
              <li>Ofrecer la mejor experiencia al facilitar al usuario revisar su
              gestión de cuenta </li>
              <li>Brindar seguridad con el servicio de Check Point</li>
              </ul>
          </Col>
          <Col sm="3" className="card-style ml-5">
          <img src={mision} alt="Suppliers"></img>
            <div className="h3Title">
              <h5>Visión</h5>
            </div>
            <p className="serviceText">Ser la mejor empresa en ofrecer soluciones y servicios con innovación y calidad</p>
          </Col>
          <Col sm="3" className="card-style ml-5">
          <img src={mision} alt="Suppliers"></img>
            <div>
              <h5>Valores</h5>
            </div>
            <ul className="ulMision">
              <li>Actuamos con honestidad y transparencia </li> 
              <li>Ofrecemos calidad en nuestro producto y servicio, generando </li> 
              <li>Trabajamos con pasión </li>
              <li>Generamos competitividad buscando la excelencia</li>
              <li>Creamos herramientas para facilitar el servicio a nuestros clientes </li>
              </ul>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Nosotros;
