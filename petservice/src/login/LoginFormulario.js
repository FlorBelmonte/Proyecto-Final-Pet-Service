import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { Eye, EyeSlash } from "react-bootstrap-icons";

import "./LoginFormulario.css";

function LoginFormulario({ onClose, onSubmit }) {
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [tipoUsuario, setTipoUsuario] = useState(1);
  const [aceptaTerminos, setAceptaTerminos] = useState(false);
  const [errors, setErrors] = useState({});
  const [mostrarErrorExcepcion, setMostrarErrorExcepcion] = useState(false);

  const handleSubmit = (e) => {
    setMostrarErrorExcepcion(false);
    if (validateForm()) {
      const data = {
        nombre: nombre,
        apellido: apellido,
        correo: email,
        password: password,
        tipo: tipoUsuario,
      };

      // Realiza la solicitud al servidor
      fetch("http://localhost:3000/usuario/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((response) => {
          console.log(response);
          if (response.ok) {
            alert("Se envió correctamente el formulario");
            //Limpia los campos después del envío
            setNombre("");
            setApellido("");
            setEmail("");
            setPassword("");
            setTipoUsuario("");
            onClose();
            // onSubmit({ username: email });
          } else {
            setMostrarErrorExcepcion(true);
            throw new Error("Error al enviar el formulario");
          }
        })
        .catch((error) => {
          setMostrarErrorExcepcion(true);
          console.error(error);
        });
    }
  };

  const validateForm = () => {
    let formIsValid = true;
    const errors = {};

    if (!nombre) {
      errors.nombre = "El nombre es requerido";
      formIsValid = false;
    }

    if (!apellido) {
      errors.apellido = "El apellido es requerido";
      formIsValid = false;
    }

    if (!email) {
      errors.email = "El email es requerido";
      formIsValid = false;
    } else if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
      errors.email = "El email es inválido";
      formIsValid = false;
    }

    if (password.trim() === "") {
      errors.password = "Debe ingresar una contraseña";
      formIsValid = false;
    } else if (password.length < 6) {
      errors.password = "La contraseña debe tener al menos 6 caracteres";
      formIsValid = false;
    } else if (!/\d/.test(password) || !/[a-zA-Z]/.test(password)) {
      errors.password = "La contraseña debe contener letras y números";
      formIsValid = false;
    } else if (password !== confirmPassword) {
      errors.confirmPassword =
        "Las contraseñas no coinciden. Por favor, inténtalo de nuevo.";
      formIsValid = false;
    }

    if (!aceptaTerminos) {
      errors.aceptaTerminos = "Debes aceptar los términos y condiciones";
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
          {errors.nombre && (
            <Form.Text className="text-danger">{errors.nombre}</Form.Text>
          )}
        </Form.Group>

        <Form.Group controlId="apellido">
          <Form.Label>Apellido:</Form.Label>
          <Form.Control
            type="text"
            value={apellido}
            onChange={(e) => setApellido(e.target.value)}
            required
          />
          {errors.apellido && (
            <Form.Text className="text-danger">{errors.apellido}</Form.Text>
          )}
        </Form.Group>

        <Form.Group controlId="email">
          <Form.Label>Email:</Form.Label>
          <Form.Control
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          {errors.email && (
            <Form.Text className="text-danger">{errors.email}</Form.Text>
          )}
        </Form.Group>

        <Form.Group controlId="password">
          <Form.Label>Password:</Form.Label>
          <div className="password-input-container">
            <div className="password-input-wrapper">
              <Form.Control
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <Button
              variant="outline-secondary"
              onClick={() => setShowPassword(!showPassword)}
              className="password-toggle-btn"
            >
              {showPassword ? <EyeSlash /> : <Eye />}
            </Button>
          </div>
          {errors.password && (
            <Form.Text className="text-danger">{errors.password}</Form.Text>
          )}
        </Form.Group>

        <Form.Group controlId="confirmPassword">
          <Form.Label>Confirmar Password:</Form.Label>
          <Form.Control
            type={showPassword ? "text" : "password"}
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
          {errors.confirmPassword && (
            <Form.Text className="text-danger">
              {errors.confirmPassword}
            </Form.Text>
          )}
        </Form.Group>

        <Form.Group controlId="aceptaTerminos">
          <Form.Check
            type="checkbox"
            label="Acepto términos y condiciones"
            checked={aceptaTerminos}
            onChange={(e) => setAceptaTerminos(e.target.checked)}
            isInvalid={!!errors.aceptaTerminos}
          />
          {errors.aceptaTerminos && (
            <Form.Text className="text-danger">
              {errors.aceptaTerminos}
            </Form.Text>
          )}
        </Form.Group>

        <div>
          {mostrarErrorExcepcion && (
            <div>Ocurrió un error, intente más tarde.</div>
          )}
        </div>

        <Button
          type="button"
          onClick={handleSubmit}
          className="btn btn-primary rounded-lg me-2 estilo-adicional-boton"
        >
          Enviar
        </Button>
      </Form>
    </div>
  );
}

export default LoginFormulario;
