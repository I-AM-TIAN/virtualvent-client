import { MdOutlineSearch } from "react-icons/md";
import { FaRegUser } from "react-icons/fa";
import { MdShoppingCart } from "react-icons/md";
import defaultlogo from '/VirtualVentSVG.svg';

function Navbar({ logo }) {
  return (
    <>
      <nav className="navbar">
        <div className="navbar-logo">
          <img src={logo || defaultlogo} alt="Logo" />
        </div>
        <ul className="navbar-links">
          <li><a href="/">Inicio</a></li>
          <li><a href="#about">Nosotros</a></li>
          <li><a href="#contact">Tiendas</a></li>
        </ul>
        <ul className="navbar-icons">
          <li className="icon"><a href=""><MdOutlineSearch /></a></li>
          <li className="icon"><a href=""><FaRegUser /></a></li>
          <li className="icon"><a href=""><MdShoppingCart /></a></li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
