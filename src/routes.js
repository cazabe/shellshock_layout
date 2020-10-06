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
      <Route path="/" exact component={ContainerComponent} />
        <Route path="/login" exact component={Login} />
        <Route path="/register" exact component={Register} />
        <Route path="/nosotros" exact component={Nosotros} />
      </Switch>
    </Router>
  );
};

export default Routes;
