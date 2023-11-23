import React from "react";
import { useState } from "react";
import "./modalTarjeta.css";
import { Button } from "react-bootstrap";

const ModalTarjeta = ({
  onClose,
  arrValores,
  actualizarPuntaje,
  miPuntaje,
  voto,
  actualizarSumaValoraciones,
  votar,
}) => {
  const [modalValues, setModalValues] = useState(arrValores);

  const [valor, setValor] = useState(5);

  // handleInputChange captura el valor que se le esta dando en el input de de valoracion //

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValor(value);
    setModalValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  // agrega los comentarios y los votos de los usuarios en la modal.
  const valoresyvotos = arrValores[10].map((v) => (
    <div className="comentario-y-voto">
      <>comentario = {v.comentario} </>
      <>voto = {v.valoracion} </>
    </div>
  ));

  //valor es lo que vale la votacion realizada
  //voto es la cantidad de votantes
  //puntaje es la suma de todos los valores realizada por todos los votantes

/*************************************************** */
  const [showComentario, setShowComentario] = useState(false);
  const [puntuacion, setPuntuacion] = useState(voto);
  const [comentario, setComentario] = useState("");


const mostrarComentarios = () => {
    if (showComentario===false)setShowComentario(true) 
  };
  
  const ocultarComentarios = () => {
    setShowComentario(false) 
  };

/*********************************************************** */

  async function guardarCambios() {
    const sessionData = JSON.parse(sessionStorage.getItem("usuarioLogueado"));

    if (sessionData && sessionData.token) {
      const { token, correo, nombre, tipo, idUsuario } = sessionData;

      let votacion = {
        idTarjetaServicio: arrValores[0],
        idUsuario: idUsuario,
        valoracion: puntuacion,
        comentario: comentario,
      };

      await fetch(`http://localhost:3000/valoracion-servicio`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `${token}`, // Agrega el token al encabezado 'Authorization'
        },
        body: JSON.stringify(votacion),
      })
        .then((response) => {
          console.log(response);
          if (response.ok) {
            alert("se envio la valoracion correctamente");
          } else {
            throw new Error("Error al enviar la valoracion");
          }
        })
        .catch((error) => {
          console.log(error);
        });
      onClose();
    } else {
      alert("Error, debe iniciar sesion para continuar");
      throw new Error("Error, debe iniciar sesion para continuar");
    }
  }

  /* const guardarCambios = () => {

    votar();
        
    setPuntuacion(puntuacion+valor )
       
    
    console.log('valor de value en guardar cambios: ',parseInt(valor) )
    console.log("valor de puntuacion sumando el ultimo valor dado", (miPuntaje + parseInt(valor))) 
    const nuevaSumaValoracion=miPuntaje + parseInt(valor);
    actualizarSumaValoraciones(nuevaSumaValoracion) //valor del puntaje votado mas los puntajes preexistentes
    actualizarPuntaje(nuevaSumaValoracion) // devuelve el valor del puntaje votado mas los puntajes preexistentes a la tarjeta

    
    onClose();
  }; */

  return (
    <div className="modalTarjeta">
      <div className="contenidoModal">
        <div className="position-relative">
          <Button className="btn btn-danger float-end" onClick={onClose}>
            X
          </Button>
        </div>
        <h2>{arrValores[1]}</h2>
        <div className="contImgYValoracion">
          <div className="contenedorImagenTarjetaModal"><img className="imgTarjetaModal" src={arrValores[3]} alt="imagen" /></div>
          
          <div className="conValoracion">
            <div className="contenedorPValorar">
              <textarea
                onChange={(e) => setComentario(e.target.value)}
                placeholder="Escribe tus comentarios aquí..."
              ></textarea>
              <p className="text-secondary">Valorar min1 max5</p>
            </div>
            <input
              key={arrValores[0] /* + arrValores[7] */}
              className="inpValoracion"
              type="range"
              min="1"
              max="5"
              name="valoracion"
              onChange={handleInputChange}
            />
            <Button
              className="btn btn-primary custom-btn"
              onClick={guardarCambios}
            >
              Guardar
            </Button>
          </div>
        </div>
        
        <div className="info-modal">{arrValores[6]}</div>
            <Button
              className="btn btn-primary custom-btn mostrar-comentarios-btn"
              onClick={mostrarComentarios}
            >
              Mostrar Comentarios
            </Button>
        {showComentario && (<div className="contenedor-tarjeta-modal-info-comentarios">
          <Button
              className="btn btn-primary custom-btn ocultar-comentarios-btn"
              onClick={ocultarComentarios}
            >
              Ocultar Comentarios
            </Button>
          
          <div className="infoComentariosModal"> {valoresyvotos}</div>
        </div>)}
        {/* 
        <div className="contenedor-tarjeta-modal-info-comentarios">
          <div className="info">{arrValores[6]}</div>
          <div className="infoComentariosModal"> {valoresyvotos}</div>
        </div> */}
        
      </div>
    </div>
  );
};

export default ModalTarjeta;