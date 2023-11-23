//import React, { useState } from 'react';
import Tarjeta from "../tarjeta/Tarjeta";
import "./tarjetero.css";
//import TarjetaBlog from '../tarjetaBlog/TarjetaBlog'

import CrearTarjeta from '../tarjeta/crearTarjeta/CrearTarjeta'
import { useContext } from 'react'
import { ServiciosContext } from '../context/ServiciosContext'
import { ProvinciaContext } from '../context/ProvinciaContext'


import React, { useState, useEffect } from "react";
import axios from "axios";

const Tarjetero = ({ servicioElejido }) => {
  //const contextServicios=useContext(ServiciosContext)

  const { filtraProvincia, setFiltraProvincia } = useContext(ProvinciaContext); 
  const [data, setData] = useState([]);
  const [interData, setInterData] = useState([]);
  const [usuarioLogueado, setUsuarioLogueado] = useState(false);
  const [esAdministrador, setEsAdministrador] = useState(false);

  useEffect(() => {
    // Obtener el valor almacenado en sessionStorage
    const usuarioStorage = sessionStorage.getItem("usuarioLogueado");

    // Parsear el valor JSON
    const usuario = usuarioStorage ? JSON.parse(usuarioStorage) : null;

    // Verificar si el usuario está logueado y es administrador
    if (usuario && usuario.tipo === 0) {
      alert("entro al if");
      setUsuarioLogueado(true);
      setEsAdministrador(true);
    } else {
      setUsuarioLogueado(false);
      setEsAdministrador(false);
    }
  }, []);

  const mostrarCrearTarjeta = usuarioLogueado && esAdministrador;

  useEffect(() => {
    axios
      .get(
        `http://localhost:3000/tarjeta-servicio/categoria/${servicioElejido.servicioElejido}`
      )
      .then((response) => {
        console.log(response.data);
        setData(response.data.data);
        console.log(response.data.data);
        axios
          .get(
            `http://localhost:3000/tarjeta-servicio/categoria/${servicioElejido.servicioElejido}`
          )
          .then((response) => {
            setInterData(response.data.data);
          });
        console.log(
          `http://localhost:3000/tarjeta-servicio/categoria/${servicioElejido.servicioElejido}`
        );
      })
      .catch((error) => {
        console.error(error);
      });
  }, [servicioElejido]);


console.log(interData.data)
   
// habria que cambiar en la linea de abajo data x iterData.data pero da error

    
  
  //filtro de busqueda segun el servicio seleccionado (desde la barra de navegacion)
  //const tarjetasFiltradasPorServicio=contextServicios.servicios.filter(tarjeta=>{return tarjeta.servicio===servicioElejido.servicioElejido});
  
  //console.log(tarjetasFiltradasPorServicio)


console.log(interData.data)
   console.log("filtraProvincia desde Tarjetero = " + filtraProvincia)
  
  /************datos filtrados por provincia************ */
  const tarjetasFiltradas = data.filter(tarjeta => {
    if (filtraProvincia === 'Todas') {
      return true
    }
    return tarjeta.provincia.nombre===filtraProvincia
  }).map((t)=>(
   
     <Tarjeta
       key={t.nombre}
       id={t.idTarjetaServicio}
       nombre={t.nombre}
       servicio={t.categoria.nombre}
       imagen={t.imagen}
       promedio={t.promedio}
       precio={t.precio}
       info={t.descripcion}
       votos={t.votos}
       provincia={t.provincia.nombre}
       valoraciones={t.valoraciones} />
    
  
    )) 
     
 return (
    <div className="tarjetero">
      {mostrarCrearTarjeta && <CrearTarjeta />}
     {tarjetasFiltradas}
     
    </div>
  );
};

export default Tarjetero;