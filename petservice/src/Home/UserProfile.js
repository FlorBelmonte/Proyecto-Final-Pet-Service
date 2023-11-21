import React, { useEffect, useState } from "react";
import "./Home.css";
import { Button } from 'react-bootstrap';

const UserProfile = ({ username, onClose , onRegistroMascotaClick }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className={`user-profile animate__animated ${isVisible ? "animate__fadeInLeft" : ""}`}>
      <h1>Mi cuenta de Pet Service</h1>
      <h3>¡Bienvenido, {username}!</h3>
      <div className="info-box">
        <label>Mis Datos:</label>
        <p>Información de datos</p>
      </div>
      <div className="info-box">
        <label>Mis Mascotas Registradas:</label>
        <p>Información de mascotas</p>
      </div>
       <Button className="btn btn-primary" onClick={onRegistroMascotaClick}>
        Registra a tu mascota
      </Button>
      <Button className="btn btn-primary" onClick={onClose}>
        Cerrar
      </Button>
    </div>
  );
};

export default UserProfile;


