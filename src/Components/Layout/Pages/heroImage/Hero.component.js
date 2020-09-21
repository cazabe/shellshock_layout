import React from "react";
import "./hero.style.css";

const HeroComponent = () => {
  return (
    <div className="hero-image">
      <div className="hero-text">
        <h1 className="hero_title">LA SOLUCIÓN PARA TODOS LOS PEAJES DEL <span>ECUADOR</span></h1>
        {/* <button>Hire me</button> */}
      </div>
    </div>
  );
};

export default HeroComponent;
