import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Empresas from './assets/components/Corporativos';
import StoreDetails from './assets/components/Shop/StoreDetails';
import About from './assets/components/About';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Empresas />} />
        <Route path="/empresas" element={<Empresas />} />
        <Route path="/nosotros" element={<About />} />
        <Route path="/store/:url" element={<StoreDetails />} />
        {/* Otras rutas aquí */}
      </Routes>
    </Router>
  );
};

export default App;
