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
           },
           {
            id: "Flyship",
            nombre: "Flyship",
            servicio: "Aerolinea",
            imagen: "https://concepto.de/wp-content/uploads/2023/01/avion.jpg",
            precio: 1200,
            informacion: "nuestra aerolinea le permitira viajer con sus mascotas con una comodidad nunca antes vista! disfrute el vuelo!",
            votos:32,
            puntuacion:150,
            localidad:"Buenos Aires"
           },{
            id: "AirRoute",
            nombre: "AirRoute",
            servicio: "Aerolinea",
            imagen: "https://images.ecestaticos.com/VEkYehToD6eRMpvBYmoxLsT3jso=/115x0:2001x1410/1200x900/filters:fill(white):format(jpg)/f.elconfidencial.com%2Foriginal%2F4a4%2Fab7%2F874%2F4a4ab78742743f3a85916eeee191cc18.jpg",
            precio: 1150,
            informacion: "Que su mascota tenga la misma experiencia que usted. Su viaje comienza en el avion. Usted lo sabe... que su mascota lo sepa tambien!",
            votos:50,
            puntuacion:250,
            localidad:"Buenos Aires"
           },{
            id: "D-paseo",
            nombre: "D-paseo",
            servicio: "Paseador",
            imagen: "https://images.pexels.com/photos/868113/pexels-photo-868113.jpeg?auto=compress&cs=tinysrgb&w=1600",
            precio: 10,
            informacion: "Cuido y paseo a su mascota, contrateme.... no se va a arrepentir",
            votos:8,
            puntuacion:27,
            localidad:"Ayacucho"
           },{
            id: "Garritas",
            nombre: "Garritas",
            servicio: "Veterinaria",
            imagen: "https://www.diariofutrono.cl/files/61d76bccdd176.jpg",
            precio: 10,
            informacion: "Veterinaria con servicio de internacion. Alimentos, juguetes, vacunas! Todo lo que necesite",
            votos:13,
            puntuacion:52,
            localidad:"Tandil"
           },{
            id: "SenderoSur",
            nombre: "SenderoSur",
            servicio: "Actividad",
            imagen: "https://upload.wikimedia.org/wikipedia/commons/d/d0/Vista_de_las_sierras_de_Balcarce.jpg",
            precio: 0,
            informacion: "Recorra en nuestra hermosa ciudad el sendero sur, con magnificos paisajes y paradores para pasar el dia con sus mascotas!",
            votos:42,
            puntuacion:200,
            localidad:"Balcarce"
           },{
            id: "Real",
            nombre: "Real",
            servicio: "Hotel",
            imagen: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/18/c3/e0/91/miravida-soho-hotel-wine.jpg?w=1200&h=-1&s=1",
            precio: 150,
            informacion: "Hotel de 3 estrellas. ubicados 5 cuadras del centro de laciudad!",
            votos:9,
            puntuacion:25,
            localidad:"Tandil"
           },{
            id: "Michi",
            nombre: "Michi",
            servicio: "Restaurante",
            imagen: "https://www.steakburger.es/wp-content/uploads/2019/11/steakburger-fuencarral-3-1080x675.jpg",
            precio: 19,
            informacion: "No solo somos los reyes de las hamburguesas. Tambien somos los mas queridos por el reino animal!!",
            votos:186,
            puntuacion:902,
            localidad:"Buenos Aires"
           },{
            id: "7lagos",
            nombre: "7lagos",
            servicio: "Actividad",
            imagen: "https://assets.howlanders.com/es/tours-argentina/bariloche/camino-siete-lagos/gallery/siete-lagos-argentina.jpg",
            precio: 0,
            informacion: "Recorra el sur de nuestro pais, paisajes, lugares magicos y naturaleza. Disfrute! ",
            votos:3289,
            puntuacion:16100,
            localidad:"Villa la angostura"
           },{
            id: "PitBull",
            nombre: "PitBull",
            servicio: "Veterinaria",
            imagen: "https://cetci.com.ar/wp-content/uploads/2018/11/448988-PEVZN5-13-1.jpg",
            precio: 10,
            informacion: "Atencion las 24hs. Atencion a domicilio!",
            votos:10,
            puntuacion:40,
            localidad:"Tandil"
           },{
            id: "AeroZone",
            nombre: "AeroZone",
            servicio: "Aerolinea",
            imagen: "https://images.unsplash.com/photo-1570710891163-6d3b5c47248b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8Nnx8fGVufDB8fHx8fA%3D%3D&w=1000&q=80",
            precio: 650,
            informacion: "Aerolinea low cost que brinda la posibilidad de llevar a su mascota como en primera clase",
            votos:89,
            puntuacion:120,
            localidad:"Ayacucho"
           },{
            id: "IA",
            nombre: "IA",
            servicio: "Aerolinea",
            imagen: "https://media.revistavanityfair.es/photos/639c7819dab86a3405e1d997/16:9/w_2560%2Cc_limit/Gulfstream_G650ER_Aerial_3.jpg",
            precio: 1300,
            informacion: "International Airlines es la aerolinea lider en le mercado, llegamos a todos los rincones del planeta. Si hay una pista, nosotros estamos.",
            votos:100,
            puntuacion:500,
            localidad:"Buenos Aires"
           },{
            id: "LaCasita",
            nombre: "LaCasita",
            servicio: "Veterinaria",
            imagen: "https://media.istockphoto.com/id/1358029520/es/vector/estetoscopio-y-huella-animal-concepto-veterinario-silueta-icono-pictograma-de-glifo-de.jpg?s=612x612&w=0&k=20&c=jUIVmkmPbzwa5kj_7xllZbeCwGVbAdfRM3DOT25NGxE=",
            precio: 10,
            informacion: "Emergencias veterinarias, Puntualidad y predisposicion!",
            votos:15,
            puntuacion:40,
            localidad:"Azul"
           },{
            id: "Glaciar Perito Moreno",
            nombre: "Glaciar Perito Moreno",
            servicio: "Actividad",
            imagen: "https://www.elcalafate.tur.ar/img/anunciantes/815/galeria/big/perito-1-.jpg",
            precio:0,
            informacion: "Nada mejor que disfrutar de un hermoso paseo por los glaciares! un lugar unico",
            votos:35,
            puntuacion:120,
            localidad:"Calafate"
           },{
            id: "Banderas",
            nombre: "Banderas",
            servicio: "Hotel",
            imagen: "https://www.ahstatic.com/photos/c096_ho_00_p_1024x768.jpg",
            precio: 650,
            informacion: "***Nuestro Hotel ofrece todo lo que esta buscando. Estadia, descanso, spa, recreacion y mucho mas!***",
            votos:86,
            puntuacion:360,
            localidad:"Carlos Paz"
           },{
            id: "Continental",
            nombre: "Continental",
            servicio: "Hotel",
            imagen: "https://www.theknot.com/tk-media/images/9a506749-95e9-47cf-857e-5374f2205b93~rs_768.h",
            precio: 999,
            informacion: "Tu oasis de lujo en medio de la ciudad: Un hotel elegante y sofisticado, ideal para aquellos que buscan escapar del bullicio urbano y disfrutar de comodidades exclusivas.",
            votos:185,
            puntuacion:920,
            localidad:"Tandil"
           },{
            id: "Mar y sol",
            nombre: "Mar y sol",
            servicio: "Hotel",
            imagen: "https://media-cdn.tripadvisor.com/media/photo-s/29/52/5c/c5/signature-level-suite.jpg",
            precio: 599,
            informacion:" Descubre la magia del encanto costero: Un hotel frente al mar que combina un ambiente relajado con vistas impresionantes y actividades acuáticas para una experiencia inolvidable.",
            votos:35,
            puntuacion:126,
            localidad:"Mar del Plata"
           },{
            id: "Costas",
            nombre: "Costas",
            servicio: "Hotel",
            imagen: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/169571289.jpg?k=6f58d939f2e55505b4534ec799c325784868e790971e704228c1adab2a7b8597&o=&hp=1",
            precio: 350,
            informacion: "El hogar lejos de casa: Un hotel con un ambiente acogedor y cálido, donde te sentirás como en casa gracias a su servicio personalizado y atención a los detalles.",
            votos:2,
            puntuacion:10,
            localidad:"Carilo"
           },{
            id: "Restol",
            nombre: "Restol",
            servicio: "Restaurante",
            imagen: "https://images.adsttc.com/media/images/6027/27e3/f91c/8176/4b00/0347/large_jpg/8.jpg?1613178815",
            precio: 115,
            informacion: "Donde tus mascotas son bienvenidas a la mesa: Un restaurante acogedor que celebra el amor por los animales, brindando un ambiente amigable para que puedas disfrutar de deliciosas comidas junto a tus adoradas mascotas.",
            votos:85,
            puntuacion:296,
            localidad:"Tandil"
           },{
            id: "LePetitFriendly",
            nombre: "LePetitFriendly",
            servicio: "Restaurante",
            imagen: "https://hips.hearstapps.com/hmg-prod/images/los-mejores-restaurantes-que-tienes-que-probar-en-madrid-1644914076.jpeg?crop=0.753xw:1.00xh;0.125xw,0&resize=1200:*",
            precio: 190,
            informacion: "Una experiencia gastronómica para ti y tu fiel compañero: Un lugar donde la comida exquisita se combina con un ambiente relajado y la oportunidad de compartir momentos especiales con tu mascota mientras disfrutas de una comida memorable.",
            votos:33,
            puntuacion:165,
            localidad:"Merlo"
           },{
            id: "catdog",
            nombre: "catdog",
            servicio: "Veterinaria",
            imagen: "https://institutoferrer.com/wp-content/uploads/2020/08/AUXILIAR-VETERINARIA.jpg",
            precio: 12,
            informacion: "Veterinaria apta para animales pequeños. Cuidados y alimentos para todas las necesitades de su mascota",
            votos:33,
            puntuacion:165,
            localidad:"Tandil"
           },{
            id: "sendero Tapotu",
            nombre: "sendero Tapotu",
            servicio: "Actividad",
            imagen: "https://upload.wikimedia.org/wikipedia/commons/5/53/Paseo_Isla_Lejan%C3%ADa.JPG",
            precio: 0,
            informacion: "paseos al aire libre",
            votos:6,
            puntuacion:6,
            localidad:"Azul"
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