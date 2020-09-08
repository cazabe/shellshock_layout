import React from 'react';
import ContainerComponent from './Components/Layout/Pages/Container/Container.component';
import Router from './routes';
import FooterComponent from './Components/Layout/Footer/Footer.component'
import './App.css';

function App() {
  return (
    <div>
      <Router/>
      <FooterComponent/>
    </div>
  );
}

export default App;
