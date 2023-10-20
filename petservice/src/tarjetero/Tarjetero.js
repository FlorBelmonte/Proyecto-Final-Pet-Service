//import React, { useState } from 'react';
import Tarjeta from '../tarjeta/Tarjeta'
import "./tarjetero.css"
//import TarjetaBlog from '../tarjetaBlog/TarjetaBlog'
import CrearTarjeta from '../tarjeta/crearTarjeta/CrearTarjeta'
import { useContext } from 'react'
import { ServiciosContext } from '../context/ServiciosContext'

import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Tarjetero = (servicioElejido) => {

  const contextServicios=useContext(ServiciosContext)
  
  const [data, setData] = useState('');
  
  useEffect(() => {
    axios.get('http://localhost:3000/tarjeta-servicio')
      .then(response => {
        console.log(response)
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  //filtro de busqueda segun el servicio seleccionado (desde la barra de navegacion)
  const tarjetasFiltradasPorServicio=contextServicios.servicios.filter(tarjeta=>{return tarjeta.servicio===servicioElejido.servicioElejido});
  
  

  //crea el arreglo de tarjetas segun los filtros seleccionados en el paso anterior
  const tarjetas=tarjetasFiltradasPorServicio.map((t)=>(
   
    <Tarjeta  key={t.id} id={t.id} nombre={t.nombre} servicio={t.servicio} imagen={t.imagen} puntuacion={t.puntuacion} precio={t.precio} info={t.informacion} votos={t.votos} />
  
  
    ))
    
    

  
  return (
    <div className='tarjetero'>
        <CrearTarjeta/>
        {tarjetas}
        
    </div>
  )
}

export default Tarjetero