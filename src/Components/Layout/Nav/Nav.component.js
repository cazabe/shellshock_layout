import React, { useState } from "react";
import logoTaxExpress from "../../../Assets/logo-tag-express.png";
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
        <Link to="/shellshock_layout/">
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
            <Link to="/shellshock_layout/nosotros">
            <NavLink>Conoce TagExpress</NavLink>
            </Link>
            </NavItem>
          </Nav>
          <NavItem className="loginNavItem mr-3">
            <Link to="/shellshock_layout/register">
              <div className="btn btn-primary">
                {/* <img className="loginIcon" src={loginIcon} /> */}
                <strong>Abrir cuenta</strong>
              </div>
            </Link>
          </NavItem>
          <NavItem className="loginNavItem">
            <Link to="/shellshock_layout/login">
              <div className="btn btn-success">
                {/* <img className="loginIcon" src={loginIcon} /> */}
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
