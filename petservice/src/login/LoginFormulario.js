import React, { useState } from "react";
import { Button } from 'react-bootstrap';
import "./LoginFormulario.css";

function LoginFormulario({ onClose, onSubmit }) {
  
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [nombreMascota, setNombreMascota] = useState('');
  const [especieMascota, setEspecieMascota] = useState('');
  const [libretaSanitaria, setLibretaSanitaria] = useState('');
  const [aceptaTerminos, setAceptaTerminos] = useState(false);
  const [errors, setErrors] = useState({});

  
  const handleSubmit = (e) => {
    
    if (validateForm()) {
      const data = {
        nombre,
        apellido,
        email,
        password,
        nombreMascota,
        especieMascota,
        libretaSanitaria
      };

      // Realiza la solicitud al servidor
      fetch('http//:localhost:3000/...', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })
        .then(response => {
          if (1==1){
          //if (response.ok) {
            
            alert("Se envio correctamente el formulario")
            //Limpia los campos después del envío
            setNombre('');
            setApellido('');
            setEmail('');
            setPassword ('');
            setNombreMascota('');
            setEspecieMascota('');
            setLibretaSanitaria('');
            onClose();
            onSubmit({ username:nombre });
          } else {
            alert("Ocurrio un error al enviar el formulario")
            
            throw new Error('Error al enviar el formulario');
          }
        })
        .catch(error => {
          console.error(error);
        });
    }
  };

  const validateForm = () => {
    let formIsValid = true;
    const errors = {};

    if (!nombre) {
      errors.nombre = 'El nombre es requerido';
      formIsValid = false;
    }

    if (!apellido) {
      errors.apellido = 'El apellido es requerido';
      formIsValid = false;
    }

    if (!email) {
      errors.email = 'El email es requerido';
      formIsValid = false;
    } else if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
      errors.email = 'El email es inválido';
      formIsValid = false;
    }
    
    
    if (password.trim() === '') {
      errors.password = 'Debe ingresar una contraseña';
      formIsValid = false;
    } else if (password.length < 6) {
      errors.password = 'La contraseña debe tener al menos 6 caracteres';
      formIsValid = false;
    }else if (!/\d/.test(password) || !/[a-zA-Z]/.test(password)) {
      errors.password = 'La contraseña debe contener letras y números';
      formIsValid = false;
    }

    if (!nombreMascota) {
      errors.nombreMascota = 'El nombre de la mascota es requerido';
      formIsValid = false;
    }

    if (!especieMascota) {
      errors.especieMascota = 'La especie de la mascota es requerida';
      formIsValid = false;
    }

    if (!libretaSanitaria) {
      errors.libretaSanitaria = 'La libreta sanitaria es requerida';
      formIsValid = false;
    }

    if (!aceptaTerminos) {
      errors.aceptaTerminos = 'Debes aceptar los términos y condiciones';
      formIsValid = false;
    }

    setErrors(errors);
    return formIsValid;
  };

  return (
    <div className="contenedor">
      <form action="" className="formulario" >

        <label htmlFor="nombre">Nombre:</label>
        <input 
          type="text" 
          id="nombre" 
          name="nombre" 
          value={nombre} 
          onChange={(e) => setNombre(e.target.value)}
          required
        />
        {errors.nombre && <span>{errors.nombre}</span>}

        <label htmlFor="apellido">Apellido:</label>
        <input type="text" 
         id="apellido" 
         name="apellido"  
         value={apellido} 
         onChange={(e) => setApellido(e.target.value)}
         required
        />
        {errors.apellido && <span>{errors.apellido}</span>}

        <label htmlFor="email">Email:</label>
        <input 
          type="email" 
          id="email" 
          name="email" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        {errors.email && <span>{errors.email}</span>}

        <label htmlFor="password">Password:</label>
        <input 
          type="password" 
          id="password" 
          name="password" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        {errors.password && <span>{errors.password}</span>}

        <label htmlFor="nombreMascota">Nombre de la mascota:</label>
        <input 
          type="text" 
          id="nombreMascota" 
          name="nombreMascota" 
          value={nombreMascota} 
          onChange={(e) => setNombreMascota(e.target.value)}
          required
        />
        {errors.nombreMascota && <span>{errors.nombreMascota}</span>}

        <label htmlFor="especieMascota">Especie de la mascota:</label>
        <input 
          type="text" 
          id="especieMascota" 
          name="especieMascota" 
          value={especieMascota} 
          onChange={(e) => setEspecieMascota(e.target.value)}
          required
        />
        {errors.especieMascota && <span>{errors.especieMascota}</span>}

        <label htmlFor="libretaSanitaria">Libreta sanitaria:</label>
        <input 
          type="text" 
          id="libretaSanitaria" 
          name="libretaSanitaria" 
          value={libretaSanitaria} 
          onChange={(e) => setLibretaSanitaria(e.target.value)}
          required
        />
        {errors.libretaSanitaria && <span>{errors.libretaSanitaria}</span>}

        <label htmlFor="aceptaTerminos">Acepto términos y condiciones:</label>
        <input
          type="checkbox"
          checked={aceptaTerminos}
          onChange={(e) => setAceptaTerminos(e.target.checked)}
        />
        {errors.aceptaTerminos && <span>{errors.aceptaTerminos}</span>}


        <Button onClick={handleSubmit}   type="button"  className="btn btn-primary rounded-lg me-2 estilo-adicional-boton">Enviar</Button>
      </form>
    </div>
  );
}

export default LoginFormulario;


