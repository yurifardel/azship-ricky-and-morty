import React from "react";
import { NavLink, Link } from "react-router-dom";
import './Navbar.scss'

const Navbar: React.FC = () =>{
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light mb-4">
      <div className="container">
        <Link to="/" className="navbar-brand fs-3 ubuntu">
          Rick and Morty
        </Link>
    
        <button
          id="btn"
          className="navbar-toggler border-0"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="fas fa-bars open text-dark"></span>
          <span className="fas fa-times close text-dark"></span>
        </button>
        <div
          className="navbar-collapse justify-content-end"
          id="navbarNavAltMarkup"
        >
          <div className="navbar-nav fs-5">
            <NavLink to="/" className="nav-link" >
              Characters
            </NavLink>
            <NavLink className='nav-link' to="/episodes"  >
              Episode
            </NavLink>
            
            
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
