import { createContext, useState } from "react";


export const ServiciosContext = createContext(null);//crea el contexto


//proveedor del contexto
export default function ServiciosContextProvider({children}){

  

     const [servicios, setServicios]=useState([
        {
            id: "Pizza Dog",
            nombre: "Pizza Dog",
            servicio: "Restaurante",
            imagen: "https://www.alfaforni.com/wp-content/uploads/2022/10/20220928_142615-scaled.jpg",
            precio: 20,
            informacion: "Es la primera pizzeria Pet friendly de la zona. hay un sector exclusivo para las mascotas donde pueden disfrutar de un plato de alimento balanceado y agua. O si prefiere puede llevar a su mascota a su meza para que compartan el una experiencia inigualable",
            votos:45,
            puntuacion:180,
            localidad:"Ayacucho"
           },
             {
            id: "Palace",
            nombre: "Palace",
            servicio: "Hotel",
            imagen: "https://www.lugaresconhistoria.com/wp-content/uploads/2013/03/palace_hotel_madrid-ciukes.jpg",
            precio: 750,
            informacion: "Hotel de 5 estrellas para que pueda disfrutar de una experiencia unica. Disfrute de nuestra nueva pileta apta para mascotas. Cuidados caninos, zala de entretenimiento para gatos y nuestro exclusivo centro de estetica para mascotas. Todo esto ademas de nuestros servicios tradicionales! Contactese con nosotros para mas informacion",
            votos:250,
            puntuacion:1250,
            localidad:"Tandil"
           },
           {
            id: "CatZone",
            nombre: "CatZone",
            servicio: "Restaurante",
            imagen: "https://media-cdn.tripadvisor.com/media/photo-s/09/0e/f2/a4/patio-de-comidas.jpg",
            precio: 15,
            informacion: "disfrute de nuestro patio de comidas. tenemos lo mejores calzones de la ciudad. si viene con su mascota le regalamos un delicioso cafe!",
            votos:11,
            puntuacion:33,
            localidad:"tandil"
           } 

     ])


        //paso en el value lo que quiero ocmpartir a los otros componentes
    return(
        <ServiciosContext.Provider value={{servicios, setServicios}} 
        > 
            {children}
        </ServiciosContext.Provider>
    )
}