import React,{useState} from "react";
import logoTaxExpress from "../../../Assets/logo-tag-express.png";
import loginIcon from "../../../Assets/login.png";
import "./nav.style.css";
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
  } from 'reactstrap';

const NavComponent = ()=>{
    
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

return(
    <div>
      <Navbar className="navTagexpress" color="light" light expand="md">
        <NavbarBrand href="/"><img  className="logoNav" src={logoTaxExpress} alt="logo"/></NavbarBrand>
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
              <NavLink href="#login"><img className="loginIcon" src={loginIcon}/><strong>Abrir cuenta</strong></NavLink>
          </NavItem>
          <NavItem className="loginNavItem">
              <NavLink href="#login"><img className="loginIcon" src={loginIcon}/><strong>Acceso clientes</strong></NavLink>
          </NavItem>
        </Collapse>
      </Navbar>
    </div>
)
}

export default NavComponent;