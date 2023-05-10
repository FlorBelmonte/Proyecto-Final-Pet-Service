import React from 'react';
import Navbar from './Navbar';
import './Home.css'
import logo from '../assets/logo.png'
import Portada from './Portada';
import Footer from './Footer';
// import Tarjetero from '../tarjetero/Tarjetero';

function Home() {
  return (
    <div>
      <header>
        <img src={logo} alt="Logo" width="170" height="170" style={{ marginRight: 'auto' }} />
        
       <Navbar />
      <div className="login-link">
       <button className="btn btn-outline-primary me-2" type="button"> Iniciar sesión</button>
      </div>
    </header>
      <Portada/>
      <Footer/>
{/* <Tarjetero/> */}
    </div>
  );
}

export default Home;
