import React from "react";
import HeroImg from "../heroImage/Hero.component";
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
import quienesSomos from "../../../../Assets/quienesSomos.jpg";
import oficinaTag from "../../../../Assets/oficinaTag.jpeg";
import quality from "../../../../Assets/medal.png";
import block from "../../../../Assets/block.png";
import lock from "../../../../Assets/lock.png";
import rfid from "../../../../Assets/rfid.png"; 
import edif from "../../../../Assets/edidifico_consejo.jpg";

const ContainerComponent = () => {
  
  return (
    <>
    <HeroImg/>
    <Container>
      <h1 className="subtitle_section">NOSOTROS</h1>
      <Row md="12" className="brandImg" id="nosotros">
        <Col sm="6">
          <img className="quienesSomos" src={quienesSomos} alt="Suppliers"></img>
          <h5>QUIENES SOMOS</h5>
          <p className="serviceText">
          Somos una empresa preocupada en brindar un mejor servicio 
          a los usuarios que transitan por las vías con estaciones de peaje;  
          por esto hemos implementado diferentes puntos de venta en sitios estratégicos de tal manera que se facilite
           la adquisición y recarga de los tags; 
           además nos preocupamos de brindar el servicio con nuestros puntos móviles que nos permiten acercar a los sitios
           donde ustedes como usuarios nos necesitan.
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
          <img src={oficinaTag} alt="Suppliers"></img>
          <div>
          <h5>AUTOPISTA GENERAL RUMIÑAHUI</h5>
          </div>
          <p className="serviceText">
          Junto a las oficinas del peaje Autopista General Rumiñahui
          </p>
        </Col>
        <Col sm="4">
          <img src="data:image/jpeg;base64,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" alt="Suppliers"></img>
          <div>
          <h5>PEAJE INTERVALLES</h5>
          </div>
          <p className="serviceText">
          Av. Intervalles, Sangolquí, peaje intervalles
          </p>
        </Col>
        <Col sm="4">
          <img src={edif} alt="Suppliers"></img>
          <div className="h3Title">
          <h5>EDIFICIO CONCEJO PROVINCIAL</h5>
          </div>
          <p className="serviceText">
          Juan Larrea, Quito 170103
          </p>
        </Col>
      </Row>

      <div>
        <h1 className="subtitle_section">¿POR QUÉ PREFERIR Y ADQUIRIR TAGEXPRESS?</h1>
      </div>
      <Row md="12" className="brandImg" id="puntosVentas">
        <Col sm="3">
          <img src={quality} alt="Suppliers" className="iconsTagexpress"></img>
          <p className="serviceText">
           Nuestros dispositivod son de alta calidad y confiabilidad
          </p>
        </Col>
        <Col sm="3">
          <img src={block} alt="Suppliers" className="iconsTagexpress"></img>
          <p className="serviceText">
            Nuestros dispositivos no son clonables
          </p>
        </Col>
        <Col sm="3">
          <img src={lock} alt="Suppliers" className="iconsTagexpress"></img>
          <p className="serviceText">
          Nuestros dispositovos brindan seguridad tanto al usuario como a las estaciones de peaje por donde se transita
          </p>
        </Col>
        <Col sm="3">
          <img src={rfid} alt="Suppliers" className="iconsTagexpress"></img>
          <p className="serviceText">
          La potencia de la lectura de nuetsros dispositivos permite que sea detectado sin inconvenientes al cruzar el peaje evitando así multas
          </p>
        </Col>
      </Row>

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
              <p className="serviceText">Junto a las oficinas del peaje Autopista General Rumiñahui</p>
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
              <p className="serviceText">servicioalclientecalprandina@tagexpress.club</p>
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
          <ListGroupItem className="colorNumber1" >
            <ListGroupItemHeading>
            <strong>¿CUAL ES EL VALOR DEL DISPOSITIVO?</strong>
            </ListGroupItemHeading>
            <ListGroupItemText className="txtFAQ">
              El valor del dispositivo es e 7$ incluido el iva.
            </ListGroupItemText>
          </ListGroupItem>

          <ListGroupItem className="colorNumber2">
            <ListGroupItemHeading>
            <strong>¿EL VALOR DEL DISPOSITIVO INCLUYE RECARGA? </strong>
            </ListGroupItemHeading>
            <ListGroupItemText className="txtFAQ">
              No, las regacargas se deben realizar a parte. El valor de los 7$ es solo por el dispositivo.
            </ListGroupItemText>
          </ListGroupItem>

          <ListGroupItem className="colorNumber1" >
            <ListGroupItemHeading>
             <strong>¿POR CUALES PEAJES PUEDO CIRCULAR CON ESTE DISPOSITIVO?</strong>
            </ListGroupItemHeading>
            <ListGroupItemText className="txtFAQ">
              Puede usarlo para todos los peajes a nivel nacional siempre y cuando el mismo esté
              homologado en las distintas concesiones viales.
            </ListGroupItemText>
          </ListGroupItem>

          <ListGroupItem className="colorNumber2">
            <ListGroupItemHeading>
              <strong>¿COMO HOMOLOGO UN DISPOSITIVO?</strong> 
            </ListGroupItemHeading>
            <ListGroupItemText className="txtFAQ">
              Debe acercarse una solo vez a las oficinas de las concesiones donde desea homologar y ahí
              solicitar homologación del dispositivo.
            </ListGroupItemText>
          </ListGroupItem>
        </ListGroup>
      </section>
    </Container>
    </>
  );
};

export default ContainerComponent;
