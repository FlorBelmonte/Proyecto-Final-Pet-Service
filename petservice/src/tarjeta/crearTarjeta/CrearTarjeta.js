import React from 'react'
import { useContext } from 'react';
import { ServiciosContext } from '../../context/ServiciosContext';
import { Button } from 'react-bootstrap';
import "./crearTarjeta.css"


const CrearTarjeta = () => {
    const contextServicios= useContext (ServiciosContext)
    /* console.log(contextServicios.servicios) */
    //const [servicios, setServicios] = useState([]);
    const handleAddPost = (event) => {
      event.preventDefault();

// Obtener los valores del formulario
    const {nombre, servicio, imagen, precio,informacion,localidad} = event.target.elements;

// Agregar el nuevo post al arreglo de servicios
contextServicios.setServicios([

    {
     id: nombre.value,
     nombre: nombre.value,
     servicio: servicio.value,
     imagen: imagen.value,
     precio: precio.value,
     informacion: informacion.value,
     votos:0,
     puntuacion:0,
     localidad:localidad.value
    },
    ...contextServicios.servicios,
    ]);

// Limpiar los inputs del formulario
     nombre.value=''
     imagen.value=''
     precio.value=null
     informacion.value=''
     localidad.value=''
     
    }


  return (
    <div className='marcoCrearTarjeta'> 
        <form className='formCrearTarjeta' onSubmit={handleAddPost}>
            <div><p>Nombre:</p><input type='text' name='nombre' ></input></div>
            <div><p>Elija un servicio:</p>
                <select id="servicio" name="servicio" defaultValue={"Restaurante"}>
                    <option>Hotel</option>
                    <option>Restaurante</option>
                    <option>Paseador</option>
                    <option>Aerolinea</option>
                    <option>Veterinaria</option>
                    <option>Actividad</option>
                </select></div>
            <div><p>seleccione una imagen:</p><input type='file' name='imagen'/></div>
            <div><p>defina el precio:</p><input type='number'name='precio' ></input></div>
            <div><p>Ingrese la localidad:</p><input type='text' name='localidad'></input></div>
            <textarea type='text' name='informacion' placeholder='Escribe aqui la informacion sobre tu servicio!!!' />
            <Button className='btnAbrir' type='submit'>Enviar</Button>
        </form>  
    </div>
  )
}

export default CrearTarjeta