
import puntaje from '../../assets/PetservicePata.png'
import "./puntuarTarjeta.css"

const PuntuarTarjeta = ({puntuacion, votos}) => {

   const votosResultado= Math.floor( puntuacion/votos)
    
  const votacion=[];
  for (let i=0;i<votosResultado;i++){
    votacion.push(i)
  } 

   const graficarVotacion=votacion.map((numero)=>(
    <img key={numero}
    id={numero}
    className='imgPuntaje'
    src={puntaje}
    alt='puntaje'></img>
   ))

   
  return (
    <>
    
    {graficarVotacion }
    </>
    
  )
}

export default PuntuarTarjeta