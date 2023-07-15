import React from 'react';

function NavBar2() {
  return (
    <nav className="navbar navbar-expand-lg justify-content-between navbar-dark bg-dark">
      <div className="navbar-collapse collapse show" id="navbarNav2">
        <ul className="navbar-nav mx-auto text-center justify-content-center align-items-center">
          <li className="nav-item mr-3">
            <a className="nav-link" href="#">Sección 1</a>
          </li>
          <li className="nav-item mr-3">
            <a className="nav-link" href="#">Sección 2</a>
          </li>
          <li className="nav-item mr-3">
            <a className="nav-link" href="#">Sección 3</a>
          </li>
          <li className="nav-item mr-3">
            <a className="nav-link" href="#">Sección 4</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar2;


