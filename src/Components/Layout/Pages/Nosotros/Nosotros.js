import React from "react";
import { Container, Row, Col } from "reactstrap";
import mision from "../../../../Assets/mision.jpg";
import vision from "../../../../Assets/vision.jpg";
import valores from "../../../../Assets/valores.jpg";
import logoTag from "../../../../Assets/logo-sin-fondo-tag-express.png";
import "./nosotros.css";

const Nosotros = () => {
  return (
    <>
      <div>
        <div className="hero-image2">
          <div className="hero-text2">
            {/* <button>Hire me</button> */}
          </div>
        </div>
      </div>
      <Container>
        <div>
          <h1 className="subtitle_section">Conoce de nosotros</h1>
        </div>
        <Row md="12" className="brandImg" id="puntosVentas">
        <Col sm="6">
        <img src={logoTag} alt="Suppliers"></img>
        </Col>
        <Col sm="6">
        <div className="nostrosText">
        <p className="nosotros-text" style={{textAlign:"justify"}}>Somos una empresa preocupada en brindar un mejor servicio a los usuarios que transitan por las vías con estaciones de peaje; por esto hemos implementado diferentes puntos de venta en sitios estratégicos de tal manera que se facilite la adquisición y recarga de los tags; además nos preocupamos de brindar el servicio con nuestros puntos móviles 
          que nos permiten acercar a los sitios donde ustedes como usuarios nos necesitan.</p>
        </div>
        </Col>
        </Row>
       
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
          <img src={vision} alt="Suppliers"></img>
            <div className="h3Title">
              <h5>Visión</h5>
            </div>
            <p className="nostrosText" style={{fontFamily:"Helvetica"}}>Ser la mejor empresa en ofrecer soluciones y servicios con innovación y calidad</p>
          </Col>
          <Col sm="3" className="card-style ml-5">
          <img src={valores} alt="Suppliers"></img>
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
