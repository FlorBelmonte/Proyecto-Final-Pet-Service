import React, { useState } from "react";
import Navbar from "./Navbar";
import NavBar2 from "./Navbar2";
import "./Home.css";
import logo from "../assets/logo.png";
import Portada from "./Portada";
import Footer from "./Footer";
import LoginFormulario from "../login/LoginFormulario";
import RegistroMascota from "../registroMascota/registroMascota";
import Acceder from "../Ingreso/Acceder";
import icono from "../assets/acceso.png";
import FormPerdidosEncontrados from "../FormPerdidosEncontrados/FormPerdidosEncontrados.js";
import Tarjetero from "../tarjetero/Tarjetero";
// import BlogContainer from '../Blog/BlogContainer';
import Sidebar from "./Sidebar.js";
import UserProfile from "./UserProfile.js";

function Home() {
  const [activeComponent, setActiveComponent] = useState(null); // se agregó estado para controlar el componente activo
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const [username, setUsername] = useState("");
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); //estado para controlar la Sidebar


  const handleGreetingClick = () => {
    setActiveComponent("UserProfile");
  };

 const handleSidebarSectionClick = (section) => { //se ejecuta cuando se clickea la Sidebar   
   switch (section) {
      case 'Hoteles':
        setActiveComponent('Hoteles');
        break;
      case 'Aerolíneas':
        setActiveComponent('Aerolineas');
        break;
      case 'Paseadores':
        setActiveComponent('Paseadores');
       break;
           case 'Restaurantes':
        setActiveComponent('Restaurantes');
       break;
           case 'Veterinarias':
        setActiveComponent('Veterinarias');
       break;
           case 'Actividades':
        setActiveComponent('Actividades');
       break;
           case 'Búsquedas':
        setActiveComponent('FormPerdidosEncontrados');
       break;
     
     default:
        setActiveComponent(null);
    }
    setIsSidebarOpen(false); 
  };

  const handleHeaderToggleClick = () => {
  //manejador de evento para el menú hamburguesa
  setIsSidebarOpen(!isSidebarOpen);
  };
  
  const handleLoginClick = () => {
    //manejador de evento para el boton "Crear Cuenta"
    setActiveComponent("LoginFormulario");
  };
  const handleRegistroMascotaClick = () => {
    //manejador de evento para el boton "Registra a tu mascota"
    setActiveComponent("RegistroMascota");
  };

  const handleCloseLoginForm = () => {
    // manejador de evento para cerrar el componente "LoginFormulario"
    setActiveComponent(null);
  };
  const handleCloseRegistroMascotaForm = () => {
    // manejador de evento para cerrar el componente "RegistroMascota"
    setActiveComponent(null);
  };

  const handleLoginFormSubmit = ({ username }) => {
    // Manejador de evento para enviar el LoginFormulario
    setIsLoggedIn(true);
    setUsername(username);
    setActiveComponent(null); // establece el componente activo como null y muestra la Portada
  };
  const handleRegistroMascotaFormSubmit = ({ username }) => {
    // Manejador de evento para enviar el RegistroMascota
    setIsLoggedIn(true);
    setUsername(username);
    setActiveComponent(null); // establece el componente activo como null y muestra la Portada
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUsername("");
    setActiveComponent(null);
  };

  const handleAccessClick = () => {
    // Manejador de evento para el botón "Iniciar Sesión"
    setActiveComponent("Acceder");
  };

  const handleNavbarSearchClick = () => {
    //manejador de evento para la sección "Búsqueda"
    setActiveComponent("FormPerdidosEncontrados");
  };

  const handleFormSubmit = () => {
    setActiveComponent(null);
  };

  const handleNavbarHotelesClick = () => {
    //manejador de evento para la seccion "Hoteles"
    setActiveComponent("Hoteles");
    setSelectedCategory("1");
  };

  const handleNavBarRestaurantesClick = () => {
    //manejador de evento para la seccion "Restaurantes"
    setActiveComponent("Restaurantes");
    setSelectedCategory("2");
  };

  const handleNavBarPaseadoresClick = () => {
    //manejador de evento para la seccion "Paseadores"
    setActiveComponent("Paseadores");
    setSelectedCategory("4");
  };

  const handleNavBarVeterinariasClick = () => {
    //manejador de evento para la seccion "Veterinarias"
    setActiveComponent("Veterinarias");
    setSelectedCategory("5");
  };

  const handleNavBarActividadesClick = () => {
    //manejador de evento para la seccion "Actividades"
    setActiveComponent("Actividades");
    setSelectedCategory("6");
  };

  const handleNavBarAerolineasClick = () => {
    //manejador de evento para la seccion "Aerolineas"
    setActiveComponent("Aerolineas");
    setSelectedCategory("3");
  };

  // const handleNavBarBlogClick=()=>{ //manejador de evento para la seccion "Blog"
  //   setActiveComponent('BlogActivo');
  // };

  const handleNavbarMasClick = () => {
    setActiveComponent("Mas");
  };

  return (
    <div>
      <header className="header-box">
        <a href="/">
          <img
            src={logo}
            alt="Logo"
            width="90"
            height="90"
            style={{ marginRight: "auto" }}
          />
        </a>
        <Navbar
          onSearchClick={handleNavbarSearchClick}
          onHotelesClick={handleNavbarHotelesClick}
          onAerolineasClick={handleNavBarAerolineasClick}
          onPaseadoresClick={handleNavBarPaseadoresClick}
          onRestaurantesClick={handleNavBarRestaurantesClick}
          onVeterinariasClick={handleNavBarVeterinariasClick}
          onActividadesClick={handleNavBarActividadesClick}
          // onBlogClick={handleNavBarBlogClick}
          onMasClick={handleNavbarMasClick}
          onHeaderToggleClick={handleHeaderToggleClick}
        />
        <div className="login-link">
          {isLoggedIn ? (
            <>

              <div className="greeting" style={{ fontSize: "15px" }}>
                <span
                style={{ cursor: "pointer", textDecoration: "underline" }}
                onClick={handleGreetingClick}
                >¡Hola, {username}!</span>
                 <span style={{ marginLeft: "5px", marginRight: "5px" }}>||</span>
                  <span
                    style={{ cursor: "pointer", textDecoration: "underline" }}
                    onClick={handleLogout}
                  >
                Cerrar sesión
              </span>
              </div>
              {/* <div className="button-container2">
                 <div className="button-row">
              <button
                className="btn btn-outline-primary"
                type="button"
                onClick={handleRegistroMascotaClick}
              >
                Registra a tu mascota
                </button>
                </div>
                </div> */}
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
      {isSidebarOpen && <Sidebar onClose={() => setIsSidebarOpen(false)} onSidebarSectionClick={handleSidebarSectionClick} />}
      
      {activeComponent === "UserProfile" && (
        <UserProfile username={username} onClose={() => setActiveComponent(null)}
        onRegistroMascotaClick={handleRegistroMascotaClick}/>
      )}

      {activeComponent === "LoginFormulario" && (
        <LoginFormulario
          onClose={handleCloseLoginForm}
          onSubmit={handleLoginFormSubmit}
        />
      )}

      {activeComponent === "RegistroMascota" && (
        <RegistroMascota
          onClose={handleCloseRegistroMascotaForm}
          onSubmit={handleRegistroMascotaFormSubmit}
        />
      )}

      {activeComponent === "Acceder" && (
        <Acceder
          onClose={() => setActiveComponent(null)}
          onLogin={handleLoginFormSubmit}
        />
      )}

      {activeComponent === "FormPerdidosEncontrados" && (
        <FormPerdidosEncontrados onSubmit={handleFormSubmit} />
      )}

      {activeComponent === "Hoteles" && (
        <Tarjetero servicioElejido={{ servicioElejido: "1" }} />
      )}

      {activeComponent === "Aerolineas" && (
        <Tarjetero servicioElejido={{ servicioElejido: "3" }} />
      )}

      {activeComponent === "Restaurantes" && (
        <Tarjetero servicioElejido={{ servicioElejido: "2" }} />
      )}

      {activeComponent === "Paseadores" && (
        <Tarjetero servicioElejido={{ servicioElejido: "4" }} />
      )}

      {activeComponent === "Veterinarias" && (
        <Tarjetero servicioElejido={{ servicioElejido: "5" }} />
      )}

      {activeComponent === "Actividades" && (
        <Tarjetero servicioElejido={{ servicioElejido: "6" }} />
      )}

      {/*  { activeComponent === 'BlogActivo' && (
        <BlogContainer />
      ) } */}

      {(!activeComponent ||
        (activeComponent === "Mas" && activeComponent === "NavBar2")) && (
        <Portada />
      )}

      {activeComponent === "Mas" && (
        <>
          <NavBar2 />
          <Portada />
        </>
      )}

      <Footer />
    </div>
  );
}

export default Home;
