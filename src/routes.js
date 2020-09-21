import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./Components/Layout/Pages/Login/Login";
import Register from "./Components/Layout/Pages/Register/Register";
import Nav from "./Components/Layout/Nav/Nav.component";
import Nosotros from "./Components/Layout/Pages/Nosotros/Nosotros";
import ContainerComponent from "./Components/Layout/Pages/Container/Container.component";
const Routes = () => {
  return (
    <Router>
      <Nav />
      <Switch>
      <Route path="/shellshock_layout/" exact component={ContainerComponent} />
        <Route path="/shellshock_layout/login" exact component={Login} />
        <Route path="/shellshock_layout/register" exact component={Register} />
        <Route path="/shellshock_layout/nosotros" exact component={Nosotros} />
      </Switch>
    </Router>
  );
};

export default Routes;
