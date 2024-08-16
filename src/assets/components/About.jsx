import React from "react";
import image1 from "/image.png";
import image2 from "/equipotdc.jpg";
import "../css/about.css";
import Navbar from "./Navbar";

const About = () => {
  return (
    <>
      <Navbar />
      <div className="vir-container">
        <section className="vir-section">
          <h2>¿Qué buscamos?</h2>
          <div className="vir-content">
            <p>
              VirtualVent es una plataforma de software cooperativa que busca
              apoyar la adopción del comercio electrónico cooperativo,
              enfocándose en la colaboración, equidad y solidaridad en lugar de
              maximizar beneficios individuales, esto incluye, la promoción de
              productos y servicios cooperativos en línea, para mejorar la
              presencia digital de las cooperativas, con el fin de promover un
              desarrollo económico sostenible.
            </p>
            <img src={image2} alt="Equipo Virtual Vent" />
          </div>
        </section>

        <section className="vir-section">
          <h2>¿Dónde surgió la idea?</h2>
          <div className="vir-content">
            <img src={image1} alt="Misión Virtual Vent" />
            <p>
                Desde la cooperativa TransDigitalCoop, apoyada por la Universidad Cooperativa de Colombia, se ha considerado el desarrollo de la plataforma cooperativa “VirtualVent”. Esta plataforma viene siendo desarrollada por estudiantes que hacen parte de la cooperativa y además son estudiantes de la universidad.
            </p>
          </div>
        </section>

      </div>
    </>
  );
};

export default About;
