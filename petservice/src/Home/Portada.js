import React, { useState, useEffect } from 'react';
import Search from './Search';
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
import imagen11 from '../assets/img11.jpg';
import imagen12 from '../assets/img12.jpg';

function Portada() {
  const [index, setIndex] = useState(0);

  const imagenes = [
    imagen1,
    imagen2,
    imagen3,
    imagen4,
    imagen5,
    imagen6,
    imagen7,
    imagen8,
    imagen9,
    imagen10, 
    imagen11,
    imagen12
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex(index => {
        if (index + 1 >= imagenes.length) {
          return 0;
        } else {
          return index + 1;
        }
      });
    }, 10000);
  
    return () => clearInterval(interval);
  }, [imagenes.length]);
  

  return (
    <div className='portada-container'>
      <div className="portada">
        <img src={imagenes[index]} className="portada-img" alt="Imagen de portada"/>
        <div className="search-container">
          <div className="search-wrapper">
            <Search />
          </div>
        </div>
      </div>
    </div>
  );
  }

export default Portada;
