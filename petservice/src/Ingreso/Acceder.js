import React, { useState } from "react";
import { Button } from "react-bootstrap";
import './Acceder.css'

function Acceder({ onLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [mostrarDivError, setMostrarDivError] = useState(false);
  const [mostrarErrorExcepcion, setMostrarErrorExcepcion] = useState(false);


  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const validateAcceder = () => { 
    let accederIsValid = true;
    const errors = {};

    if (email.trim() === '') { //validacion del email 
      errors.email = 'Debe ingresar un correo electrónico';
      accederIsValid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = 'Debe ingresar un correo electrónico válido';
      accederIsValid = false;
    }

    if (password.trim() === '') { //validacion de la contraseña
      errors.password = 'Debe ingresar una contraseña';
      accederIsValid = false;
    } else if (password.length < 6) {
      errors.password = 'La contraseña debe tener al menos 6 caracteres';
      accederIsValid = false;
    } else if (!/\d/.test(password) || !/[a-zA-Z]/.test(password)) {
      errors.password = 'La contraseña debe contener letras y números';
      accederIsValid = false;
    }

    setErrors(errors);
    return accederIsValid;
  };

  const handleSubmit = async () => {
    
    if (validateAcceder()) {
      setMostrarDivError(false);
      setMostrarErrorExcepcion(false);
      try { // Envío de la solicitud de inicio de sesión
        const response = await fetch('http://localhost:3000/usuario/login/', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            email,
            password,
          }),
        });
        if (response.ok) {
          const data = await response.json();
          console.log('Respuesta:', data);
          if(data.Estado===200 && data.Existe){
            onLogin({ username: email }); //se llama a la funcion de inicio de sesion
            // Restablecer los campos a vacio
            setEmail('');
            setPassword('');
            setErrors({});

          }else if(data.Estado==200 && !data.Existe){
            setMostrarDivError(true);
          }
        } else {
          setMostrarErrorExcepcion(true)
          console.error('Error en la solicitud:', response.status);
        }
      } catch (error) {
        setMostrarErrorExcepcion(true)
        console.error('Error:', error);
      }
    }
  };

  return (
    <div className="acceder-container">
      <form className="acceso">

        <div className={`form-group ${errors.email ? 'has-error' : ''}`}>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            className={`form-control ${errors.email ? 'is-invalid' : ''}`}
            id="email"
            name="email"
            value={email}
            onChange={handleEmailChange}
            required
          />
          {errors.email && <div className="invalid-feedback">{errors.email}</div>}
        </div>

        <div className={`form-group ${errors.password ? 'has-error' : ''}`}>
          <label htmlFor="password">Contraseña:</label>
          <input
            type="password"
            className={`form-control ${errors.password ? 'is-invalid' : ''}`}
            id="password"
            name="password"
            value={password}
            onChange={handlePasswordChange}
            required
          />
          {errors.password && <div className="invalid-feedback">{errors.password}</div>}
        </div>
        <div>
        {mostrarErrorExcepcion && <div>Ocurrió un error, intente mas tarde.</div>}
        </div>
        <div>
        {mostrarDivError && <div>Usuario o contraseña inválido.</div>}
        </div>
        <Button type="button" onClick={handleSubmit} variant="primary">
          Ingresar
        </Button>
      </form>
    </div>
  );
}

export default Acceder;



