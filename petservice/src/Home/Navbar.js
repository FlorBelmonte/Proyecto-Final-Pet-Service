import React from 'react';
import './Home.css'

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg  justify-content-between">
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse ml-auto" id="navbarNav">
        <ul className="navbar-nav mr-auto text-center">
          <li className="nav-item">
            <a className="nav-link" href="#">Hoteles</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Aerolíneas</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Paseadores</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Restaurantes</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Veterinarias</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Actividades</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Paseos</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Blog</a>
          </li>
        </ul>

      </div>
    </nav>
  );
}

export default Navbar;
