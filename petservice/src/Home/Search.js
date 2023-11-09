import React, { useState } from 'react';
import { Dropdown, ButtonGroup, Button } from 'react-bootstrap';

function Search() {
  const [searchTerm, setSearchTerm] = useState('');
  const [showDropdown, setShowDropdown] = useState(false);

  const provinciasArgentinas = [
    'CABA', 'Buenos Aires', 'Catamarca', 'Chaco', 'Chubut', 'Córdoba', 'Corrientes', 'Entre Ríos',
    'Formosa', 'Jujuy', 'La Pampa', 'La Rioja', 'Mendoza', 'Misiones', 'Neuquén', 'Río Negro', 'Salta',
    'San Juan', 'San Luis', 'Santa Cruz', 'Santa Fe', 'Santiago del Estero', 'Tierra del Fuego', 'Tucumán',
  ];

  const handleProvinceClick = (provincia) => {
    setSearchTerm(provincia);
    setShowDropdown(false);
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

  

