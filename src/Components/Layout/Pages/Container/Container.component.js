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
import edif from "../../../../Assets/edidifico_consejo.jpg";
import logoTaxExpress from "../../../../Assets/logo-sin-fondo-tag-express.png";
import Pasos from "../../../../Assets/PasosTag.jpg";
import tagecu from "../../../../Assets/publicidad4.jpg";
import prefAdqui from "../../../../Assets/preferir_adquirir.jpg";
import prefAdqui2 from "../../../../Assets/publicidad2.jpg";
import pagos from "../../../../Assets/publicidad10.jpg";
import puntosV from "../../../../Assets/publicidad7.jpg";
import tagecu2 from "../../../../Assets/publicidad6.jpg";

const ContainerComponent = () => {
  return (
    <>
      <HeroImg />
      <Container>
        <div>
          <h1 className="subtitle_section">
            Puntos de venta{" "}
            <img className="logoNav" src={logoTaxExpress} alt="logo" />
          </h1>
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

        <div className="tag_express_sub">
          <h1 className="subtitle_section">
            <img className="logoNav" src={logoTaxExpress} alt="logo" />
          </h1>
        </div>

        <div className="card1">
          <Row md="12" className="brandImg" id="puntosVentas">
            <Col md="6">
              <img
                src={prefAdqui}
                alt="Suppliers"
                style={{ height: "230px", width: "100%" }}
              ></img>
            </Col>
            <Col md="6" className="text_card_info">
              <p>Texto</p>
            </Col>
          </Row>
        </div>

        <div className="card2">
          <Row md="12" className="brandImg" id="puntosVentas">
            <Col md="6" className="text_card_info">
              <p>Texto</p>
            </Col>
            <Col md="6">
              <img
                src={prefAdqui}
                alt="Suppliers"
                style={{ height: "230px", width: "100%" }}
              ></img>
            </Col>
          </Row>
        </div>

        <div className="card3">
          <Row md="12" className="brandImg" id="puntosVentas">
            <Col md="6">
              <img
                src={pagos}
                alt="Suppliers"
                style={{ height: "230px", width: "100%" }}
              ></img>
            </Col>
            <Col md="6" className="text_card_info">
              <p>Texto</p>
            </Col>
          </Row>
        </div>

        <div className="card4">
          <Row md="12" className="brandImg" id="puntosVentas">
            <Col md="6" className="text_card_info">
              <p>Texto</p>
            </Col>
            <Col md="6">
              <img
                src={prefAdqui}
                alt="Suppliers"
                style={{ height: "230px", width: "100%"}}
              ></img>
            </Col>
          </Row>
        </div>

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
          <Container style={{ width: "70%" }}>
            <div>
              <Button
                color="info"
                className="faq"
                id="toggler"
                style={{ marginBottom: "1rem" }}
              >
                Pregunta1
              </Button>
              <UncontrolledCollapse toggler="#toggler">
                <Card>
                  <CardBody>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Nesciunt magni, voluptas debitis similique porro a molestias
                    consequuntur earum odio officiis natus, amet hic, iste sed
                    dignissimos esse fuga! Minus, alias.
                  </CardBody>
                </Card>
              </UncontrolledCollapse>
            </div>

            <div>
              <Button
                color="info"
                className="faq"
                id="toggler2"
                style={{ marginBottom: "1rem" }}
              >
                Pregunta2
              </Button>
              <UncontrolledCollapse toggler="#toggler2">
                <Card>
                  <CardBody>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Nesciunt magni, voluptas debitis similique porro a molestias
                    consequuntur earum odio officiis natus, amet hic, iste sed
                    dignissimos esse fuga! Minus, alias.
                  </CardBody>
                </Card>
              </UncontrolledCollapse>
            </div>

            <div>
              <Button
                color="info"
                className="faq"
                id="toggler3"
                style={{ marginBottom: "1rem" }}
              >
                Pregunta3
              </Button>
              <UncontrolledCollapse toggler="#toggler3">
                <Card>
                  <CardBody>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Nesciunt magni, voluptas debitis similique porro a molestias
                    consequuntur earum odio officiis natus, amet hic, iste sed
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
