import React from 'react';
import "./OlvidoContra.css";

const OlvidoContraseña = ({ onToggleForm }) => {
  return (
    <div className="contain">
      <h2>Ingrese el correo con el que se registró</h2>
      <input type="text" placeholder='Ingresar email' className='ingresoEmail' />
      <div className="botones">
        <h4><button onClick={onToggleForm}>Atras</button></h4> {/* Llama a la función onToggleForm para volver al Login */}
        <h4><button>Enviar link</button></h4>
      </div>
    </div>
  );
}

export default OlvidoContraseña;
