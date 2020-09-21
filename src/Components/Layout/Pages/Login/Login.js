import React from "react";
import loginImg from "../../../../Assets/loginImg.jpg";
import "./login.css";

const Login = () => {
  return (
    <div className="login-access">
      <form action="/action_page.php" method="post">
        <div className="imgcontainer">
          <img src={loginImg} alt="Avatar" className="avatar" />
        </div>

        <div className="container">
          <label>
            <b>Usuario / numero de cedula</b>
          </label>
          <input
            type="text"
            placeholder="Ingrese su usuario"
            name="uname"
            required
          />

          <label>
            <b>Contraseña</b>
          </label>
          <input
            type="password"
            placeholder="Ingrese su contraseña"
            name="psw"
            required
          />
            <div>
          <button type="submit" className="btn btn-primary">Ingresar</button>
          <button type="button" className="btn btn-success">
            Cancelar
          </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;
