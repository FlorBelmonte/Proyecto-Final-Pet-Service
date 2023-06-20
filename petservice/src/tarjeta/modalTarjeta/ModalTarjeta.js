import React from 'react'
import { useState } from 'react';
import "./modalTarjeta.css"






 
const ModalTarjeta = ({ onClose, arrValores, actualizarPuntaje, puntaje, voto, actualizarSumaValoraciones, votar }) => {



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

  const guardarCambios = () => {
    
    votar();
        
    setPuntuacion(puntuacion+valor )
       
    
    console.log('valor de value en guardar cambios: ',parseInt(valor) )
    console.log("valor de puntuacion sumando el ultimo valor dado", (puntaje + parseInt(valor))) 
    const nuevaSumaValoracion=puntaje + parseInt(valor);
    actualizarSumaValoraciones(nuevaSumaValoracion) //valor del puntaje votado mas los puntajes preexistentes
    actualizarPuntaje(nuevaSumaValoracion) // devuelve el valor del puntaje votado mas los puntajes preexistentes a la tarjeta

    
    onClose();
  };

  

  return (
    <div className="modal">
      <div className='contenidoModal'>
      <button className='cancelar' onClick={onClose}>X</button>
      <h2>{arrValores[1]}</h2>
      <div className='contImgYValoracion'>
        <img className="imgTarjeta" src={arrValores[3]} alt="imagen"></img>
        <div className='conValoracion'>
            <div className='contenedorPValorar'>
              <p>Valorar min1 max5</p>
            </div>
            <input
              key={arrValores[1] + arrValores[7]}
              className="inpValoracion"
              type="range"
              min="1"
              max="5"
              name="valoracion"
              onChange={handleInputChange}
            />
            <button onClick={guardarCambios}>Guardar cambios</button>
            
        </div>
        
      </div> 
      <div className="info">{arrValores[6]}</div>
      </div>
    </div>
  );
};

export default ModalTarjeta;
 