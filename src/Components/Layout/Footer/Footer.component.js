import React from "react";
import "./footer.style.css";

const FooterComponent = () => {
  return (
    // Footer
    <footer className="footer-distributed">
      <div className="footer-left">
        <img
          src=""
          alt="logo Barriio lindo"
        />
        <h3>
          TAG<span>EXPRESS</span>
        </h3>
      </div>
      <div className="footer-center">
        <div style={{padding:"5px"}}>
          <i className="fa fa-map-marker"></i>
          <p>
            Av. Joaquín Orrantia 124 y Av. Leopoldo Benítez, Edif. Trade
            Building. Piso 3, Oficina 316.
          </p>
          <div style={{padding:"5px"}}>
            <i className="fa fa-phone"></i>
            <p>0981218994</p>
          </div>
          <div style={{padding:"5px"}}>
            <i className="fa fa-envelope"></i>
            <p>
              <a href="mailto:support@eduonix.com">
                ceo@barriolindo.com.ec
              </a>
            </p>
          </div>
        </div>
      </div>
      <div className="footer-right">
        <p className="footer-company-about">
          © 2019 Barrio lindo. Todos los derechos reservados
        </p>
      </div>
    </footer>
  );
};

export default FooterComponent;
