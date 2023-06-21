import React, { useState } from "react";
import { Button } from "react-bootstrap";
import './Acceder.css'

function Acceder({ onLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const validateAcceder = () => {
    let accederIsValid = true;
    const errors = {};

    if (email.trim() === '') {
      errors.email = 'Debe ingresar un correo electrónico';
      accederIsValid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = 'Debe ingresar un correo electrónico válido';
      accederIsValid = false;
    }

    if (password.trim() === '') {
      errors.password = 'Debe ingresar una contraseña';
      accederIsValid = false;
    }else if (password.length < 6) {
      errors.password = 'La contraseña debe tener al menos 6 caracteres';
      accederIsValid= false;
    }else if (!/\d/.test(password) || !/[a-zA-Z]/.test(password)) {
      errors.password = 'La contraseña debe contener letras y números';
      accederIsValid = false;
    }

    setErrors(errors);
    return accederIsValid;
  };

  const handleSubmit = async(event) => {
    if (validateAcceder()) {
      try {
        const response = await fetch('http//:localhost:3000/...', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            email,
            password,
          }),
        });

        // if (response.ok) {
          if (1==1){
          const data = await response.json();
          console.log('Respuesta:', data);
          onLogin(email, password); //se llama a la funcion de inicio de sesion 
        } else {
          console.error('Error en la solicitud:', response.status);
        }
      } catch (error) {
        alert("ocurrio un error")
        console.error('Error:', error);
      }

      // Restablecer los campos a vacio
      setEmail('');
      setPassword('');
      setErrors({});
    }
  };

   
  return (
    <div className="acceder-container">
    <form onSubmit={handleSubmit} className="acceso">
      
      <div className="form-group">
        <label htmlFor="email">Email:</label>
        <input type="email" 
        className="form-control" 
        id="email" 
        name="email" 
        value={email} 
        onChange={handleEmailChange} 
        required
        />
        {errors.email && <span>{errors.email}</span>}

      </div>

      <div className="form-group">
        <label htmlFor="password">Contraseña:</label>
        <input type="password" 
        className="form-control" 
        id="password" 
        name="password" 
        value={password} 
        onChange={handlePasswordChange} 
        required
        />
        {errors.password && <span>{errors.password}</span>}
      </div>

      <Button type="button" onClick={handleSubmit} variant="primary">
        Ingresar
      </Button>
    </form>
    </div>
  );
}

export default Acceder;



