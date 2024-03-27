import React, { useState } from 'react';
import Login from '../src/components/Login';
import Register from './components/Register';
import OlvidoContraseña from './components/OlvidoContraseña';
import home from './components/Home';

function App() {
  const [showLogin, setShowLogin] = useState(true);
  const [showRegister, setShowRegister] = useState(false);
  const [showForgotPassword, setShowForgotPassword] = useState(false);

  const handleToggleForm = (formName) => {
    if (formName === 'login') {
      setShowLogin(true);
      setShowRegister(false);
      setShowForgotPassword(false);
    } else if (formName === 'register') {
      setShowLogin(false);
      setShowRegister(true);
      setShowForgotPassword(false);
    } else if (formName === 'forgotPassword') {
      setShowLogin(false);
      setShowRegister(false);
      setShowForgotPassword(true);
    }
  };

  return (
    <div>
      {showLogin && <Login onToggleForm={() => handleToggleForm('register')} onForgotPassword={() => handleToggleForm('forgotPassword')} />}
      {showRegister && <Register onToggleForm={() => handleToggleForm('login')} />}
      {showForgotPassword && <OlvidoContraseña onToggleForm={() => handleToggleForm('login')} />}
    </div>
  );
}

export default App;


