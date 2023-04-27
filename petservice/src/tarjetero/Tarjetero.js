import React from 'react'
import Tarjeta from '../tarjeta/Tarjeta'
import "./tarjetero.css"
import TarjetaBlog from '../tarjetaBlog/TarjetaBlog'

const Tarjetero = () => {
  return (
    <div className='tarjetero'>
        <TarjetaBlog/>
        <TarjetaBlog/>
        <TarjetaBlog/>
        <TarjetaBlog/>
        <Tarjeta/>
        <Tarjeta/>
        <Tarjeta/>
        <Tarjeta/>
        <Tarjeta/>
        <Tarjeta/>
        <Tarjeta/>

    </div>
  )
}

export default Tarjetero