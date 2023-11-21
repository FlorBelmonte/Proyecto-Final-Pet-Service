import React, { useState } from "react";
import './FormPerdidosEncontrados.css'

import PerdidosyEncontrados from "../PerdidosyEncontrados/PerdidosyEncontrados";

function FormPerdidosEncontrados({onSubmit}) {
  const [nombre, setNombre] = useState("");
  const [tipo, setTipo] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [contacto, setContacto] = useState("");
  const [ubicacion, setUbicacion] = useState("");
  const [imagen, setImagen] = useState(null);
  const [usuario, setUsuario] = useState(1)

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
    setImagen(e.target.files[0]);
  }

  const handleSubmit = async (e) => {
    
    e.preventDefault();

    const formData = new FormData();

    formData.append("nombre", nombre);
    formData.append("tipo", tipo);
    formData.append("descripcion", descripcion);
    formData.append("contacto", contacto);
    formData.append("ubicacion", ubicacion);
    formData.append("imagen", imagen);
    formData.append("usuario", usuario);
    console.log(formData)
    onSubmit()
    console.log(formData)
    
    
    try {
      const response = await fetch('http://localhost:3000/perdidos-yencontrados', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData),
      });
      console.log(response)
      if (response.ok) {
        const data = await response.json();
        console.log('Respuesta:', data);
        
      }
    } catch (error) {
         console.error('Error:', error);
    }
    
    }

  return (
    <div className="container">
      <h2>Mascotas perdidas y encontradas</h2>
      <p>
        "Bienvenido al portal de mascotas perdidas y encontradas. Nuestro objetivo es ayudarte a encontrar a tu
        compañero peludo o a reunir a una mascota perdida con su dueño. Por favor, ayúdanos a brindar la información
        necesaria para que podamos difundir su búsqueda. ¡Juntos podemos encontrar a nuestras mascotas desaparecidas!"
      </p>
     
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="nombre" className="form-label">Nombre de la Mascota:</label>
          <input type="text" id="nombre" name="nombre" value={nombre} onChange={handleNombreChange} className="form-control" />
        </div>

        <div className="mb-3">
          <label htmlFor="tipo" className="form-label">Situacion:</label>
          <input type="text" id="tipo" name="tipo" value={tipo} onChange={handleTipoChange} className="form-control" />
        </div>

        <div className="mb-3">
          <label htmlFor="descripcion" className="form-label">Descripción:</label>
          <input type="text" id="descripcion" value={descripcion} onChange={handleDescripcionChange} className="form-control" />
        </div>

        <div className="mb-3">
          <label htmlFor="contacto" className="form-label">Contacto:</label>
          <input type="text" id="contacto" value={contacto} onChange={handleContactoChange} className="form-control" />
        </div>

        <div className="mb-3">
          <label htmlFor="ubicacion" className="form-label">Ubicación:</label>
          <input type="text" id="ubicacion" value={ubicacion} onChange={handleUbicacionChange} className="form-control" />
        </div>

        <div className="mb-3">
          <label htmlFor="imagen" className="form-label">Adjuntar imagen</label>
          <input type="file" id="imagen" accept="image/*" onChange={handleImagenChange} className="form-control" />
        </div>

        <button type="submit" className="btn btn-primary">Enviar</button>
      </form>
      <PerdidosyEncontrados/>
    </div>
  );
}

export default FormPerdidosEncontrados;
