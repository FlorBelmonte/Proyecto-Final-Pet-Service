import React, { useState } from "react";

function LoginFormulario() {
  const [formData, setFormData] = useState({
    nombre: "",
    apellido: "",
    email: "",
    nombreMascota: "",
    especieMascota: "",
    libretaSanitaria: "",
    submitted: false
  });

  function handleInputChange (event){
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  function handleSubmit (event){
    event.preventDefault();
    if (validacionForm()) {
      // iria el fetch para enviar la data al servidor
      console.log(formData);
      setFormData({
        nombre: "",
        apellido: "",
        email: "",
        nombreMascota: "",
        especieMascota: "",
        libretaSanitaria: "",
        submitted: true
      });
    }
  };

  function validacionForm (){
    // aca iria la validacion del los campos del formulario
    return true;
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="nombre">Nombre:</label>
      <input type="text" id="nombre" name="nombre" value={formData.nombre} onChange={handleInputChange} />

      <label htmlFor="apellido">Apellido:</label>
      <input type="text" id="apellido" name="apellido" value={formData.apellido} onChange={handleInputChange} />

      <label htmlFor="email">Email:</label>
      <input type="email" id="email" name="email" value={formData.email} onChange={handleInputChange} />

      <label htmlFor="nombreMascota">Nombre de la mascota:</label>
      <input type="text" id="nombreMascota" name="nombreMascota" value={formData.nombreMascota} onChange={handleInputChange} />

      <label htmlFor="especieMascota">Especie de la mascota:</label>
      <input type="text" id="especieMascota" name="especieMascota" value={formData.especieMascota} onChange={handleInputChange} />

      <label htmlFor="libretaSanitaria">Libreta sanitaria:</label>
      <input type="text" id="libretaSanitaria" name="libretaSanitaria" value={formData.libretaSanitaria} onChange={handleInputChange} />

      <button type="submit">Enviar</button>
    </form>
  );
};

export default LoginFormulario;
