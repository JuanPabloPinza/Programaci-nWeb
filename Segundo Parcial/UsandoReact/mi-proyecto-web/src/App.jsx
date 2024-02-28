import React, { useState } from 'react';
import Login from './Login';
import Header from './Header';
import PortadaPrincipal from './PortadaPrincipal';
import SegundaSeccion from './SegundaSeccion';
import Footer from './Footer';
import PreguntasFrecuentes from './FAQ';



function App() {
  const [isAuthenticated, setAuthenticated] = useState(false);

  console.log("Is Authenticated:", isAuthenticated);

  return (
    <div>
      {isAuthenticated ? (
        <>
          <Header />
          <PortadaPrincipal />
          <SegundaSeccion />
          <PreguntasFrecuentes />
          <Footer />
        </>
      ) : (
        <Login onLogin={() => setAuthenticated(true)} />
      )}
    </div>
  );
}

export default App;

