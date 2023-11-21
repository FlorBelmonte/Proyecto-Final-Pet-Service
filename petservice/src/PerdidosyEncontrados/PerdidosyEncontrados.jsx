import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "./perdidosyEncontrados.css"

const PerdidosyEncontrados =()=>{
     
  const [data, setData] = useState([]);
  const [interData, setInterData]= useState([]);
  
  useEffect(() => {
    axios.get(`http://localhost:3000/perdidos-yencontrados`)
      .then(response => {
        console.log(response.data)
         setData(response.data) 
       })
      .catch(error => {
        console.error(error);

      });
  }, []);

    const mascotas = data.map((mascota)=> (
        <div className='mascota'>
            <div className=' flip-frente'>
              <p>{mascota.tipo}</p>
              <img src={mascota.imagen} alt={mascota.nombre} />  
            </div>
            <div className=' flip-dorso'>
              <p>nombre: { mascota.nombre}</p>
              <p>contacto: { mascota.contacto}</p>
              <p>ubicacion: { mascota.ubicacion}</p>
              <p>descripcion: { mascota.descripcion}</p>
            </div>
        </div> 
    ))
   
    
    return (
        <div className='contenedorMascota'>
            {mascotas}
        </div>
    )
}
export default PerdidosyEncontrados;