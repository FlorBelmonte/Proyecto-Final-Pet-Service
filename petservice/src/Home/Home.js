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
import Tarjetero from '../tarjetero/Tarjetero';
import BlogContainer from '../Blog/BlogContainer';


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

  const handleNavbarHotelesClick= ()=>{  //manejador de evento para la seccion "Hoteles"
    setActiveComponent('Hoteles');
  }

  const handleNavBarRestaurantesClick=()=>{ //manejador de evento para la seccion "Restaurantes"
    setActiveComponent('Restaurantes');
  }

  const handleNavBarPaseadoresClick=()=>{ //manejador de evento para la seccion "Paseadores"
    setActiveComponent('Paseadores');
  }

  const handleNavBarVeterinariasClick=()=>{ //manejador de evento para la seccion "Veterinarias"
    setActiveComponent('Veterinarias');
  }

  const handleNavBarActividadesClick=()=>{ //manejador de evento para la seccion "Actividades"
    setActiveComponent('Actividades');
  }

  const handleNavBarAerolineasClick=()=>{ //manejador de evento para la seccion "Aerolineas"
    setActiveComponent('Aerolineas');
  }

  const handleNavBarBlogClick=()=>{ //manejador de evento para la seccion "Blog"
    setActiveComponent('BlogActivo');
  }

  return (
    <div>
      <header>
        <img src={logo} alt="Logo" width="170" height="170" style={{ marginRight: 'auto' }} />
        <Navbar onSearchClick={handleNavbarSearchClick} onHotelesClick={handleNavbarHotelesClick}
                onAerolineasClick={handleNavBarAerolineasClick} onPaseadoresClick={handleNavBarPaseadoresClick}
                onRestaurantesClick={handleNavBarRestaurantesClick} onVeterinariasClick={handleNavBarVeterinariasClick} 
                onActividadesClick={handleNavBarActividadesClick} onBlogClick={handleNavBarBlogClick}/>
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

       {activeComponent === 'Hoteles' && (
        <Tarjetero servicioElejido={'Hotel'}/>
      )}

        {activeComponent === 'Aerolineas' && (
        <Tarjetero servicioElejido={'Aerolinea'}/>
      )}

      {activeComponent === 'Restaurantes' && (
        <Tarjetero servicioElejido={'Restaurante'}/>
      )}

      {activeComponent === 'Paseadores' && (
        <Tarjetero servicioElejido={'Paseador'}/>
      )}

      {activeComponent === 'Veterinarias' && (
        <Tarjetero servicioElejido={'Veterinaria'}/>
      )}

      {activeComponent === 'Actividades' && (
        <Tarjetero servicioElejido={'Actividad'}/>
      )}

      {activeComponent === 'BlogActivo' && (
        <BlogContainer/>
      )}


      {(!activeComponent || activeComponent === 'Portada') && <Portada />}

      <Footer />
    </div>
  );
}

export default Home;
