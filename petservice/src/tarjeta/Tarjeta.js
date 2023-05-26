import React from 'react'
import { useState } from 'react'
import "./tarjeta.css"
import puntaje from '../assets/PetservicePata.png'
import PuntuarTarjeta from './puntuarTarjeta/PuntuarTarjeta';


const Tarjeta = ({id, nombre, imagen, puntuacion, precio, info, votos}) => {

 const [modal, setModal]=useState('tarjeta') 

 const mostrar=()=>{
    setModal('abrirModal')
  }
  
 const ocultar=(e)=>{
  e.target.parentNode.parentNode.parentNode.className=setModal('tarjeta')
 
 } 

    return (
      <div className={modal} key={id}onClick={mostrar}>
        <img className='imgTarjeta' src={imagen} alt='imagen'></img>
        <div className='data'>
          <div><h4>{nombre}</h4></div>
          <PuntuarTarjeta puntuacion={puntuacion} votos={votos} /* className='puntuacion' *//> 
          <div className='precio' >$ {precio}</div>
          {/* <div>votos: {votos}</div> */}
          <div className='menuVotar'>
          <button className='cancelar' onClick={ocultar}>X</button>
          <input type='range'min="1" max="5" name='valoracion'></input>
          <button className='votar'>Votar</button>
        </div>
          </div>
        <div className='info'>{info}</div>
        
       

      </div>

    )
  };


 

export default Tarjeta