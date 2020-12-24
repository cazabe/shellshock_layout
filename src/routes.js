import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./Components/Layout/Pages/Login/Login";
import Register from "./Components/Layout/Pages/Register/Register";
import Nav from "./Components/Layout/Nav/Nav.component";
import Nosotros from "./Components/Layout/Pages/Nosotros/Nosotros";
import ContainerComponent from "./Components/Layout/Pages/Container/Container.component";
import FormTag from "./Components/Layout/Pages/form/Form.component";
import FormEmp from "./Components/Layout/Pages/form_emp/FormEmp"
const Routes = () => {
  return (
    <Router>
      <Nav />
      <Switch>
      <Route path="/" exact component={ContainerComponent} />
        <Route path="/login" exact component={Login} />
        <Route path="/register" exact component={Register} />
        <Route path="/nosotros" exact component={Nosotros} />
        <Route path="/formtags" exact component={FormTag} />
        <Route path="/formemp" exact component={FormEmp}/>
      </Switch>
    </Router>
  );
};

export default Routes;
