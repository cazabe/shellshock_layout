import React,{useState} from "react";
import logoTaxExpress from "../../../Assets/logo-tag-express.png";
import "./nav.style.css";
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    NavbarText,
  } from 'reactstrap';

const NavComponent = ()=>{
    
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

return(
    <div>
      <Navbar color="light" light expand="md">
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
          <NavbarText>LOGIN</NavbarText>
          <div className="demo">
          </div>
        </Collapse>
      </Navbar>
    </div>
)
}

export default NavComponent;