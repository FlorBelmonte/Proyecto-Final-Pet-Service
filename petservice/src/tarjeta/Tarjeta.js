import {  useState } from 'react'
import "./tarjeta.css"
import ModalTarjeta from './modalTarjeta/ModalTarjeta';
import PuntuarTarjeta from './puntuarTarjeta/PuntuarTarjeta';




const Tarjeta = ({id, nombre, servicio, imagen, promedio, precio, info, votos, provincia, puntaje, valoraciones}) => {
  
  const [arrValores, setArrValores ] =useState([id, nombre, servicio, imagen, promedio, precio, info, votos, provincia, puntaje, valoraciones ]);
  const actualizarArr=(nuevoArrValores)=>{
    setArrValores(nuevoArrValores)
  };
  

  
  /****************************** */
  const actualizarPuntaje = (nuevoPuntaje) => {
    
    setMiPuntaje(nuevoPuntaje);
  };

   const actualizarSumaValoraciones=(nuevaSumaValoraciones)=>{
    setSumaValoraciones(nuevaSumaValoraciones)
  }; 
  /************************************************** */
  


  
  const [showModal, setShowModal] = useState(false);
  const [miPuntaje, setMiPuntaje] = useState(arrValores[4]);
  const [voto, setVoto] = useState(arrValores[7]);
  




  /************************************************ */
  const [sumaValoraciones, setSumaValoraciones]=useState(promedio)
/***************************************************** */
  
  
  
  
  const mostrar = () => {
    if (showModal===false)setShowModal(true) 
    console.log("puntuacion = " + arrValores[4])
    console.log("votos = " + arrValores[7])
    console.log("puntaje = " + arrValores[9] )
    console.log("largo valoraciones = " + arrValores[10].length)
    console.log("valoraciones comentario=" + valoraciones[0].comentario)
  };

  const ocultar = () => {
    setShowModal(false);
  };

   const votar = () => {
    
    //setVoto(voto + 1);
    //console.log("valor de puntaje en votar", miPuntaje ) 
  }; 
 



  return (
    <div className="tarjeta" onClick={mostrar}>
      <div className="tarjeta-content">
        <img className="imgTarjeta" src={arrValores[3]} alt="imagen"></img>
        <div className="data">
          <div>
            <h4>{arrValores[1]}</h4>
          </div>
          <PuntuarTarjeta valoracion={arrValores[4]}/* puntuacion={arrValores[9]} votos={arrValores[7] */ />
          <div className="precio">$ {arrValores[5]}</div>
          {/* <div className="nuevoPuntaje">Nuevo puntaje: {puntaje}</div>  div de prueba para chequear que se esten enviando los puntajes desde el componente hijo al componente padre*/}  
          <div>votos: {arrValores[7]}</div>
          <div className='provincia'>provincia: {arrValores[8]}</div>
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
        <ModalTarjeta
          onClose={ocultar}
          actualizarArr={actualizarArr}
          actualizarPuntaje={actualizarPuntaje}
          arrValores={arrValores}
          miPuntaje={miPuntaje}
          voto={voto}
          actualizarSumaValoraciones={actualizarSumaValoraciones}
          votar={votar}
          valoraciones={valoraciones} />
      )}
    </div>
  );
  };


 

export default Tarjeta