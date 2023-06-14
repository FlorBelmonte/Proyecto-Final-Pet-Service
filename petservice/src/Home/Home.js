import React, { useState } from 'react';
import Navbar from './Navbar';
import './Home.css';
import logo from '../assets/logo.png';
import Portada from './Portada';
import Footer from './Footer';
import LoginFormulario from '../login/LoginFormulario';
import icono from '../assets/acceso.png'

function Home() {
  const [showLoginForm, setShowLoginForm] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');

  const handleLoginClick = () => {
    setShowLoginForm(true);
  };

  const handleCloseLoginForm = () => {
    setShowLoginForm(false);
  };

  const handleLoginFormSubmit = (username) => {
    setIsLoggedIn(true);
    setUsername(username)
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <div>
      <header>
        <img src={logo} alt="Logo" width="170" height="170" style={{ marginRight: 'auto' }} />

        <Navbar />
        <div className="login-link">
          {isLoggedIn ? (
            <>
             <div className="greeting">
                <img src={icono} alt="Acceso" className="acceso-img" />
                <span>¡Hola, {username}!</span>
              </div>
              <button className="btn btn-outline-primary" type="button" onClick={handleLogout}>
                Cerrar sesión
              </button>
            </>
          ) : (
            <button className="btn btn-outline-primary" type="button" onClick={handleLoginClick}>
              Iniciar sesión
            </button>
          )}
        </div>
      </header>
      {showLoginForm ? (
        <LoginFormulario onClose={handleCloseLoginForm} onSubmit={handleLoginFormSubmit} />
      ) : (
        <Portada />
      )}
      <Footer />
    </div>
  );
}

export default Home;