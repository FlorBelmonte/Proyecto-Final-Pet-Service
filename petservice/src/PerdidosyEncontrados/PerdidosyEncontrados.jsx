import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Button } from 'react-bootstrap';
import "./perdidosyEncontrados.css"
import FormPerdidosEncontrados from '../FormPerdidosEncontrados/FormPerdidosEncontrados';

const PerdidosyEncontrados =()=>{
     
  const [data, setData] = useState([]);
  const [interData, setInterData] = useState([]);
  const [usuarioLogueado, setUsuarioLogueado] = useState(false);
  const [mostrarFormulario, setMostrarFormulario] = useState(false)
  
  
  useEffect(() => {
    const usuarioStorage = sessionStorage.getItem('usuarioLogueado');
    const usuario = usuarioStorage ? JSON.parse(usuarioStorage) : null;
    setUsuarioLogueado(Boolean(usuario));
  }, []);


  const handleMostrarFormulario = () => {
    if (usuarioLogueado) {
      setMostrarFormulario(true);
    } else {
      alert('Debes iniciar sesión para publicar una mascota.');
    }
  };

  const handleSubmitFormulario = () => {
    setMostrarFormulario(false);
    obtenerPublicaciones();
  };

  const obtenerPublicaciones = () => {
    axios.get(`http://localhost:3000/perdidos-yencontrados`)
      .then(response => {
        console.log(response.data);
        setData(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  };

  useEffect(() => {
    obtenerPublicaciones();
  }, []); // Llama a obtenerPublicaciones al cargar el componente
  

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
    <div className="container">
      <h2>Mascotas perdidas y encontradas</h2>
      <p>
        "Bienvenido al portal de mascotas perdidas y encontradas. Nuestro
        objetivo es ayudarte a encontrar a tu compañero peludo o a reunir a una
        mascota perdida con su dueño. Por favor, ayúdanos a brindar la
        información necesaria para que podamos difundir su búsqueda. ¡Juntos
        podemos encontrar a nuestras mascotas desaparecidas!"
      </p>
      
      <Button onClick={handleMostrarFormulario}>Publicar mascota</Button>

      {usuarioLogueado && mostrarFormulario && (
        <FormPerdidosEncontrados onSubmit={handleSubmitFormulario} />
      )}

      <div className='contenedorMascota'>
        {mascotas}
      </div>

    </div>
        
    )
}
export default PerdidosyEncontrados;