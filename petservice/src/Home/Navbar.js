import React, { useState } from 'react';
import Search from './Search';
import './Home.css';

function Navbar({onSearchClick}) {
  const [isCollapsed, setIsCollapsed] = useState(true);

  const handleToggle = () => {
    setIsCollapsed(!isCollapsed);
  };

  const handleSearchClick = () => {
    onSearchClick(); // Llama a la función proporcionada por el componente padre Home
  };

  const navbarClass = isCollapsed ? 'navbar-collapse collapse' : 'navbar-collapse collapse show';

  return (
    <nav className="navbar navbar-expand-lg justify-content-between">
      <button className="navbar-toggler" type="button" onClick={handleToggle}>
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className={navbarClass} id="navbarNav">
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
          <a className="nav-link" href="#" onClick={handleSearchClick}>Búsquedas</a>          
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Blog</a>
          </li>
          <li className="nav-item">
            <div className="search-container">
              <div className="search-wrapper">
                <Search />
              </div>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;




