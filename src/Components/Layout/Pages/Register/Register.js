import React from 'react';
import loginImg from "../../../../Assets/loginImg.jpg";

const Register = ()=>{
    return(
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
          <button type="submit">Ingresar</button>
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
    )
}

export default Register;