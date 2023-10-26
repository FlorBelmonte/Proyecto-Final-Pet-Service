//import React, { useState } from 'react';
import Tarjeta from '../tarjeta/Tarjeta'
import "./tarjetero.css"
//import TarjetaBlog from '../tarjetaBlog/TarjetaBlog'
import CrearTarjeta from '../tarjeta/crearTarjeta/CrearTarjeta'
import { useContext } from 'react'
import { ServiciosContext } from '../context/ServiciosContext'

import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Tarjetero = ({servicioElejido}) => {
  
  //const contextServicios=useContext(ServiciosContext)
  
  const [data, setData] = useState([]);
  const [interData, setInterData]= useState([]);
  
  useEffect(() => {
    axios.get(`http://localhost:3000/tarjeta-servicio/categoria/${servicioElejido.servicioElejido}`)
      .then(response => {
        console.log(response.data)
        setData(response.data.data) 
        console.log(response.data.data)
        axios.get(`http://localhost:3000/tarjeta-servicio/categoria/${servicioElejido.servicioElejido}`)
        .then(response=>{setInterData(response.data.data)})
        console.log(`http://localhost:3000/tarjeta-servicio/categoria/${servicioElejido.servicioElejido}`)
       })
      .catch(error => {
        console.error(error);

      });
  }, [servicioElejido]);

console.log(interData.data)
   
// habria que cambiar en la linea de abajo data x iterData.data pero da error
   const tarjetas=data.map((t)=>(
   
    <Tarjeta  key={t.nombre} id={t.idTarjetaServicio} nombre={t.nombre} servicio={t.categoria.nombre} imagen={t.imagen} puntuacion={t.promedio} precio={t.precio} info={t.descripcion} votos={t.votos} provincia={t.provincia.nombre} />
    
  
    )) 
    
  
  //filtro de busqueda segun el servicio seleccionado (desde la barra de navegacion)
  //const tarjetasFiltradasPorServicio=contextServicios.servicios.filter(tarjeta=>{return tarjeta.servicio===servicioElejido.servicioElejido});
  
  //console.log(tarjetasFiltradasPorServicio)

   //crea el arreglo de tarjetas segun los filtros seleccionados en el paso anterior
   /*  const tarjetas=tarjetasFiltradasPorServicio.map((t)=>(
   
    <Tarjeta  key={t.id} id={t.id} nombre={t.nombre} servicio={t.servicio} imagen={t.imagen} puntuacion={t.puntuacion} precio={t.precio} info={t.informacion} votos={t.votos} />
  
  
    ))  */
     
    

  
  return (
    <div className='tarjetero'>
        <CrearTarjeta/>
        {tarjetas}
        
    </div>
  )
}

export default Tarjetero