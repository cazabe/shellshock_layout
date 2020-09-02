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
import MapImage from "../../../../Assets/maps_tag_express.png";

const ContainerComponent = () => {
  return (
    <Container>
      <h1>NOSOTROS</h1>
      <Row md="12" className="brandImg" id="nosotros">
        <Col sm="6">
          <img src={SupplierImage} alt="Suppliers"></img>
          <h2>Partners & Data Providers</h2>
          <p className="serviceText">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s,
          </p>
        </Col>
        <Col sm="6">
          <div>
            <h2>Partners & Data Providers</h2>
            <p className="serviceText">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s,
            </p>
          </div>
          <div>
            <h2>Partners & Data Providers</h2>
            <p className="serviceText">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s,
            </p>
          </div>
          <div>
            <h2>Partners & Data Providers</h2>
            <p className="serviceText">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s,
            </p>
          </div>
        </Col>
      </Row>
      <div>
        <h1>Nuestros puntos de ventas</h1>
      </div>
      <Row md="12" className="brandImg" id="puntosVentas">
        <Col sm="4">
          <img src={SupplierImage} alt="Suppliers"></img>
          <h2>Supplier</h2>
          <p className="serviceText">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s,
          </p>
        </Col>
        <Col sm="4">
          <img src={SupplierImage} alt="Suppliers"></img>
          <h2>Buyers</h2>
          <p className="serviceText">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s,
          </p>
        </Col>
        <Col sm="4">
          <img src={SupplierImage} alt="Suppliers"></img>
          <h2>Partners & Data Providers</h2>
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
        <h1>Contacto</h1>
        <Row md="12" className="brandImg">
          <Col sm="6">
            <div className="progress-bar-item">
              <h2>
                <strong>Dirección:</strong>
              </h2>
              <p>Oficinas peaje autopista general rumiñahui</p>
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
                  <img src={MapImage} alt="map"/>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </section>
      <section id="preguntas">
        <h1>PREGUNTAS FRECUENTES</h1>
        <ListGroup>
          <ListGroupItem color="success">
            <ListGroupItemHeading>¿CUAL ES EL VALOR DEL DISPOSITIVO?</ListGroupItemHeading>
            <ListGroupItemText>
              Donec id elit non mi porta gravida at eget metus. Maecenas sed
              diam eget risus varius blandit.
            </ListGroupItemText>
          </ListGroupItem>

          <ListGroupItem color="info">
            <ListGroupItemHeading>¿CUANTO TIEMPO DURA EL DISPOSITIVO?</ListGroupItemHeading>
            <ListGroupItemText>
              Donec id elit non mi porta gravida at eget metus. Maecenas sed
              diam eget risus varius blandit.
            </ListGroupItemText>
          </ListGroupItem>

          <ListGroupItem color="warning">
            <ListGroupItemHeading>¿EL VALOR DEL DISPOSITIVO INCLUYE RECARGA?</ListGroupItemHeading>
            <ListGroupItemText>
              Donec id elit non mi porta gravida at eget metus. Maecenas sed
              diam eget risus varius blandit.
            </ListGroupItemText>
          </ListGroupItem>

          <ListGroupItem active>
            <ListGroupItemHeading>¿POR CUALES PEAJES PUEDO CIRCULAR CON ESTE DISPOSITIVO?</ListGroupItemHeading>
            <ListGroupItemText>
              Donec id elit non mi porta gravida at eget metus. Maecenas sed
              diam eget risus varius blandit.
            </ListGroupItemText>
          </ListGroupItem>
        </ListGroup>
      </section>
    </Container>
  );
};

export default ContainerComponent;
