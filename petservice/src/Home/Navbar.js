import React, { useState } from 'react';
import Search from './Search';
import './Home.css';

function Navbar({onSearchClick, onHotelesClick, onAerolineasClick, onPaseadoresClick, onRestaurantesClick, onVeterinariasClick, onActividadesClick, /*onBlogClick*/ onMasClick}) {
  const [isCollapsed, setIsCollapsed] = useState(true);

  const handleToggle = () => {
    setIsCollapsed(!isCollapsed);
  };

  const handleSearchClick = () => {
    onSearchClick(); // Llama a la función proporcionada por el componente padre Home
  };

  const handleNavbarHotelesClick=()=>{
    onHotelesClick();
  };

  const handleNavbarAerolineasClick=()=>{
    onAerolineasClick();
  };

  const handleNavbarPaseadoresClick=()=>{
    onPaseadoresClick();
  };

  const handleNavbarRestaurantesClick=()=>{
    onRestaurantesClick();
  };

  const handleNavbarVeterinariasClick=()=>{
    onVeterinariasClick();
  };

  const handleNavbarActividadesClick=()=>{
    onActividadesClick();
  };

  // const handleNavbarBlogClick=()=>{
  //   onBlogClick();
  // };
const handleNavbarMasClick=()=>{
  onMasClick();
}
  const navbarClass = isCollapsed ? 'navbar-collapse collapse' : 'navbar-collapse collapse show';

  return (
    <nav className="navbar navbar-expand-lg justify-content-between">
      <button className="navbar-toggler" type="button" onClick={handleToggle}>
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className={navbarClass} id="navbarNav">
        <ul className="navbar-nav mr-auto text-center">
          <li className="nav-item">
            <a className="nav-link" href="#" onClick={handleNavbarHotelesClick}>Hoteles</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#" onClick={handleNavbarAerolineasClick}>Aerolíneas</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#"  onClick={handleNavbarPaseadoresClick}>Paseadores</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#"  onClick={handleNavbarRestaurantesClick}>Restaurantes</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#"  onClick={handleNavbarVeterinariasClick}>Veterinarias</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#"  onClick={handleNavbarActividadesClick}>Actividades</a>
          </li>
          <li className="nav-item">
          <a className="nav-link" href="#" onClick={handleSearchClick}>Búsquedas</a>          
          </li>
          {/* <li className="nav-item">
            <a className="nav-link" href="#" onClick={handleNavbarBlogClick}>Blog</a>
          </li> */}
          <li className="nav-item">
            <a className="nav-link" href="#" onClick={handleNavbarMasClick}>Más</a>
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




