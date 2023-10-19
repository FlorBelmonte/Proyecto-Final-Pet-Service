import React, { useState } from 'react';
import { Dropdown, ButtonGroup, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

function Search() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedService, setSelectedService] = useState('');
  const [showDropdown, setShowDropdown] = useState(false);

  const servicios = ['Hotel', 'Restaurante', 'Paseador', 'Aerolínea', 'Veterinaria', 'Actividad'];

  const provinciasArgentinas = [
    'CABA', 'Buenos Aires', 'Catamarca', 'Chaco', 'Chubut', 'Córdoba', 'Corrientes', 'Entre Ríos',
    'Formosa', 'Jujuy', 'La Pampa', 'La Rioja', 'Mendoza', 'Misiones', 'Neuquén', 'Río Negro', 'Salta',
    'San Juan', 'San Luis', 'Santa Cruz', 'Santa Fe', 'Santiago del Estero', 'Tierra del Fuego', 'Tucumán',
  ];

  const handleProvinceClick = (provincia) => {
    setSearchTerm(provincia);
    setShowDropdown(false);
  };

  const handleServiceClick = (service) => {
    setSelectedService(service);
  };

  return (
    <Dropdown show={showDropdown} onToggle={(isOpen) => setShowDropdown(isOpen)} className="custom-dropdown">
      <Dropdown.Toggle variant="outline-primary">
        {searchTerm ? (
          <>
            <FontAwesomeIcon icon={faMagnifyingGlass} /> {searchTerm}
          </>
        ) : (
          <>
            <FontAwesomeIcon icon={faMagnifyingGlass} /> Seleccionar ubicación
          </>
        )}
      </Dropdown.Toggle>
      <Dropdown.Menu>
        <ButtonGroup className="d-flex">
          <Dropdown as={ButtonGroup}>
            <Button variant="outline-primary">Servicio</Button>
            <Dropdown.Toggle split variant="outline-primary" />
            <Dropdown.Menu>
              {servicios.map((servicio) => (
                <Dropdown.Item key={servicio} onClick={() => handleServiceClick(servicio)}>
                  {servicio}
                </Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>
          <Dropdown as={ButtonGroup}>
            <Button variant="outline-primary">Seleccionar provincia</Button>
            <Dropdown.Toggle split variant="outline-primary" />
            <Dropdown.Menu>
              {provinciasArgentinas.map((provincia) => (
                <Dropdown.Item key={provincia} onClick={() => handleProvinceClick(provincia)}>
                  {provincia}
                </Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>
        </ButtonGroup>
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default Search;

  

