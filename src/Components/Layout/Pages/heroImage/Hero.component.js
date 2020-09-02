import React from "react";
import "./hero.style.css";

const HeroComponent = () => {
  return (
    <div className="hero-image">
      <div className="hero-text">
        <h1 className="hero_title">BIENVENIDO</h1>
        <p>ESTAMOS PARA SERVIRLE</p>
        {/* <button>Hire me</button> */}
      </div>
    </div>
  );
};

export default HeroComponent;
