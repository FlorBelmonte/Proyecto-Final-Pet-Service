// eslint-disable-next-line
import React, { useState, useEffect } from 'react';
import './Home.css'
import img1 from '../assets/perro.png';
import img2 from '../assets/lago.jpg';
import paisajeImg from '../assets/paisaje.jpg';
import logosImg from '../assets/logos2.png';
import imagen1 from '../assets/img1.jpg';
import imagen2 from '../assets/img2.jpg';
import imagen3 from '../assets/img3.jpg';
import imagen4 from '../assets/img4.jpg';
import imagen5 from '../assets/img5.jpg';
import imagen6 from '../assets/img6.jpg';
import imagen7 from '../assets/img7.jpg';
import imagen8 from '../assets/img8.jpg';
import imagen9 from '../assets/img9.jpg';
import imagen10 from '../assets/img10.jpg';
import imagen12 from '../assets/img12.jpg';
import imagen13 from '../assets/img13.jpg';

function Portada() {
  const [index, setIndex] = useState(0);

  const imagenes = [
    img2,
    paisajeImg,
    imagen4,
    imagen5,
    imagen1,
    imagen6,
    imagen7,
    imagen8,
    imagen9,
    imagen2,
    imagen10,
    imagen3,
    imagen12,
    imagen13,
  ];

  const fondoImgStyle = {
    backgroundImage: `url(${imagenes[index]})`,
  };

  const perroImgStyle = {
    opacity: index > 1 ? 0.7 : 1, 
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1 >= imagenes.length ? 0 : prevIndex + 1));
    }, 10000);

    return () => clearInterval(interval);
  }, [index, imagenes.length]);

  return (
    <div className="portada-container">
      <div className="portada-img">
        <div className="fondo-img" style={fondoImgStyle}></div>
        <div className="contenido-especial">
          {index === 0 && (
            <>
              <img
                src={img1}
                className="perro-img img-fluid animate__animated animate__fadeInRight"
                alt={`Imagen de portada ${index + 1}`}
                style={perroImgStyle}
              />
              <div className="texto-imagen-fondo text-center animate__animated animate__fadeInRight">
                <div className="linea1">
                  <h1 className="titulo-texto publicidad">TE AYUDAMOS A ELEGIR</h1>
                </div>
                <div className="linea2">
                  <h1 className="titulo-texto publicidad">UN HOTEL PARA TU MASCOTA</h1>
                  <p className="ubicacion-texto">En cualquier parte del país!</p>
                </div>
              </div>
            </>
          )}
          {index === 1 && (
            <>
              <img
                src={logosImg}
                className="perro-montaje img-fluid animate__animated animate__fadeInRight"
                alt={`Imagen de portada ${index + 1}`}
                style={perroImgStyle}
              />
              <div className="texto-imagen-fondo text-center animate__animated animate__fadeInRight">
                <div className="linea3">
                  <h1 className="titulo-texto publicidad2">VIAJAR CON TU MASCOTA</h1>
                </div>
                <div className="linea4">
                  <h1 className="titulo-texto publicidad2">NUNCA FUÉ TAN FÁCIL</h1>
                  <p className="ubicacion-texto2">únete a nosotros!</p>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Portada;
