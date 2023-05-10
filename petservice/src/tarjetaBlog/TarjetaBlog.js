import React from 'react'
import { useState } from 'react'
import "./tarjetaBlog.css"



const TarjetBlog = ({ image, text, id }) => {

const [modal, setModal]=useState('tarjetaBlog');

function handleClickAbrirModal(e) {
 /* setModal('tarjetaBlogModal')  */
 const divContenedora= e.target.parentNode;
 divContenedora.className=setModal('tarjetaBlogModal');
}

function handleClickCerrarModal(e) {
  /* setModal('tarjetaBlogModal')  */
  const divContenedora= e.target.parentNode;
  divContenedora.className=setModal('tarjetaBlog');
 }


  return (
    <div id={`tarjetaBlog${id}`} className={modal}>
      <img className='imgTarjetaBlog'src={image} alt={image} />
      <div className='conenedorParrafo'>
        <p className='descripcionTarjetaBlog'>{text}</p>
      </div>
      <button className='btnAbrir' id={id} onClick={handleClickAbrirModal}>abrir</button>
      <button className='btnCerrar' id={id} onClick={handleClickCerrarModal}>X</button>
    </div>
  );
};

export default TarjetBlog;





