import React from "react";
import loginImg from "../../../../Assets/loginImg.jpg";
import './register.css';

const Register = () => {
  return (
    <div className="register-access">
      <form action="/action_page.php" method="post">
        <div className="imgcontainer">
          <img src={loginImg} alt="Avatar" className="avatar" />
        </div>

        <div className="container">
          <label>
            <b>Nombres</b>
          </label>
          <input
            type="text"
            placeholder="Ingrese sus nombres"
            name="uname"
            required
          />

          <label>
            <b>Apellidos</b>
          </label>
          <input
            type="text"
            placeholder="Ingrese sus apellidos"
            name="psw"
            required
          />

          <label>
            <b>correo</b>
          </label>
          <input
            type="text"
            placeholder="Ingrese su correo"
            name="psw"
            required
          />

          <label>
            <b>usuario</b>
          </label>
          <input
            type="text"
            placeholder="Ingrese el nombre de usuario"
            name="psw"
            required
          />

          <div>
            <button type="submit">Registrar</button>
            <button type="button" className="button-registrar">
              Cancelar
            </button>
          </div>
        </div>

        {/* <div className="container" style={{backgroundColor:"#f1f1f1"}}>
          
          <span className="psw">
            Olvido se <a href="#">contraseña?</a>
          </span>
        </div> */}
      </form>
    </div>
  );
};

export default Register;
