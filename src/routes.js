import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./Components/Layout/Pages/Login/Login";
import Register from "./Components/Layout/Pages/Register/Register";
import Nav from "./Components/Layout/Nav/Nav.component";
import ContainerComponent from "./Components/Layout/Pages/Container/Container.component";
const Routes = () => {
  return (
    <Router>
      <Nav />
      <Switch>
      <Route path="/shellshock_layout" exact component={ContainerComponent} />
        <Route path="/login" exact component={Login} />
        <Route path="/register" exact component={Register} />
       
      </Switch>
    </Router>
  );
};

export default Routes;
