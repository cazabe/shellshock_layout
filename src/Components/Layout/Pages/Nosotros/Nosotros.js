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
              <h5>Nosotros</h5>
            </div>
            <p className="serviceText">
              Junto a las oficinas del peaje Autopista General Rumiñahui
            </p>
          </Col>
          <Col sm="3" className="card-style ml-5">
            <img src={mision} alt="Suppliers"></img>
            <div>
              <h5>Misión</h5>
            </div>
            <p className="serviceText">
              Av. Intervalles, Sangolquí, peaje intervalles
            </p>
          </Col>
          <Col sm="3" className="card-style ml-5">
            <img src={mision} alt="Suppliers"></img>
            <div className="h3Title">
              <h5>Visión</h5>
            </div>
            <p className="serviceText">Juan Larrea, Quito 170103</p>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Nosotros;
