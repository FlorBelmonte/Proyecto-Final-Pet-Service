import React from 'react';
import { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import "./tarjetaBlog.css";

const TarjetBlog = ({ image, text, id }) => {
  const [modal, setModal] = useState(false);

  const handleAbrirModal = () => {
    setModal(true);
  };

  const handleCerrarModal = () => {
    setModal(false);
  };

  return (
    <div className="tarjetaBlog">
      <img className="imgTarjetaBlog" src={image} alt={image} />
      <div className="conenedorParrafo">
        <p className="descripcionTarjetaBlog">{text}</p>
      </div>
      <Button className="btnAbrir" onClick={handleAbrirModal}>
        Abrir
      </Button>
      <Modal show={modal} onHide={handleCerrarModal} centered>
        <Modal.Header closeButton={false}>
        </Modal.Header>
        <Modal.Body>
          <div className="tarjetaBlogModal">
            <img className="imgTarjetaBlog" src={image} alt={image} />
            <div className="conenedorParrafo">
              <p className="descripcionTarjetaBlog">{text}</p>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleCerrarModal}>
            Cerrar
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default TarjetBlog;






