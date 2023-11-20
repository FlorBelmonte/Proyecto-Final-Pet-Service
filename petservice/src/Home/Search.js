import React, { useState } from 'react';
import { Dropdown, ButtonGroup, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

import { useContext } from 'react'; 
import { ProvinciaContext } from "../context/ProvinciaContext"; // se usa para poder elejir la provincia y usarla en otro contexto

function Search() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedService, setSelectedService] = useState('');
  const [showDropdown, setShowDropdown] = useState(false);

  const { filtraProvincia, setFiltraProvincia } = useContext(ProvinciaContext);// se usa el provincia context

  const servicios = ['Hotel', 'Restaurante', 'Paseador', 'Aerolínea', 'Veterinaria', 'Actividad'];

  const provinciasArgentinas = [
    'CABA', 'Buenos Aires', 'Catamarca', 'Chaco', 'Chubut', 'Córdoba', 'Corrientes', 'Entre Ríos',
    'Formosa', 'Jujuy', 'La Pampa', 'La Rioja', 'Mendoza', 'Misiones', 'Neuquén', 'Río Negro', 'Salta',
    'San Juan', 'San Luis', 'Santa Cruz', 'Santa Fe', 'Santiago del Estero', 'Tierra del Fuego', 'Tucumán',
  ];


  
  const handleProvinceClick = (provincia) => {
    setSearchTerm(provincia);
    setShowDropdown(false);
    setFiltraProvincia(provincia)  //ofrece el valor de la provincia elejida para poder usarlo como filtro en Tarjetero
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

  

