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
    <div className="tarjetaBlog card shadow">
      <img className="imgTarjetaBlog card-img-top" src={image} alt={image} />
      <div className="conenedorParrafo card-body">
        <p className="descripcionTarjetaBlog card-text">{text}</p>
      </div>
      <Button className="btn btn-primary btn-sm btnAbrir" onClick={handleAbrirModal}> {/* Agregamos la clase 'btn-sm' */}
        Abrir
      </Button>
      <Modal show={modal} onHide={handleCerrarModal} centered>
        <Modal.Header closeButton={false}>
        </Modal.Header>
        <Modal.Body>
          <div className="tarjetaBlogModal">
            <img className="imgTarjetaBlog card-img-top" src={image} alt={image} />
            <div className="conenedorParrafo card-body">
              <p className="descripcionTarjetaBlog card-text">{text}</p>
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






