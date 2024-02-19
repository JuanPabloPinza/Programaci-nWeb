import React from 'react';
import Header from './Header';
import PortadaPrincipal from './PortadaPrincipal';
import SegundaSeccion from './SegundaSeccion';
import Footer from './Footer';
import PreguntasFrecuentes from './FAQ';
import './styles/index-style.css';

function App() {
  return (
    <div>
      <Header />
      <PortadaPrincipal />
      <SegundaSeccion />
      <PreguntasFrecuentes />
      <Footer />

    </div>
  );
}

export default App;

