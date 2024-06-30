import React, { useState } from 'react';
import { Dropdown, ButtonGroup, Button } from 'react-bootstrap';

import { useContext } from 'react'; 
import { ProvinciaContext } from "../context/ProvinciaContext"; // se usa para poder elejir la provincia y usarla en otro contexto


function Search() {
  const [searchTerm, setSearchTerm] = useState(null);
  const [showDropdown, setShowDropdown] = useState(false);
  /* const [filtrarProvincia, setFiltraProvincia] = useState(''); */
  
  const { filtraProvincia, setFiltraProvincia } = useContext(ProvinciaContext);


  const provinciasArgentinas = [
    'CABA', 'Buenos Aires', 'Catamarca', 'Chaco', 'Chubut', 'Córdoba', 'Corrientes', 'Entre Ríos',
    'Formosa', 'Jujuy', 'La Pampa', 'La Rioja', 'Mendoza', 'Misiones', 'Neuquén', 'Río Negro', 'Salta',
    'San Juan', 'San Luis', 'Santa Cruz', 'Santa Fe', 'Santiago del Estero', 'Tierra del Fuego', 'Tucumán',
  ];


  
  const handleProvinceClick = (provincia) => {
    setSearchTerm(provincia);
    setShowDropdown(false);
    setFiltraProvincia(provincia)  //ofrece el valor de la provincia elejida para poder usarlo como filtro en Tarjetero
    console.log(`valor de provincia en search ${provincia}`)
    console.log(`valor de filtrarProvincia en search ${filtraProvincia}`)
  };


  return (
    <Dropdown show={showDropdown} onToggle={(isOpen) => setShowDropdown(isOpen)} className="custom-dropdown">
      <Dropdown.Toggle variant="outline-primary">
        {searchTerm || 'seleccionar ubicación'}
      </Dropdown.Toggle>
      <Dropdown.Menu>
              {provinciasArgentinas.map((provincia) => (
                <Dropdown.Item key={provincia} onClick={() => handleProvinceClick(provincia)}>
                  {provincia}
                </Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>
  );
}

export default Search;

  

