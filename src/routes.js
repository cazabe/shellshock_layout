import React from "react";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Login from "./Components/Layout/Pages/Login/Login";
import Register from "./Components/Layout/Pages/Register/Register";
import Nav from "./Components/Layout/Nav/Nav.component";
import Nosotros from "./Components/Layout/Pages/Nosotros/Nosotros";
import ContainerComponent from "./Components/Layout/Pages/Container/Container.component";
import FormTag from "./Components/Layout/Pages/form/Form.component";
import FormEmp from "./Components/Layout/Pages/form_emp/FormEmp"
import ClientDashboard from "./Components/Layout/Pages/client_dashboard/ClientDashboard";
import FormResponse from "./Components/Layout/Pages/formResponse/FormResponse";
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
        <Route path="/dashboard" exact component={ClientDashboard}/>
        <Route path="/response" exact component={FormResponse}/>
      </Switch>
    </Router>
  );
};

export default Routes;
