import React, { useState } from 'react';
import Login from './Login';
import Portada from './pages/Portada';
import Tabla from './Tabla';


function App() {
  const [isAuthenticated, setAuthenticated] = useState(false);
  const [correo, setCorreo] = useState('');
  console.log("Is Authenticated:", isAuthenticated);
  const handleLogin = (correoLogin) => {
    setAuthenticated(true);
    setCorreo(correoLogin); // Aquí guardamos el correo
  };
  return (
    <div>
      {isAuthenticated ? (
        <>
          <Portada/>
          <Tabla correo={correo}/>
        </>
      ) : (
        <Login onLogin={handleLogin} />
      )}
    </div>
  );
}

export default App;

