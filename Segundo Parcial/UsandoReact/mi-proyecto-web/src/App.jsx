import React, { useState } from 'react';
import Login from './Login';
import Header from './components/Header';
import Portada from './pages/Portada';
import SegundaSeccion from './SegundaSeccion';
import Footer from './components/Footer';
import PreguntasFrecuentes from './FAQ';



function App() {
  const [isAuthenticated, setAuthenticated] = useState(false);

  console.log("Is Authenticated:", isAuthenticated);

  return (
    <div>
      {isAuthenticated ? (
        <>
          <Header />
          <Portada/>
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

