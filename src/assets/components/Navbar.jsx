import React, { useState } from 'react';
import { MdOutlineSearch } from "react-icons/md";
import { FaRegUser } from "react-icons/fa";
import { MdShoppingCart } from "react-icons/md";
import defaultlogo from '/VirtualVentSVG.svg';
import { FaBars } from "react-icons/fa";
import "../css/empresas.css";

function Navbar({ logo }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleToggle = () => {
    setMenuOpen(!menuOpen);
  }
  return (
      <>
        <nav className="navbar">
          <div className="navbar-logo">
            <img src={logo || defaultlogo} alt="Logo" />
          </div>
          
          <ul className={`navbar-links ${menuOpen ? 'active' : ''}`}>
            <li><a href="/">Inicio</a></li>
            <li><a href="#about">Nosotros</a></li>
            <li><a href="#contact">Tiendas</a></li>
          </ul>
          
          <button className="nav-toggle" onClick={handleToggle}>
            <FaBars />
          </button>
          
          <ul className={`navbar-icons ${menuOpen ? 'active' : ''}`}>
            <li className="icon"><a href=""><MdOutlineSearch /></a></li>
            <li className="icon"><a href=""><FaRegUser /></a></li>
            <li className="icon"><a href=""><MdShoppingCart /></a></li>
          </ul>
        </nav>
      </>
  );
}

export default Navbar;
