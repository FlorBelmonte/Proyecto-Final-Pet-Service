
import puntaje from '../../assets/PetservicePata.png'
import "./puntuarTarjeta.css"




const PuntuarTarjeta = ({puntuacion, votos}) => {

  /* redondeo de la division entre la suma de todos los puntajes dados dividido la cantidad de votos */

   const votosResultado= Math.floor( puntuacion/votos)
   
   
  // se crea un arreglo con la cantidad de posiciones segun el resultado de votosResultado 
  const votacion=[];
  for (let i=0;i<votosResultado;i++){
    votacion.push(i)
  } 

  // por cada numero del arreglo se genera la imagen de una pata 

   const graficarVotacion=votacion.map((numero)=>(
    <img key={numero}
    id={numero}
    className='imgPuntaje'
    src={puntaje}
    alt='puntaje'></img>
   ))

   // el componente retorna la cantidad de patas correspondientes 
  return (
    <>
    
    {graficarVotacion }
    </>
    
  )
}

export default PuntuarTarjeta