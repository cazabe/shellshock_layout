import React from "react";
import { Link} from "react-router-dom";
import logoTaxExpress from "../../../../Assets/logo-sin-fondo-tag-express.png";
import {
  Container,
  Card,
  CardHeader,
  CardFooter,
  CardBody,
  CardTitle,
  CardText,
} from "reactstrap";

const FormResponse = () => {
  return (
    <div>
      <Container>
      <Card>
        <CardHeader><img className="centerImgTag" src={logoTaxExpress} alt="logo" /></CardHeader>
        <CardBody>
          <CardTitle tag="h5">Tu formulario ha sido registardo de manera exitosa</CardTitle>
          <CardText>Recuerda que la activación toma de 24 a 48 horas. No olvides que para poder pasar por los peajes 
           debes recragar saldo en tu dispositivo TAG el cual es independiente por concesion. Si deseas registrar otro
           vehículo da click en el boton que dice abrir cuenta</CardText>
           <Link to="/formtags">
                <div className="btn btn-primary">
                  {/* <img className="loginIcon" src={loginIcon} /> */}
                   {/* to="/shellshock_layout/register" */}
                  <strong>Abrir cuenta</strong>
                </div>
              </Link>
        </CardBody>
        <CardFooter></CardFooter>
      </Card>
      </Container>
    </div>
  );
};

export default FormResponse;
