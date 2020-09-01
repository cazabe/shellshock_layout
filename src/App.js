import React from 'react';
import Nav from './Components/Layout/Nav/Nav.component';
import HeroComponent from './Components/Layout/Pages/heroImage/Hero.component';
import ContainerComponent from './Components/Layout/Pages/Container/Container.component';
import FooterComponent from './Components/Layout/Footer/Footer.component'
import './App.css';

function App() {
  return (
    <div>
      <Nav/>
      <HeroComponent/>
      <ContainerComponent/>
      <FooterComponent/>
    </div>
  );
}

export default App;
