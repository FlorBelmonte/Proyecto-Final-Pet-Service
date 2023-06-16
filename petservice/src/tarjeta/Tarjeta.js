import {  useState } from 'react'
import "./tarjeta.css"
import ModalTarjeta from './modalTarjeta/ModalTarjeta';
import PuntuarTarjeta from './puntuarTarjeta/PuntuarTarjeta';




const Tarjeta = ({id, nombre, imagen, puntuacion, precio, info, votos}) => {
  
  const [arrValores, setArrValores ] =useState([id, nombre, imagen,puntuacion, precio, info, votos ]);
  const actualizarArr=(nuevoArrValores)=>{
    setArrValores(nuevoArrValores)
  };
  

  console.log(" valoracion de puntuacion: ", puntuacion);
  
  const actualizarPuntaje = (nuevoPuntaje) => {
    console.log("Nuevo puntaje:", nuevoPuntaje);
    setPuntaje(nuevoPuntaje);
  };

  const actualizarSumaValoraciones=(nuevaSumaValoraciones)=>{
    setSumaValoraciones(nuevaSumaValoraciones)
  };

  const [showModal, setShowModal] = useState(false);
  const [puntaje, setPuntaje] = useState(arrValores[3]);
  const [voto, setVoto] = useState(arrValores[6]);
  const [nuevoPuntaje, setNuevoPuntaje] = useState(0);
  const [sumaValoraciones, setSumaValoraciones]=useState(puntuacion)

  
  console.log(" suma de todas las valoraciones de los votos: se llama sumaValoraciones ", sumaValoraciones);
  
  
  const mostrar = () => {
    if (showModal===false)setShowModal(true) 
     
     
  };

  const ocultar = () => {
    setShowModal(false);
  };

  const votar = () => {
    setPuntaje(puntaje + (arrValores[1] + voto));
    setVoto(voto + 1);
  };
 
  console.log(" cantidad de votos: se llama voto ", voto);


  return (
    <div className="tarjeta" onClick={mostrar}>
      <div className="tarjeta-content">
        <img className="imgTarjeta" src={arrValores[2]} alt="imagen"></img>
        <div className="data">
          <div>
            <h4>{arrValores[1]}</h4>
          </div>
          <PuntuarTarjeta puntuacion={ sumaValoraciones} votos={voto} />
          <div className="precio">$ {arrValores[4]}</div>
          <div className="nuevoPuntaje">Nuevo puntaje: {nuevoPuntaje}</div>
          <div>votos: {voto}</div>
          <div className="menuVotar">
            <button className="cancelar" onClick={ocultar}>
              X
            </button>
            <input
              key={arrValores[1] + arrValores[6]}
              className="inpValoracion"
              type="range"
              min="1"
              max="5"
              name="valoracion"
            />
            <button className="votar" onClick={votar}>
              Votar
            </button>
          </div>
        </div>
        <div className="info">{arrValores[5]}</div>
      </div>

      {showModal && (
        <ModalTarjeta onClose={ocultar} actualizarArr={actualizarArr} actualizarPuntaje={actualizarPuntaje} arrValores={arrValores} puntaje={puntaje} voto={voto} actualizarSumaValoraciones={actualizarSumaValoraciones}/>
      )}
    </div>
  );
  };


 

export default Tarjeta