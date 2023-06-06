import { useState } from 'react'
import "./tarjeta.css"
import PuntuarTarjeta from './puntuarTarjeta/PuntuarTarjeta';


const Tarjeta = ({id, nombre, imagen, puntuacion, precio, info, votos, key}) => {

  const arrValores=[id, nombre, imagen,puntuacion, precio, info, votos, key ];
  


 const [modal, setModal]=useState('tarjeta') 

 const mostrar=()=>{
    console.log(arrValores[0])
    setModal('abrirModal')
  }
  
 const ocultar=(e)=>{
  console.log(arrValores)
  e.target.parentNode.parentNode.parentNode.className=setModal('tarjeta')
  console.log(e.target.parentNode.parentNode.parentNode.className)
  } 

 
 

  const [puntaje,setPuntaje]=useState(arrValores[3])
  const [voto,setVoto]=useState(arrValores[6])

 const votar=()=>{
  console.log("voto" + voto)
  setPuntaje(puntaje+(arrValores[1]+arrValores[6]))
  setVoto(voto+1)
  console.log("voto ejecutado" + voto)
 }


    return (
      <div className={modal} key={arrValores[0]}onClick={mostrar}>
        <img className='imgTarjeta' src={arrValores[2]} alt='imagen'></img>
        <div className='data'>
          <div><h4>{arrValores[1]}</h4></div>
          <PuntuarTarjeta puntuacion={arrValores[3]} votos={arrValores[6]}/> 
          <div className='precio' >$ {arrValores[4]}</div>
          <div className='menuVotar'>
          <button className='cancelar' onClick={ocultar}>X</button>
          <input key={arrValores[1]+arrValores[6]}  className='inpValoracion' type='range'min="1" max="5" name='valoracion'></input>
          <button className='votar' onClick={votar}>Votar</button>
        </div>
          </div>
        <div className='info'>{arrValores[5]}</div>
        
       

      </div>

    )
  };


 

export default Tarjeta