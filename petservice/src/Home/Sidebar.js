import React from 'react';
import "./Home.css";

function Sidebar({ onClose, onSectionClick }) {
   const handleSectionClick = (section) => {
    onSectionClick(section);
    onClose(); 
  };
  return (
   <div className="sidebar" style={{ position: 'fixed', zIndex: 1000 }}>
      <a href="#" onClick={() => handleSectionClick('Hoteles')}>Hoteles</a>
      <a href="#" onClick={() => handleSectionClick('Aerolíneas')}>Aerolíneas</a>
      <a href="#" onClick={() => handleSectionClick('Paseadores')}>Paseadores</a>
      <a href="#" onClick={() => handleSectionClick('Restaurantes')}>Restaurantes</a>
      <a href="#" onClick={() => handleSectionClick('Veterinarias')}>Veterinarias</a>
      <a href="#" onClick={() => handleSectionClick('Actividades')}>Actividades</a>
      <a href="#" onClick={() => handleSectionClick('Búsquedas')}>Búsquedas</a>
      <button onClick={onClose}>Cerrar Sidebar</button>
    </div>
  );
}

export default Sidebar;

