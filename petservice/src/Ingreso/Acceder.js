import React, { useState } from "react";
import { Button } from "react-bootstrap";
import './Acceder.css'

function Acceder({ onLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onLogin(email, password); //se llama a la funcion de inicio de sesion 
  };

  return (
    <div className="acceder-container">
    <form onSubmit={handleSubmit} className="acceso">
      <div className="form-group">
        <label htmlFor="email">Email:</label>
        <input type="email" className="form-control" id="email" name="email" value={email} onChange={handleEmailChange} />
      </div>
      <div className="form-group">
        <label htmlFor="password">Contraseña:</label>
        <input type="password" className="form-control" id="password" name="password" value={password} onChange={handlePasswordChange} />
      </div>
      <Button type="submit" variant="primary">
        Ingresar
      </Button>
    </form>
    </div>
  );
}

export default Acceder;



