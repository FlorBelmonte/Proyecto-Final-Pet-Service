import React from 'react'
import Tarjeta from '../tarjeta/Tarjeta'
import "./tarjetero.css"
import TarjetaBlog from '../tarjetaBlog/TarjetaBlog'
import CrearTarjeta from '../tarjeta/crearTarjeta/CrearTarjeta'
import { useContext } from 'react'
import { ServiciosContext } from '../context/ServiciosContext'

const Tarjetero = () => {

  const contextServicios=useContext(ServiciosContext)
  console.log(contextServicios.servicios)
  const tarjetas=contextServicios.servicios.map((t)=>(
    <Tarjeta id={t.id} nombre={t.nombre} imagen={t.imagen} puntuacion={t.puntuacion} precio={t.precio} info={t.informacion} votos={t.votos} />
  ))
console.log(tarjetas)
  return (
    <div className='tarjetero'>
        <TarjetaBlog/>
        <CrearTarjeta/>
        {tarjetas}
    </div>
  )
}

export default Tarjetero