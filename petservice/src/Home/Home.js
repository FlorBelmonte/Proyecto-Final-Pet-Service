import React, { useState } from 'react';
import Navbar from './Navbar';
import './Home.css';
import logo from '../assets/logo.png';
import Portada from './Portada';
import Footer from './Footer';
import LoginFormulario from '../login/LoginFormulario'; 

function Home() {
  const [showLoginForm, setShowLoginForm] = useState(false); 

  const handleLoginClick = () => {
    setShowLoginForm(true);
  };

  return (
    <div>
      <header>
        <img src={logo} alt="Logo" width="170" height="170" style={{ marginRight: 'auto' }} />

        <Navbar />
        <div className="login-link">
          <button className="btn btn-outline-primary me-2" type="button" onClick={handleLoginClick}>
            Iniciar sesión
          </button>
        </div>
      </header>
      {showLoginForm && <LoginFormulario />}
      <Portada />
      <Footer />

    
    </div>
  );
}

export default Home;
