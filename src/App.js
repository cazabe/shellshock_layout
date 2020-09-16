import React from 'react';
import ContainerComponent from './Components/Layout/Pages/Container/Container.component';
import Router from './routes';
import Footer from './Components/Layout/Footer/Footer.component'
import './App.css';

function App() {
  return (
    <div>
      <Router/>
      <Footer/>
    </div>
  );
}

export default App;
