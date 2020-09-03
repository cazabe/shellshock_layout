import React from "react";
import {
  Container,
  Row,
  Col,
  ListGroup,
  ListGroupItem,
  ListGroupItemHeading,
  ListGroupItemText,
} from "reactstrap";
import "./container.css";
import SupplierImage from "../../../../Assets/hero.jpg";

const ContainerComponent = () => {
  return (
    <Container>
      <h1 className="subtitle_section">NOSOTROS</h1>
      <Row md="12" className="brandImg" id="nosotros">
        <Col sm="6">
          <img src={SupplierImage} alt="Suppliers"></img>
          <h5>QUIENES SOMOS</h5>
          <p className="serviceText">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s,
          </p>
        </Col>
        <Col sm="6">
          <div>
            <h5>MISIÓN</h5>
            <p className="serviceText">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s,
            </p>
          </div>
          <div>
            <h5>VISIÓN</h5>
            <p className="serviceText">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s,
            </p>
          </div>
          <div>
            <h5>VALORES</h5>
            <p className="serviceText">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s,
            </p>
          </div>
        </Col>
      </Row>
      <div>
        <h1 className="subtitle_section">Nuestros puntos de ventas</h1>
      </div>
      <Row md="12" className="brandImg" id="puntosVentas">
        <Col sm="4">
          <img src={SupplierImage} alt="Suppliers"></img>
          <div>
          <h5>AUTOPISTA GENERAL RUMIÑAHUI</h5>
          </div>
          <p className="serviceText">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s,
          </p>
        </Col>
        <Col sm="4">
          <img src={SupplierImage} alt="Suppliers"></img>
          <div>
          <h5>PEAJE INTERVALLES</h5>
          </div>
          <p className="serviceText">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s,
          </p>
        </Col>
        <Col sm="4">
          <img src={SupplierImage} alt="Suppliers"></img>
          <div className="h3Title">
          <h5>EDIFICIO CONCEJO PROVINCIAL</h5>
          </div>
          <p className="serviceText">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s,
          </p>
        </Col>
      </Row>

      <section>
        <h2 className="subtitle_section">GRACIAS A NUESTRA GESTIÓN</h2>
        <p className="serviceText">
          Siempre intentamos sastifacer las necesidades de neustros clientes
        </p>
        <Row md="12" className="brandImg">
          <Col sm="6">
            <div className="progress-bar-item">
              <h2>
                <strong>Clientes satisfechos</strong>
              </h2>
            </div>
            <div className="progress-bar-item">
              <h2>
                <strong>Tags vendidos</strong>
              </h2>
            </div>
            <div className="progress-bar-item">
              <h2>
                <strong>Recargas realizadas</strong>
              </h2>
            </div>
          </Col>
          <Col sm="6">
            <span>90%</span>
            <div id="skills" className="progress-bar-item">
              <progress value="90" max="100"></progress>
            </div>
            <span>90%</span>
            <div id="skills" className="progress-bar-item">
              <progress value="90" max="100"></progress>
            </div>
            <span>90%</span>
            <div id="skills" className="progress-bar-item">
              <progress value="90" max="100"></progress>
            </div>
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
              <p>Junto a las oficinas del peaje Autopista General Rumiñahui</p>
            </div>
            <div className="progress-bar-item">
              <h2>
                <strong>Télefonos:</strong>
              </h2>
              <p>0967879065</p>
            </div>
            <div className="progress-bar-item">
              <h2>
                <strong>Correo:</strong>
              </h2>
              <p>tagexpress.Ecuador@gmail.com</p>
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
                    style={{border:"0"}}
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
        <ListGroup>
          <ListGroupItem color="success">
            <ListGroupItemHeading>
            <strong>¿CUAL ES EL VALOR DEL DISPOSITIVO?</strong>
            </ListGroupItemHeading>
            <ListGroupItemText className="txtFAQ">
              El valor del dispositivo es e 7$ incluido el iva.
            </ListGroupItemText>
          </ListGroupItem>

          <ListGroupItem color="warning">
            <ListGroupItemHeading>
            <strong>¿EL VALOR DEL DISPOSITIVO INCLUYE RECARGA? </strong>
            </ListGroupItemHeading>
            <ListGroupItemText className="txtFAQ">
              No, las regacargas se deben realizar aparte. El valor de los 7$ es solo por el dispositivo.
            </ListGroupItemText>
          </ListGroupItem>

          <ListGroupItem active>
            <ListGroupItemHeading>
             <strong>¿POR CUALES PEAJES PUEDO CIRCULAR CON ESTE DISPOSITIVO?</strong>
            </ListGroupItemHeading>
            <ListGroupItemText className="txtFAQ">
              Puede usarlo para todos los peajes a nivel nacionl siempre y cuando el mismo esté
              homologado en las distintas concesiones viales.
            </ListGroupItemText>
          </ListGroupItem>

          <ListGroupItem color="info">
            <ListGroupItemHeading>
              <strong>¿COMO HOMOLOGO UN DISPOSITIVO?</strong> 
            </ListGroupItemHeading>
            <ListGroupItemText className="txtFAQ">
              Debe acercarce una solo vez a las oficinas de las concesiones donde decea homologar y ahí
              solicitar homologación del dispositivo.
            </ListGroupItemText>
          </ListGroupItem>
        </ListGroup>
      </section>
    </Container>
  );
};

export default ContainerComponent;
