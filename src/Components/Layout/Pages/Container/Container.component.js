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
import pagotipo from "../../../../Assets/banner2.jpg";
import puntoInter from "../../../../Assets/puntoIntervalles.png";

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
              En el peaje Autopista General Rumiñahui
            </p>
          </Col>
          <Col sm="3" className="card-style ml-5">
            <img src={puntoInter} alt="Suppliers"></img>
            <div>
              <h5>PEAJE INTERVALLES</h5>
            </div>
            <p className="serviceText">Av. Intervalles, peaje intervalles</p>
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
                src={pagotipo}
                alt="Suppliers"
                style={{ height: "230px", width: "100%" }}
              ></img>
            </Col>
            <Col md="6" className="text_card_info">
              <h2>BENEFICIOS</h2>
              <h6>SALUD, SEGURIDAD Y OPTIMIZACIÓN DEL TIEMPO</h6>
              <ul style={{ "line-height": "1.5rem" }}>
                <li>
                  Disminución de tiempos en cola en las estaciones de peaje.
                </li>
                <li>
                  Permite llevar una Gestión de Cuenta, es decir puedes
                  verificar el histórico de pasadas del vehiculo o flota.
                </li>
                <li>
                  Seguridad y control del vehículo o de la flota al verificar
                  cumplimiento de rutas y tiempos de traslados.
                </li>
              </ul>
            </Col>
          </Row>
        </div>

        <div className="card2">
          <Row md="12" className="brandImg" id="puntosVentas">
            <Col md="6" className="text_card_info">
              <h2>BENEFICIOS</h2>
              <h6>
                RAZONES POR LAS CUALES PREFERIR Y ADQUIRIR TU{" "}
                <strong>TAGEXPRESS</strong>:
              </h6>
              <ul style={{ "line-height": "1.5rem" }}>
                <li>Calidad y confiavilidad</li>
                <li>No son clonables.</li>
                <li>No son transferibles.</li>
                <li>Brindan seguridad.</li>
                <li>Costos asequibles.</li>
              </ul>
            </Col>
            <Col md="6">
              <img
                src={pagotipo}
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
                src={pagotipo}
                alt="Suppliers"
                style={{ height: "230px", width: "100%" }}
              ></img>
            </Col>
            <Col md="6" className="text_card_info">
              <h2>
                PASOS PARA COLOCAR TU <strong>TAG EXPRESS</strong>
              </h2>
              <h6>USARLO ES FÁCIL Y PRÁCTICO, AQUÍ LOS 4 SIMPLES PASOS:</h6>
              <ol style={{ "line-height": "1.5rem" }}>
                <li>Despegar lentamente el dispositivo.</li>
                <li>Colocarlo en el parabrisas a unos 15cm del borde superior</li>
                <li>Presiona bien el dispositivo al momento de pegarlo.</li>
                <li>El dispositivo autoadhesivo debe pegarse siempre con la cara impresa</li>
              </ol>
            </Col>
          </Row>
        </div>

        <div className="card4">
          <Row md="12" className="brandImg" id="puntosVentas">
            <Col md="6" className="text_card_info">
              <h2>
               PORQUE PREFERIRNOS
              </h2>
              <h6>TENEMOS VARIOS BENEFICIOS PARA TI</h6>
              <ul style={{ "line-height": "1.5rem" }}>
                <li>Es un tag de alta calidad y confiabilidad.</li>
                <li>La potencia de su lectura permite que sea detectado sin inconvenientes cuando el vehículo cruza una estación de peaje </li>
                <li>Evita que seas un evasor de peaje y que seas sancionado con el 15% de un SBU según el COIP Art. 390 numeral 2</li>
              </ul>
            </Col>
            <Col md="6">
              <img
                src={pagotipo}
                alt="Suppliers"
                style={{ height: "230px", width: "100%" }}
              ></img>
            </Col>
          </Row>
        </div>

        <div className="card5">
          <Row md="12" className="brandImg" id="puntosVentas">
            <Col md="6">
              <img
                src={pagotipo}
                alt="Suppliers"
                style={{ height: "230px", width: "100%" }}
              ></img>
            </Col>
            <Col md="6" className="text_card_info">
              <h2>
                FORMAS DE PAGO <strong>TAG EXPRESS</strong>
              </h2>
              <h6>ESCOGE LA QUE MAS TE GUSTE</h6>
              <ul style={{ "line-height": "1.5rem" }}>
                <li>Efectivo</li>
                <li>Transferencia</li>
              </ul>
            </Col>
          </Row>
        </div>
        {/* <div className="banner2">
              <img src={pagotipo} alt="banner2"/>
        </div> */}

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
                <p className="serviceText">098-558-7634</p>
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
                ¿Cómo activo <strong>TAG EXPRESS</strong> en las estaciones de
                peaje?
              </Button>
              <UncontrolledCollapse toggler="#toggler">
                <Card>
                  <CardBody>
                    <p>
                      Al ser Instituciones o Empresas independientes entre sí,
                      el tag debe ser activado en cada una de ellas conforme los
                      requisitos que soliciten, es importante contar con:
                    </p>
                    <ul>
                      <li>matrícula del vehículo para revisar sus datos</li>
                      <li>Cédula del propietario</li>
                      <li>del vehículo Valor para recarga</li>
                    </ul>
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
                ¿En que Estaciones de peaje puedo utilizar{" "}
                <strong>TAG EXPRESS</strong>?
              </Button>
              <UncontrolledCollapse toggler="#toggler2">
                <Card>
                  <CardBody>
                    <p>
                      En todas que tengan tecnología pasiva, es decir las que
                      trabajen con un tag tipo sticker
                    </p>
                    <ul>
                      <li>
                        Peajes del Gobierno de Pichincha: Autopista General
                        Rumiñahui e Intervalles
                      </li>
                      <li>Peaje de Alóag-Unión del Toachi</li>
                      <li>
                        Peajes del Gobierno de Guayas: Concesiones{" "}
                        <strong>CONCEGUA y CONORTE</strong>
                      </li>
                      <li>
                        Peajes de <strong>PANAVIAL</strong>
                      </li>
                      <li>Peaje de Santo Domingo</li>
                      <li>Peaje Río 7 en el Sur del país</li>
                      <li>Peaje Vía a la Costa</li>
                      <li>Peaje de Manabí</li>
                      <li>Peaje en Machala</li>
                    </ul>
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
                ¿Tiene algun costo homologar mi <strong>TAG EXPRESS</strong>?
              </Button>
              <UncontrolledCollapse toggler="#toggler3">
                <Card>
                  <CardBody>
                    <p>
                      No, una vez adquirido el dispositivo este se puede
                      homologar de forma gratuita en las estaciones de peajes
                      con tecnología pasiva a nivel nacional.
                    </p>
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
