import React from "react";
import "./hero.style.css";

const HeroComponent = () => {
  return (
    <div className="hero-image">
      <div className="hero-text">
        <h1 style={{fontSize:"50px"}}>I am John Doe</h1>
        <p>And I'm a Photographer</p>
        <button>Hire me</button>
      </div>
    </div>
  );
};

export default HeroComponent;
