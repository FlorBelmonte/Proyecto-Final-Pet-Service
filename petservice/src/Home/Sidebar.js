import React from 'react';
import "./Home.css";
import 'animate.css';
import logo2 from "../assets/logo2.png";

function Sidebar({ onClose, onSidebarSectionClick }) {
   const handleSectionClick = (section) => {
    onSidebarSectionClick(section);
    onClose(); 
  };
  return (
    <div className="sidebar animate__animated animate__fadeInLeft" style={{ position: 'fixed', zIndex: 1000 }}>
    <div style={{ marginTop: "-40px", marginBottom: "15px"}}>
          <img
            src={logo2}
            alt="Logo"
            width="90"
            height="90"
            style={{ marginRight: "auto" }}
          />
      </div>
      <a href="#" onClick={() => handleSectionClick('Hoteles')}>Hoteles</a>
      <a href="#" onClick={() => handleSectionClick('Aerolíneas')}>Aerolíneas</a>
      <a href="#" onClick={() => handleSectionClick('Paseadores')}>Paseadores</a>
      <a href="#" onClick={() => handleSectionClick('Restaurantes')}>Restaurantes</a>
      <a href="#" onClick={() => handleSectionClick('Veterinarias')}>Veterinarias</a>
      <a href="#" onClick={() => handleSectionClick('Actividades')}>Actividades</a>
      <a href="#" onClick={() => handleSectionClick('Búsquedas')}>Búsquedas</a>
      <button  className="btn btn-outline-primary" onClick={onClose}>Cerrar</button>
    </div>
  );
}

export default Sidebar;

