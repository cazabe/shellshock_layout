import React from 'react';
import Nav from './Components/Layout/Nav/Nav.component';
import HeroComponent from './Components/Layout/Pages/heroImage/Hero.component';
import ContainerComponent from './Components/Layout/Pages/Container/Container.component';
import './App.css';

function App() {
  return (
    <div>
      <Nav/>
      <HeroComponent/>
      <ContainerComponent/>
    </div>
  );
}

export default App;
