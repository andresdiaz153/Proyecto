// Login.jsx
import React from 'react';
import imglogin from '../assets/login.jpeg';
import "../components/Login.css";

const Login = ({ onToggleForm, onForgotPassword }) => {
  return (
    <div className='container'>
      <div className="containerLogin">
        <div className="container-img">
          <img src={imglogin} alt="" className='tamaño-imagen'></img>
        </div>
        <div className="container-datos">
          <div className="padre">
            <div className="card card-body shadow">
              <form>
                <h2 className="login-title">Login</h2>
                <h6>Email</h6>
                <input type="text" placeholder='Ingresar email' className='ingresoEmail' />
                <h6>Password</h6>
                <input type="password" placeholder='Ingresar contraseña ' className='ingresoContra' />
                <button className='boto'>Iniciar sesión</button>
                <h4><button onClick={onToggleForm}>Do you not have an account? Sign up</button></h4>
                <h4><button onClick={onForgotPassword}>Forgot your password?</button></h4>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;

