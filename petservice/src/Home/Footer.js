import React from 'react';
import { useState } from 'react';
import { Modal, Button } from "react-bootstrap";

import imagen1 from '../assets/facebook.png';
import imagen2 from '../assets/instagram.png';
import imagen3 from '../assets/twitter.png';

function Footer() {
  const [seleccionarPregunta, setSeleccionarPregunta] = useState(null);
  const [hoveredPregunta, setHoveredPregunta] = useState(null);
  const [mostrarModal, setMostrarModal] = useState(false);

  const handlePreguntaClick = (pregunta) => {
    setSeleccionarPregunta(pregunta);
    setMostrarModal(true);
  };

  const handlePreguntaMouseEnter = (pregunta) => {
    setHoveredPregunta(pregunta);
  };

  const handlePreguntaMouseLeave = () => {
    setHoveredPregunta(null);
  };

  const renderizarRespuesta = (pregunta) => {
    let respuesta = "";

    switch (pregunta) {
      case "¿Cómo hago una reserva de hotel?":
        respuesta =
          "Una vez que haya encontrado un hotel en el que le gustaría hospedarse, reservar una habitación es fácil. Haga clic en el sitio web del hotel para completar una reserva directamente con ellos.";
        break;
      case "¿Cómo puedo registrar a mi mascota en el sitio?":
        respuesta =
          "Para agregar una mascota al sitio web, ingrese en https://www.petservice.com/login/";
        break;
      case "¿Cómo busco hoteles que aceptan mascotas?":
        respuesta =
          "Buscar hoteles que aceptan mascotas en Pet Service es fácil, haga clic en la sección Hoteles en la parte superior de la página y busque hoteles por ubicación";
        break;
        case "> Ver más":
          respuesta = (
            <>
              <p className='pregunta'>- ¿El sitio ofrece recomendaciones de veterinarios o servicios de emergencia para mascotas?</p>
              <p>Sí,el sitio ofrece recomendaciones de veterinarios y servicios de emergencia para mascotas. Contamos con una sección especial donde puedes encontrar información sobre veterinarios de confianza y servicios de emergencia cercanos a tu ubicación.</p>
              <p className='pregunta'>-¿El sitio proporciona información sobre parques o áreas de recreación para mascotas?</p>
              <p>Sí, el sitio proporciona información detallada sobre parques y áreas de recreación para mascotas. Encontrarás una sección dedicada a destacar parques, espacios al aire libre y áreas recreativas</p>
            </>
          );
          break;
        default:
          respuesta = "";
      }

    return <p>{respuesta}</p>;
  };

  const handleCloseModal = () => {
    setSeleccionarPregunta(null);
    setMostrarModal(false);
  };

  return (
    <footer className="footer py-5 mb-4">
      <div className="container">
        <div className="row">
          <div className="col-md-5">
            <h4>Sobre nosotros</h4>
            <p className="smaller-text">
              En Pet Service, nos dedicamos a promover un estilo de vida pet friendly, donde las mascotas son valoradas y disfrutan de experiencias memorables junto a sus dueños. Brindamos información confiable y actualizada sobre cada lugar, trabajando de cerca con establecimientos comprometidos con el bienestar de las mascotas, asegurándonos de que ofrezcan servicios y comodidades adecuadas para ellas. ¡Bienvenido a nuestra comunidad, donde las mascotas son mimadas y celebradas en cada paso del camino!".
            </p>
          </div>
          <div className="col-md-3">
            <h4>Contáctenos</h4>
            <ul className="list-unstyled">
              <li>Dirección: Calle Principal 123</li>
              <li>Teléfono: 123-456-789</li>
              <li>Email: info@petservice.com</li>
            </ul>
          </div>
          <div className="col-md-3">
            <h4>Preguntas frecuentes</h4>
            <ul className="list-unstyled">
              <li onClick={() => handlePreguntaClick('¿Cómo hago una reserva de hotel?')}
                  onMouseEnter={() => handlePreguntaMouseEnter('¿Cómo hago una reserva de hotel?')}
                  onMouseLeave={handlePreguntaMouseLeave}style={{ textDecoration: hoveredPregunta === '¿Cómo hago una reserva de hotel?' ? 'underline' : 'none'}}>¿Cómo hago una reserva de hotel?
              </li>
              <li onClick={() => handlePreguntaClick('¿Cómo puedo registrar a mi mascota en el sitio?')}
                  onMouseEnter={() => handlePreguntaMouseEnter('¿Cómo puedo registrar a mi mascota en el sitio?')}
                  onMouseLeave={handlePreguntaMouseLeave} style={{ textDecoration: hoveredPregunta === '¿Cómo puedo registrar a mi mascota en el sitio?' ? 'underline' : 'none'}}>¿Cómo puedo registrar a mi mascota en el sitio?
              </li>
              <li onClick={() => handlePreguntaClick('¿Cómo busco hoteles que aceptan mascotas?')}
                  onMouseEnter={() => handlePreguntaMouseEnter('¿Cómo busco hoteles que aceptan mascotas?')}
                  onMouseLeave={handlePreguntaMouseLeave} style={{textDecoration: hoveredPregunta === '¿Cómo busco hoteles que aceptan mascotas?' ? 'underline' : 'none'}}>¿Cómo busco hoteles que aceptan mascotas?
              </li>
              <li onClick={() => handlePreguntaClick('> Ver más')}
                  onMouseEnter={() => handlePreguntaMouseEnter('> Ver más')}
                  onMouseLeave={handlePreguntaMouseLeave} style={{textDecoration: hoveredPregunta === '> Ver más' ? 'underline' : 'none'}}>{'> Ver más'}
              </li>
              </ul>
            </div>
              <div className="col-md-1"></div>
              <div className="col-md-12 text-center">
                  <ul className="list-inline">
                    <li className="list-inline-item"><a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="icono"><img src={imagen1} alt="Facebook" style={{ width: '30px' }} /></a>
                    </li>
                    <li className="list-inline-item"><a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="icono"><img src={imagen2} alt="Instagram" style={{ width: '30px' }} /></a>
                    </li>
                    <li className="list-inline-item"><a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="icono"><img src={imagen3} alt="Twitter" style={{ width: '30px' }} /></a>
                    </li>
                    </ul>
              </div>
            </div>
        </div>
            <Modal show={mostrarModal} onHide={handleCloseModal} className='slow-fade'>
                <Modal.Header>
                  <Modal.Title>Preguntas frecuentes</Modal.Title>
                </Modal.Header>
              <Modal.Body>{seleccionarPregunta && renderizarRespuesta(seleccionarPregunta)}</Modal.Body>
              <Modal.Footer><Button className='btn btn-outline-primary me-2' onClick={handleCloseModal}>Cerrar</Button></Modal.Footer>
            </Modal>
        </footer>
  )
}
export default Footer;


