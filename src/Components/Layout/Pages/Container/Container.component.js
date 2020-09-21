import React from "react";
import HeroImg from "../heroImage/Hero.component";
import {
  Container,
  Row,
  Col,
  UncontrolledCollapse,
  Button,
  CardBody,
  Card,
} from "reactstrap";
import "./container.css";
import oficinaTag from "../../../../Assets/oficinaTag.jpeg";
import quality from "../../../../Assets/medal.png";
import block from "../../../../Assets/block.png";
import lock from "../../../../Assets/lock.png";
import rfid from "../../../../Assets/rfid.png";
import paso1 from "../../../../Assets/tagexpresspasos.png";
import edif from "../../../../Assets/edidifico_consejo.jpg";
import logoTaxExpress from "../../../../Assets/logo-tag-express.png";

const ContainerComponent = () => {
  return (
    <>
      <HeroImg />
      <Container>
        <div>
          <h1 className="subtitle_section">Puntos de venta <img className="logoNav" src={logoTaxExpress} alt="logo" /></h1>
        </div>
        <Row md="12" className="brandImg" id="puntosVentas">
          <Col sm="3" className="card-style" style={{ marginLeft: "100px" }}>
            <img src={oficinaTag} alt="Suppliers"></img>
            <div>
              <h5>AUTOPISTA GENERAL RUMIÑAHUI</h5>
            </div>
            <p className="serviceText">
              Junto a las oficinas del peaje Autopista General Rumiñahui
            </p>
          </Col>
          <Col sm="3" className="card-style ml-5">
            <img src={edif} alt="Suppliers"></img>
            <div>
              <h5>PEAJE INTERVALLES</h5>
            </div>
            <p className="serviceText">
              Av. Intervalles, Sangolquí, peaje intervalles
            </p>
          </Col>
          <Col sm="3" className="card-style ml-5">
            <img src={edif} alt="Suppliers"></img>
            <div className="h3Title">
              <h5>EDIFICIO CONCEJO PROVINCIAL</h5>
            </div>
            <p className="serviceText">Juan Larrea, Quito 170103</p>
          </Col>
        </Row>

        <div>
          <h1 className="subtitle_section">
            ¿POR QUÉ PREFERIR Y ADQUIRIR <img className="logoNav" src={logoTaxExpress} alt="logo" />?
          </h1>
        </div>
        <Row md="12" className="brandImg" id="puntosVentas">
          <Col sm="2" className="card-style" style={{ marginLeft: "130px" }}>
            <img
              src={quality}
              alt="Suppliers"
              className="iconsTagexpress"
            ></img>
            <p className="serviceText">
              Nuestros dispositivod son de alta calidad y confiabilidad
            </p>
          </Col>
          <Col sm="2" className="card-style ml-5">
            <img src={block} alt="Suppliers" className="iconsTagexpress"></img>
            <p className="serviceText">
              Nuestros dispositivos no son clonables
            </p>
          </Col>
          <Col sm="2" className="card-style ml-5">
            <img src={lock} alt="Suppliers" className="iconsTagexpress"></img>
            <p className="serviceText">
              Nuestros dispositovos brindan seguridad tanto al usuario como a
              las estaciones de peaje por donde se transita
            </p>
          </Col>
          <Col sm="2" className="card-style ml-5">
            <img src={rfid} alt="Suppliers" className="iconsTagexpress"></img>
            <p className="serviceText">
              La potencia de la lectura de nuetsros dispositivos permite que sea
              detectado sin inconvenientes al cruzar el peaje evitando así
              multas
            </p>
          </Col>
        </Row>

        <section>
        <div>
          <h1 className="subtitle_section">Pasos para colocar tu <img className="logoNav" src={logoTaxExpress} alt="logo" /></h1>
        </div>
        <Row md="12" className="brandImg" id="puntosVentas">
          <Col sm="3" className="card-style" style={{ marginLeft: "100px" }}>
            <img src={paso1} alt="Suppliers"></img>
            <div>
              <h5>Paso 1</h5>
            </div>
            <p className="serviceText">
              Junto a las oficinas del peaje Autopista General Rumiñahui
            </p>
          </Col>
          <Col sm="3" className="card-style ml-5">
            <img src={paso1} alt="Suppliers"></img>
            <div>
              <h5>Paso 2</h5>
            </div>
            <p className="serviceText">
              Av. Intervalles, Sangolquí, peaje intervalles
            </p>
          </Col>
          <Col sm="3" className="card-style ml-5">
            <img src={paso1} alt="Suppliers"></img>
            <div className="h3Title">
              <h5>Paso 3</h5>
            </div>
            <p className="serviceText">Juan Larrea, Quito 170103</p>
          </Col>
        </Row>
        </section>

        <section>
          <h2 className="subtitle_section">GRACIAS A NUESTRA GESTIÓN</h2>

          <Row md="12" className="brandImg">
            <Col sm="4">
              <div className="numbersText">100%</div>
              <h3>Clientes satisfechos</h3>
            </Col>
            <Col sm="4">
              <div className="numbersText">200.000 +</div>
              <h3>Tags vendidos</h3>
            </Col>
            <Col sm="4">
              <div className="numbersText">20.000 +</div>
              <h3>Recargas realizadas</h3>
            </Col>
          </Row>
        </section>

        <section id="contacto">
          <h1 className="subtitle_section">Contacto</h1>
          <Row md="12" className="brandImg">
            <Col sm="6">
              <div className="progress-bar-item">
                <h2>
                  <strong>Dirección:</strong>
                </h2>
                <p className="serviceText">
                  Junto a las oficinas del peaje Autopista General Rumiñahui
                </p>
              </div>
              <div className="progress-bar-item">
                <h2>
                  <strong>Télefonos:</strong>
                </h2>
                <p className="serviceText">0967879065</p>
              </div>
              <div className="progress-bar-item">
                <h2>
                  <strong>Correo:</strong>
                </h2>
                <p className="serviceText">
                  servicioalclientecalprandina@tagexpress.club
                </p>
              </div>
            </Col>
            <Col sm="6">
              <div>
                <div>
                  <div id="container">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d997.4455882335213!2d-78.48564607084202!3d-0.2432853588959758!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91d599db67507f85%3A0xcdb0c6ced89f5f73!2sGruas%20Y%20Plataformas%20PILICITA!5e0!3m2!1sen!2sec!4v1599160758980!5m2!1sen!2sec"
                      width="600"
                      height="250"
                      frameBorder="0"
                      style={{ border: "0" }}
                      allowFullScreen=""
                      aria-hidden="false"
                      tabIndex="0"
                      title="mapTagExpress"
                    ></iframe>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </section>
        <section id="preguntas">
          <h1 className="subtitle_section">PREGUNTAS FRECUENTES</h1>
          <Container style={{width:"70%"}}>
          <div>
    <Button className="faq" id="toggler" style={{ marginBottom: '1rem' }}>
      Pregunta1
    </Button>
    <UncontrolledCollapse toggler="#toggler">
      <Card>
        <CardBody>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt magni, voluptas debitis
          similique porro a molestias consequuntur earum odio officiis natus, amet hic, iste sed
          dignissimos esse fuga! Minus, alias.
        </CardBody>
      </Card>
    </UncontrolledCollapse>
  </div>

  <div>
    <Button className="faq" id="toggler2" style={{ marginBottom: '1rem' }}>
      Pregunta2
    </Button>
    <UncontrolledCollapse toggler="#toggler2">
      <Card>
        <CardBody>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt magni, voluptas debitis
          similique porro a molestias consequuntur earum odio officiis natus, amet hic, iste sed
          dignissimos esse fuga! Minus, alias.
        </CardBody>
      </Card>
    </UncontrolledCollapse>
  </div>

  <div>
    <Button className="faq"  id="toggler3" style={{ marginBottom: '1rem' }}>
      Pregunta3
    </Button>
    <UncontrolledCollapse toggler="#toggler3">
      <Card>
        <CardBody>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt magni, voluptas debitis
          similique porro a molestias consequuntur earum odio officiis natus, amet hic, iste sed
          dignissimos esse fuga! Minus, alias.
        </CardBody>
      </Card>
    </UncontrolledCollapse>
  </div>
  </Container>
        </section>
      </Container>
    </>
  );
};

export default ContainerComponent;
