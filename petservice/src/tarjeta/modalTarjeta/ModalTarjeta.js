import React from 'react'
import { useState } from 'react';
import "./modalTarjeta.css"





const ModalTarjeta = ({ onClose, arrValores, actualizarPuntaje, puntaje, voto, actualizarSumaValoraciones }) => {
  const [modalValues, setModalValues] = useState(arrValores);

const [valor, setValor]=useState(1);
  
//const [valor3,setValor3]=useState(arrValores[3])  //prueba


  const handleInputChange = (e) => {

    
    const { name, value } = e.target;
    setValor(value)
    console.log(name)
    setModalValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  
   //valor es lo que vale la votacion realizada
   //voto es la cantidad de votantes
   //puntaje es la suma de todos los valores realizada por todos los votantes

  const [puntuacion, setPuntuacion]=useState(voto);

  const guardarCambios = () => {
    // Aquí puedes realizar cualquier acción necesaria con los valores modificados
    // por ejemplo, actualizar el estado en el componente padre o hacer una solicitud al servidor
    
    console.log('valor de value en guardar cambios: ',parseInt(valor) )
    console.log("valor de voto",voto)
    console.log("valor de puntaje",puntaje)
    console.log("valor de puntuacion",puntuacion)
    
    console.log("valor de puntuacion sumando el ultimo valor dado", (puntaje + parseInt(valor)))
    setPuntuacion(puntuacion+valor )
    onClose();
    //setValor3(valor3+1)
    //console.log('valor3 de value en guardar cambios: ',valor3 )

    const nuevaSumaValoracion=puntaje + parseInt(valor);
    actualizarSumaValoraciones(nuevaSumaValoracion)

    const nuevoPuntaje = voto + 1;
    actualizarPuntaje(nuevoPuntaje);
    console.log("valor de nuevoPuntaje",nuevoPuntaje)
  };

  

  return (
    <div className="modal">
      <div className='contenidoModal'>
      <button className='cancelar' onClick={onClose}>X</button>
      <h2>{arrValores[1]}</h2>
      <div className='contImgYValoracion'>
        <img className="imgTarjeta" src={arrValores[2]} alt="imagen"></img>
        <div className='conValoracion'>
            <div className='contenedorPValorar'>
              <p>Valorar min1 max5</p>
            </div>
            <input
              key={arrValores[1] + arrValores[6]}
              className="inpValoracion"
              type="range"
              min="1"
              max="5"
              name="valoracion"
              onChange={handleInputChange}
            />
            <button onClick={guardarCambios}>Guardar cambios</button>
            <input
            type="text"
            name="info"
            value={modalValues.info}
            
            />
        </div>
        
      </div> 
      <div className="info">{arrValores[5]}</div>
      </div>
    </div>
  );
};

export default ModalTarjeta;
