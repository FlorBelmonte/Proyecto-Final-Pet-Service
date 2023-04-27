import React from 'react'
import "./tarjetaBlog.css"
import imagenMascota from "../imagenes/perro1.jpg"

const TarjetaBlog = () => {
  return (
    <div className='tarjetaBlog'>
        <img className='imgTarjetaBlog' src={imagenMascota} alt= 'perro'></img>
        <div className='descripcionTarjetaBlog'><p>Descripcion de la tarjetaBlog...</p></div>
        <button className='btnEnviarTarjetaBlog'>Enviar</button>
    </div>
  )
}

export default TarjetaBlog