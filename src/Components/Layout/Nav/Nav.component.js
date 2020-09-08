import React, { useState } from "react";
import logoTaxExpress from "../../../Assets/logo-tag-express.png";
import loginIcon from "../../../Assets/login.png";
import { Link } from "react-router-dom";
import "./nav.style.css";
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
              <NavLink href="#nosotros">Nosotros</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#rfid">Tag rfid</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#preguntas">Preguntas frecuentes</NavLink>
            </NavItem>
          </Nav>
          <NavItem className="loginNavItem">
            <Link to="/register">
              <NavLink>
                <img className="loginIcon" src={loginIcon} />
                <strong className="loginNavItem">Abrir cuenta</strong>
              </NavLink>
            </Link>
          </NavItem>
          <NavItem className="loginNavItem">
            <Link to="/login">
              <NavLink>
                <img className="loginIcon" src={loginIcon} />
                <strong className="loginNavItem">Acceso clientes</strong>
              </NavLink>
            </Link>
          </NavItem>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default NavComponent;
