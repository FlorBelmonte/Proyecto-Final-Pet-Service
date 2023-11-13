import React, { useState} from 'react';
import "./Home.css";
import 'animate.css';
import logo2 from "../assets/logo2.png";

function Sidebar({ onClose, onSidebarSectionClick }) {
  const [showProvinces, setShowProvinces] = useState(false);
  const [selectedProvince, setSelectedProvince] = useState(null);
  
   const handleSectionClick = (section) => {
    onSidebarSectionClick(section);
    onClose(); 
  };

  const handleUbicacionClick = () => {
    setShowProvinces(!showProvinces);
  };
  const handleProvinceSelect = (province) => {
    setSelectedProvince(province);
  };

const provincias = [
  'CABA', 'Buenos Aires', 'Catamarca', 'Chaco', 'Chubut', 'Córdoba', 'Corrientes', 'Entre Ríos',
  'Formosa', 'Jujuy', 'La Pampa', 'La Rioja', 'Mendoza', 'Misiones', 'Neuquén', 'Río Negro', 'Salta',
  'San Juan', 'San Luis', 'Santa Cruz', 'Santa Fe', 'Santiago del Estero', 'Tierra del Fuego', 'Tucumán',
];



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
      <a href="#" onClick={handleUbicacionClick}>Seleccionar Ubicación</a>
      {showProvinces && (
        <select
          className="province-dropdown"
          value={selectedProvince}
          onChange={(e) => handleProvinceSelect(e.target.value)}>
           {provincias.map((province, index) => (
            <option key={index} value={province}>{province}</option>
          ))}
          <option value="" disabled>Seleccione una provincia</option>

        </select>
      )}
      
      <button className="btn btn-outline-primary" onClick={onClose}>Cerrar</button>
    </div>
  );
}

export default Sidebar;

