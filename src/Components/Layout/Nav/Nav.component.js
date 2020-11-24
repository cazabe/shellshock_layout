import React, { useState } from "react";
import logoTaxExpress from "../../../Assets/logo-sin-fondo-tag-express.png";
// import loginIcon from "../../../Assets/login.png";
import { Link } from "react-router-dom";
import "./nav.css";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";

const NavComponent = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar className="navTagexpress" color="light" light expand="md">
        
        <NavbarBrand>
        <Link to="/">
          <img className="logoNav" src={logoTaxExpress} alt="logo" />
          </Link>
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="#contacto">Contacto</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#puntosVentas">Puntos de ventas</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#preguntas">Preguntas frecuentes</NavLink>
            </NavItem>
            <NavItem>
            <Link to="/nosotros">
            <NavLink>Conoce TagExpress</NavLink>
            </Link>
            </NavItem>
          </Nav>
          <NavItem className="loginNavItem mr-3">

            <Link to="/formtags">
              <div className="btn btn-primary">
                {/* <img className="loginIcon" src={loginIcon} /> */}
                 {/* to="/shellshock_layout/register" */}
                <strong>Abrir cuenta</strong>
              </div>
            </Link>
          </NavItem>
          <NavItem className="loginNavItem">
            <Link>
              <div className="btn btn-success">
                {/* <img className="loginIcon" src={loginIcon} /> */}
                {/* to="/shellshock_layout/login" */}
                <strong>Acceso clientes</strong>
              </div>
            </Link>
          </NavItem>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default NavComponent;
