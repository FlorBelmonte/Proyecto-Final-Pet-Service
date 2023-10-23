import React, { useState } from "react";
import { Button, Form } from 'react-bootstrap';
import "./LoginFormulario.css";

function RegistroMascota({ onClose, onSubmit }) {
    
    const [nombreMascota, setNombreMascota] = useState('');
    const [especieMascota, setEspecieMascota] = useState('');
    const [imagenMascota, setImagenMascota] = useState(null);
    const [aceptaTerminos, setAceptaTerminos] = useState(false);
    const [errors, setErrors] = useState({});
    const [mostrarErrorExcepcion, setMostrarErrorExcepcion] = useState(false);
  
    const handleSubmit = (e) => {
      setMostrarErrorExcepcion(false);
      if (validateForm()) {
        const data = {
          nombreMascota,
          especieMascota,
          imagenMascota,
          libretaSanitaria
        };
        
        // Realiza la solicitud al servidor
        fetch('http://localhost:3000/mascota/', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
        })
        .then(response => {
          console.log(response)
          if (response.ok) {
            alert("Se envió correctamente el formulario")
            //Limpia los campos después del envío

            setNombreMascota('');
            setEspecieMascota('');
            setLibretaSanitaria('');
            setImagenMascota('');
            onClose();
            onSubmit({ username: email });
          } else {
            setMostrarErrorExcepcion(true);
            throw new Error('Error al enviar el formulario');
          }
        })
        .catch(error => {
          setMostrarErrorExcepcion(true);
          console.error(error);
        });
      }
    };
  
    const validateForm = () => {
      let formIsValid = true;
      const errors = {};
  
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

          <Form.Group controlId="imagenMascota">
            <Form.Label>Foto de la mascota:</Form.Label>
            <Form.Control
              type="file"
              onChange={(e) => setImagenMascota(e.target.files[0])}
            />
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
          
          <div>
            {mostrarErrorExcepcion && <div>Ocurrió un error, intente más tarde.</div>}
          </div>
  
          <Button onClick={handleSubmit} type="button" className="btn btn-primary rounded-lg me-2 estilo-adicional-boton">Enviar</Button>
        </Form>
      </div>
    );
  }
  
  export default LoginFormulario;