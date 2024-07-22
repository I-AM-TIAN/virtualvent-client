import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom"; // Importa useNavigate
import Navbar from "./Navbar";
import "../css/empresas.css";

const Empresas = () => {
  const [empresas, setEmpresas] = useState([]);
  const navigate = useNavigate(); // Inicializa useNavigate

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api/tiendas")
      .then((response) => {
        setEmpresas(response.data);
      })
      .catch((error) => {
        console.error("Error fetching empresas:", error);
      });
  }, []);

  const handleRedirect = (url) => {
    navigate(`/store/${url}`); // Redirige a la URL específica de la tienda
  };

  return (
    <div>
      <header className="header">
        <Navbar />
      </header>
      <h1>Tiendas Disponibles</h1>
      <div className="company-list">
        {empresas.map((empresa) => (
          <div className="company-card" key={empresa.id}>
            <img
              src={`http://127.0.0.1:8000/storage/${empresa.logo}`}
              alt={empresa.razon_social}
              className="company-logo"
            />
            <h3 className="company-name">{empresa.razon_social}</h3>
            <p className="company-description">{empresa.descripcion}</p>
            <button
              onClick={() => handleRedirect(empresa.url)} // Usa el slug para la redirección
              className="company-button"
            >
              Ir a la tienda
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Empresas;
