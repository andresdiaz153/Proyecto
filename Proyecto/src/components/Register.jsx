import React from 'react'
import imgregistro from '../assets/registro.jpeg'
import'../components/Register.css'


const Register = ({ onToggleForm }) => {
  return (
    <div className='container'>
        <div className="containerLogin">
            <div className="container-img">
                <img src={imgregistro} alt="" className='tamaño-imagen'></img>
            </div>
            <div className="container-datos">
                <div className="padre">
                    <div className="card card-body shadow">
                        <form>
                            <h2 className="login-title">Registro</h2>
                            <h6>Nombres</h6>
                            <input type="text" placeholder='Ingresar los nombres' className='ingresoNombre' />
                            <h6>Apellidos</h6>
                            <input type="text" placeholder='Ingresar los apellidos ' className='ingresoApelli' />
                            <h6>Teléfono</h6>
                            <input type="text" placeholder='Ingresar número teléfono ' className='ingresoTelefono' />
                            <h6>Email</h6>
                            <input type="email" placeholder='Ingresar correo ' className='ingresoemail' />
                            <h6>contraseña</h6>
                            <input type="password" placeholder='Ingresar contraseña ' className='ingresocontra' />
                            <h6>Confirmar contraseña</h6>
                            <input type="password" placeholder='Confirmar contraseña ' className='confirmarcontra' />
                            <button className='botoA' onClick={onToggleForm}>Atras</button> {/* Agregar evento onClick para volver al Login */}
                            <button className='boto' onClick={() => handleRegister()}>Create Account</button>
                        </form>
                    </div>
                </div>
            </div>
        </div> 
    </div>
  )
}

export default Register




