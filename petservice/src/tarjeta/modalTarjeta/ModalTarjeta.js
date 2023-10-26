import React from 'react'
import { useState } from 'react';
import "./modalTarjeta.css"
import { Button } from 'react-bootstrap';

const ModalTarjeta = ({ onClose, arrValores, actualizarPuntaje, miPuntaje, voto, actualizarSumaValoraciones, votar }) => {


const [modalValues, setModalValues] = useState(arrValores);

const [valor, setValor]=useState(5);
  

 // handleInputChange captura el valor que se le esta dando en el input de de valoracion //

  const handleInputChange = (e) => {

      const { name, value } = e.target;
    setValor(value)
    setModalValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };
  
  console.log("valor ", valor)
   
   //valor es lo que vale la votacion realizada
   //voto es la cantidad de votantes
   //puntaje es la suma de todos los valores realizada por todos los votantes

  const [puntuacion, setPuntuacion]=useState(voto);

/*el siguiente bloque de codigo realiza el post de valoracion servicio */
async function guardarCambios()
{
  let votacion =
  {
    "idTarjetaServicio": arrValores[0],
    "comentario": " ",
    "idUsuario": 1,
    "valoracion": valor
  }
  let respuesta = await fetch(`http://localhost:3000/valoracion-servicio/${arrValores[0]}`, {
           method :'PUT',
           headers: { 'Content-Type' : 'application/json' },
           body : JSON.stringify(votacion)
  })
  onClose();
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
      <div className="position-relative"><Button className="btn btn-danger float-end" onClick={onClose}>X</Button>
      </div>
        <h2>{arrValores[1]}</h2>
        <div className="contImgYValoracion">
          <img className="imgTarjeta" src={arrValores[3]} alt="imagen" />
          <div className="conValoracion">
            <div className="contenedorPValorar">
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
            <Button className="btn btn-primary custom-btn" onClick={guardarCambios}>Guardar</Button>
          </div>
        </div>
        <div className="info">{arrValores[6]}</div>
      </div>
    </div>
  );
};

export default ModalTarjeta;

