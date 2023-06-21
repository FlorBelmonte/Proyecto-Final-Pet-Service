import React, { useState } from "react";
import { Button, Form } from 'react-bootstrap';
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
          if (1 == 1) {
            //if (response.ok) {

            alert("Se envió correctamente el formulario")
            //Limpia los campos después del envío
            setNombre('');
            setApellido('');
            setEmail('');
            setPassword ('');
            setNombreMascota('');
            setEspecieMascota('');
            setLibretaSanitaria('');
            onClose();
            onSubmit({ username: nombre });
          } else {
            alert("Ocurrió un error al enviar el formulario")

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
      <Form className="formulario">

        <Form.Group controlId="nombre">
          <Form.Label>Nombre:</Form.Label>
          <Form.Control
            type="text"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            required
          />
          {errors.nombre && <Form.Text className="text-danger">{errors.nombre}</Form.Text>}
        </Form.Group>

        <Form.Group controlId="apellido">
          <Form.Label>Apellido:</Form.Label>
          <Form.Control
            type="text"
            value={apellido}
            onChange={(e) => setApellido(e.target.value)}
            required
          />
          {errors.apellido && <Form.Text className="text-danger">{errors.apellido}</Form.Text>}
        </Form.Group>

        <Form.Group controlId="email">
          <Form.Label>Email:</Form.Label>
          <Form.Control
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          {errors.email && <Form.Text className="text-danger">{errors.email}</Form.Text>}
        </Form.Group>

        <Form.Group controlId="password">
          <Form.Label>PASSWORD:</Form.Label>
          <Form.Control
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          {errors.password && <Form.Text className="text-danger">{errors.password}</Form.Text>}
        </Form.Group>
        

        <Form.Group controlId="nombreMascota">
          <Form.Label>Nombre de la mascota:</Form.Label>
          <Form.Control
            type="text"
            value={nombreMascota}
            onChange={(e) => setNombreMascota(e.target.value)}
            required
          />
          {errors.nombreMascota && <Form.Text className="text-danger">{errors.nombreMascota}</Form.Text>}
        </Form.Group>

        <Form.Group controlId="especieMascota">
          <Form.Label>Especie de la mascota:</Form.Label>
          <Form.Control
            type="text"
            value={especieMascota}
            onChange={(e) => setEspecieMascota(e.target.value)}
            required
          />
          {errors.especieMascota && <Form.Text className="text-danger">{errors.especieMascota}</Form.Text>}
        </Form.Group>

        <Form.Group controlId="libretaSanitaria">
          <Form.Label>Libreta sanitaria:</Form.Label>
          <Form.Control
            type="text"
            value={libretaSanitaria}
            onChange={(e) => setLibretaSanitaria(e.target.value)}
            required
          />
          {errors.libretaSanitaria && <Form.Text className="text-danger">{errors.libretaSanitaria}</Form.Text>}
        </Form.Group>

        <Form.Group controlId="aceptaTerminos">
          <Form.Check
            type="checkbox"
            label="Acepto términos y condiciones"
            checked={aceptaTerminos}
            onChange={(e) => setAceptaTerminos(e.target.checked)}
            isInvalid={!!errors.aceptaTerminos}
          />
          {errors.aceptaTerminos && <Form.Text className="text-danger">{errors.aceptaTerminos}</Form.Text>}
        </Form.Group>

        <Button onClick={handleSubmit} type="button" className="btn btn-primary rounded-lg me-2 estilo-adicional-boton">Enviar</Button>
      </Form>
    </div>
  );
}

export default LoginFormulario;