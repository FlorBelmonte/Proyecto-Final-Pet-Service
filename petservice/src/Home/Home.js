import React, { useState } from 'react';
import Navbar from './Navbar';
import './Home.css';
import logo from '../assets/logo.png';
import Portada from './Portada';
import Footer from './Footer';
import LoginFormulario from '../login/LoginFormulario';
import Acceder from '../Ingreso/Acceder';
import icono from '../assets/acceso.png';
import FormPerdidosEncontrados from '../FormPerdidosEncontrados/FormPerdidosEncontrados.js';

function Home() {
  const [activeComponent, setActiveComponent] = useState(null); // se agregó estado para controlar el componente activo
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');

  const handleLoginClick = () => { //manejador de evento para el boton "Crear Cuenta"
    setActiveComponent('LoginFormulario')
  };

  const handleCloseLoginForm = () => {  // manejador de evento para cerrar el componente "LoginFormulario"
    setActiveComponent(null);
  };

  const handleLoginFormSubmit = ({username}) => {   // Manejador de evento para enviar el LoginFormulario
    setIsLoggedIn(true);
    setUsername(username);
    setActiveComponent(null); //establece el componente activo como null y se muestra la Portada 
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUsername('');
  };

  const handleAccessClick = () => {  // Manejador de evento para el botón "Iniciar Sesión"
    setActiveComponent('Acceder');
  };

  const handleNavbarSearchClick = () => {   //manejador de evento para la sección "Búsqueda"
    setActiveComponent('FormPerdidosEncontrados');
  };

  const handleFormSubmit = () => {
    setActiveComponent(null);
  };

  return (
    <div>
      <header>
        <img src={logo} alt="Logo" width="170" height="170" style={{ marginRight: 'auto' }} />
        <Navbar onSearchClick={handleNavbarSearchClick} />
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
            <>
              <button className="btn btn-outline-primary" type="button" onClick={handleLoginClick}>
                Crear cuenta
              </button>
              <button className="btn btn-outline-primary" type="button" onClick={handleAccessClick}>
                Iniciar Sesión
              </button>
            </>
          )}
        </div>
      </header>

      {activeComponent === 'LoginFormulario' && (
        <LoginFormulario onClose={handleCloseLoginForm} onSubmit={handleLoginFormSubmit} />
      )}

      {activeComponent === 'Acceder' && (
        <Acceder onClose={() => setActiveComponent(null)} onLogin={handleLoginFormSubmit} />
      )}

      {activeComponent === 'FormPerdidosEncontrados' && (
        <FormPerdidosEncontrados onSubmit={handleFormSubmit} />
      )}

      {(!activeComponent || activeComponent === 'Portada') && <Portada />}

      <Footer />
    </div>
  );
}

export default Home;
