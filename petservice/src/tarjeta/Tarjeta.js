import {  useState } from 'react'
import "./tarjeta.css"
import ModalTarjeta from './modalTarjeta/ModalTarjeta';
import PuntuarTarjeta from './puntuarTarjeta/PuntuarTarjeta';




const Tarjeta = ({id, nombre, servicio, imagen, puntuacion, precio, info, votos}) => {
  
  const [arrValores, setArrValores ] =useState([id, nombre, servicio, imagen,puntuacion, precio, info, votos ]);
  const actualizarArr=(nuevoArrValores)=>{
    setArrValores(nuevoArrValores)
  };
  

  
  
  const actualizarPuntaje = (nuevoPuntaje) => {
    
    setPuntaje(nuevoPuntaje);
  };

  const actualizarSumaValoraciones=(nuevaSumaValoraciones)=>{
    setSumaValoraciones(nuevaSumaValoraciones)
  };

  const [showModal, setShowModal] = useState(false);
  const [puntaje, setPuntaje] = useState(arrValores[4]);
  const [voto, setVoto] = useState(arrValores[7]);
  
  const [sumaValoraciones, setSumaValoraciones]=useState(puntuacion)

  
  
  
  
  const mostrar = () => {
    if (showModal===false)setShowModal(true) 
     console.log(arrValores)
     
  };

  const ocultar = () => {
    setShowModal(false);
  };

   const votar = () => {
    
    setVoto(voto + 1);
    console.log("valor de puntaje en votar", puntaje ) 
  }; 
 



  return (
    <div className="tarjeta" onClick={mostrar}>
      <div className="tarjeta-content">
        <img className="imgTarjeta" src={arrValores[3]} alt="imagen"></img>
        <div className="data">
          <div>
            <h4>{arrValores[1]}</h4>
          </div>
          <PuntuarTarjeta puntuacion={ sumaValoraciones} votos={voto} />
          <div className="precio">$ {arrValores[5]}</div>
          {/* <div className="nuevoPuntaje">Nuevo puntaje: {puntaje}</div>  div de prueba para chequear que se esten enviando los puntajes desde el componente hijo al componente padre*/}  
          <div>votos: {voto}</div>
          <div className="menuVotar">
            <button className="cancelar" onClick={ocultar}>
              X
            </button>
            <input
              key={arrValores[1] + arrValores[7]}
              className="inpValoracion"
              type="range"
              min="1"
              max="5"
              name="valoracion"
            />
            </div>
        </div>
        <div className="info">{arrValores[6]}</div>
      </div>

      {showModal && (
        <ModalTarjeta onClose={ocultar} actualizarArr={actualizarArr} actualizarPuntaje={actualizarPuntaje} arrValores={arrValores} puntaje={puntaje} voto={voto} actualizarSumaValoraciones={actualizarSumaValoraciones} votar={votar}/>
      )}
    </div>
  );
  };


 

export default Tarjeta