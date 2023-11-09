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


function Home() {
  const [activeComponent, setActiveComponent] = useState(null); // se agregó estado para controlar el componente activo
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); //estado para controlar la Sidebar



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
  };

  const handleNavBarRestaurantesClick = () => {
    //manejador de evento para la seccion "Restaurantes"
    setActiveComponent("Restaurantes");
  };

  const handleNavBarPaseadoresClick = () => {
    //manejador de evento para la seccion "Paseadores"
    setActiveComponent("Paseadores");
  };

  const handleNavBarVeterinariasClick = () => {
    //manejador de evento para la seccion "Veterinarias"
    setActiveComponent("Veterinarias");
  };

  const handleNavBarActividadesClick = () => {
    //manejador de evento para la seccion "Actividades"
    setActiveComponent("Actividades");
  };

  const handleNavBarAerolineasClick = () => {
    //manejador de evento para la seccion "Aerolineas"
    setActiveComponent("Aerolineas");
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
              <div className="greeting" style={{ fontSize: "12px", marginTop: "-15px", marginBottom: "11px" }}>
                <span>¡Hola, {username}!</span>
                 <span style={{ marginLeft: "5px", marginRight: "5px" }}>||</span>
                  <span
                    style={{ cursor: "pointer", textDecoration: "underline" }}
                    onClick={handleLogout}
                  >
                Cerrar sesión
              </span>
              </div>
              <div className="button-container2">
                 <div className="button-row">
              <button
                className="btn btn-outline-primary"
                type="button"
                onClick={handleRegistroMascotaClick}
              >
                Registra a tu mascota
                </button>
                </div>
                </div>
            </>
          ) : (
            <>
              <button
                className="btn btn-outline-primary"
                type="button"
                onClick={handleLoginClick}
              >
                Crear cuenta
              </button>
              <button
                className="btn btn-outline-primary"
                type="button"
                onClick={handleAccessClick}
              >
                Iniciar Sesión
              </button>
            </>
          )}
        </div>
      </header>
      {isSidebarOpen && <Sidebar onClose={() => setIsSidebarOpen(false)} onSidebarSectionClick={handleSidebarSectionClick} />}


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

      {activeComponent === "Hoteles" && <Tarjetero servicioElejido={"Hotel"} />}

      {activeComponent === "Aerolineas" && (
        <Tarjetero servicioElejido={"Aerolinea"} />
      )}

      {activeComponent === "Restaurantes" && (
        <Tarjetero servicioElejido={"Restaurante"} />
      )}

      {activeComponent === "Paseadores" && (
        <Tarjetero servicioElejido={"Paseador"} />
      )}

      {activeComponent === "Veterinarias" && (
        <Tarjetero servicioElejido={"Veterinaria"} />
      )}

      {activeComponent === "Actividades" && (
        <Tarjetero servicioElejido={"Actividad"} />
      )}

      {/* {activeComponent === 'BlogActivo' && (
        <BlogContainer />
      )} */}

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
