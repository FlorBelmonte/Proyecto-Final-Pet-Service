import React from 'react'
import "./tarjeta.css"
import imagen from '../assets/logo.png'
import puntaje from '../assets/PetservicePata.png'

const Tarjeta = () => {
  return (
    <div className='tarjeta'>
      <img className='imgTarjeta' src={imagen} alt='imagen'></img>
      <div className='data'>
        <div><h1>Nombre</h1></div>
        <div className='puntuacion'> 
          <img className='imgPuntaje' src={puntaje} alt='puntaje'></img>
          <img className='imgPuntaje' src={puntaje} alt='puntaje'></img>
          <img className='imgPuntaje' src={puntaje} alt='puntaje'></img>
          <img className='imgPuntaje' src={puntaje} alt='puntaje'></img>
          <img className='imgPuntaje' src={puntaje} alt='puntaje'></img>
        </div>
        <div className='precio' >$ 150</div>
      </div>
      <div className='info'>informacion detallada del servicio solicitado. </div>
    </div>
  )
}

export default Tarjeta