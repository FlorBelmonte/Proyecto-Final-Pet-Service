import React, { useContext } from 'react';
import { ServiciosContext } from '../../context/ServiciosContext';
import { Button } from 'react-bootstrap';
import './crearTarjeta.css';

const provinciasArgentinas = ['CABA','Buenos Aires','Catamarca','Chaco','Chubut','Córdoba','Corrientes','Entre Ríos','Formosa','Jujuy','La Pampa','La Rioja','Mendoza','Misiones',
  'Neuquén','Río Negro','Salta','San Juan','San Luis','Santa Cruz','Santa Fe','Santiago del Estero','Tierra del Fuego','Tucumán',];

const CrearTarjeta = () => {
  const contextServicios = useContext(ServiciosContext);

  const handleAddPost = (event) => {
    event.preventDefault();

    // Obtener los valores del formulario
    const { nombre, servicio, imagen, precio, informacion, localidad, provincia } =
      event.target.elements;

    // Agregar el nuevo post al arreglo de servicios
    contextServicios.setServicios([
      {
        id: nombre.value,
        nombre: nombre.value,
        servicio: servicio.value,
        imagen: imagen.value,
        precio: precio.value,
        informacion: informacion.value,
        votos: 1,
        puntuación: 5,
        localidad: localidad.value,
        provincia: provincia.value,
      },
      ...contextServicios.servicios,
    ]);

    // Limpiar los inputs del formulario
    nombre.value = '';
    imagen.value = '';
    precio.value = null;
    informacion.value = '';
    localidad.value = '';
    provincia.value = '';
  };

  return (
    <div className="marcoCrearTarjeta container">
      <form className="formCrearTarjeta" onSubmit={handleAddPost}>
        <div className="form-group">
          <label>Nombre:</label>
          <input type="text" name="nombre" className="form-control" />
        </div>
        <div className="form-group">
          <label>Elija un servicio:</label>
          <select
            id="servicio"
            name="servicio"
            defaultValue="Restaurante"
            className="form-control"
          >
            <option>Hotel</option>
            <option>Restaurante</option>
            <option>Paseador</option>
            <option>Aerolinea</option>
            <option>Veterinaria</option>
            <option>Actividad</option>
          </select>
        </div>
        <div className="form-group">
          <label>Seleccione una imagen:</label>
          <input type="file" name="imagen" className="form-control-file" />
        </div>
        <div className="form-group">
          <label>Defina el precio:</label>
          <input type="number" name="precio" className="form-control" />
        </div>
        <div className="form-group">
          <label>Ingrese la localidad:</label>
          <input type="text" name="localidad" className="form-control" />
        </div>
        <div className="form-group">
          <label>Elija una provincia:</label>
          <select
            id="provincia"
            name="provincia"
            defaultValue=""
            className="form-control"
          >
                <option value="" disabled>
                  Elija una provincia
                </option>
            {provinciasArgentinas.map((provincia) => (
              <option key={provincia} value={provincia}>
                {provincia}
              </option>
            ))}
          </select>
        </div>
        <div className="form-group">
          <label>Información:</label>
          <textarea
            type="text"
            name="informacion"
            className="form-control"
            placeholder="Escribe aquí la información sobre tu servicio!!!"
          />
        </div>
        <Button className="btn btn-primary btn-enviar" type="submit">
          Enviar
        </Button>
      </form>
    </div>
  );
};

export default CrearTarjeta;

