import React, { useState, useEffect } from "react";
import "./FormPerdidosEncontrados.css";

// import PerdidosyEncontrados from "../PerdidosyEncontrados/PerdidosyEncontrados";

function FormPerdidosEncontrados({ onSubmit }) {
  const [nombre, setNombre] = useState("");
  const [tipo, setTipo] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [contacto, setContacto] = useState("");
  const [ubicacion, setUbicacion] = useState("");
  const [imagen, setImagen] = useState(null);
  const [idUsuario, setIdUsuario] = useState(null);
  const [usuarioLogueado, setUsuarioLogueado] = useState(false);
  const [token, setToken] = useState("");
  const [errors, setErrors] = useState({});

  useEffect(() => {
    const usuarioStorage = sessionStorage.getItem("usuarioLogueado");
    const usuario = usuarioStorage ? JSON.parse(usuarioStorage) : null;

    if (usuario) {
      const { token, idUsuario } = usuario;
      setUsuarioLogueado(true);
      setIdUsuario(idUsuario);
      setToken(token);
    } else {
      setUsuarioLogueado(false);
    }
  }, []);

  function handleNombreChange(e) {
    setNombre(e.target.value);
  }

  function handleTipoChange(e) {
    setTipo(e.target.value);
  }

  function handleDescripcionChange(e) {
    setDescripcion(e.target.value);
  }

  function handleContactoChange(e) {
    setContacto(e.target.value);
  }

  function handleUbicacionChange(e) {
    setUbicacion(e.target.value);
  }

  function handleImagenChange(e) {
    setImagen(e.target.value);
  }

  const validateForm = () => {
    setErrors({}); // Restablece el estado de los errores al inicio

    let formIsValid = true;
    const errors = {};

    if (!nombre) {
      errors.nombre = "El nombre es requerido";
      formIsValid = false;
    }

    if (!descripcion) {
      errors.descripcion = "La descripcion es requerida";
      formIsValid = false;
    }

    if (!contacto) {
      errors.contacto = "El contacto es requerido";
      formIsValid = false;
    }

    if (!ubicacion) {
      errors.ubicacion = "La ubicacion es requerida";
      formIsValid = false;
    }

    if (!imagen) {
      errors.imagen = "La imagen es requerida";
      formIsValid = false;
    }

    setErrors(errors);
    return formIsValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validar campos obligatorios
    if (!validateForm()) {
      alert(
        "Todos los campos son obligatorios. Por favor, completa la información."
      );
      return;
    }

    const formData = {
      nombre,
      tipo,
      descripcion,
      contacto,
      ubicacion,
      imagen,
      contactoUsuarioIdUsuario: idUsuario,
    };

    console.log(formData);

    try {
      const response = await fetch(
        "http://localhost:3000/perdidos-yencontrados",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: token,
          },
          body: JSON.stringify(formData),
        }
      );

      console.log(response);

      if (response.ok) {
        const data = await response.json();
        console.log("Respuesta:", data);
        alert("El formulario se envió correctamente");
        onSubmit();
      } else {
        alert("Error al enviar el formulario, verifica los datos nuevamente");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="nombre" className="form-label">
            Nombre de la Mascota:
          </label>
          <input
            type="text"
            id="nombre"
            name="nombre"
            value={nombre}
            onChange={handleNombreChange}
            className="form-control"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="tipo" className="form-label">
            Situacion:
          </label>
          <select
            id="tipo"
            name="tipo"
            value={tipo}
            onChange={handleTipoChange}
            className="form-control"
          >
            <option value="Perdido">Perdido</option>
            <option value="Encontrado">Encontrado</option>
          </select>
        </div>

        <div className="mb-3">
          <label htmlFor="descripcion" className="form-label">
            Descripción:
          </label>
          <input
            type="text"
            id="descripcion"
            value={descripcion}
            onChange={handleDescripcionChange}
            className="form-control"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="contacto" className="form-label">
            Contacto:
          </label>
          <input
            type="text"
            id="contacto"
            value={contacto}
            onChange={handleContactoChange}
            className="form-control"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="ubicacion" className="form-label">
            Ubicación:
          </label>
          <input
            type="text"
            id="ubicacion"
            value={ubicacion}
            onChange={handleUbicacionChange}
            className="form-control"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="imagen" className="form-label">
            Cargar imagen:
          </label>
          <input
            type="text"
            id="imagen"
            value={imagen}
            onChange={handleImagenChange}
            className="form-control"
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Enviar
        </button>
      </form>
    </div>
  );
}

export default FormPerdidosEncontrados;
