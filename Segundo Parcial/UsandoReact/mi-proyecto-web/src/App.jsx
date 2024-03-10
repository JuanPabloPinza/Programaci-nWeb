import React, { useState } from 'react';
import Login from './Login';
import Portada from './pages/Portada';



function App() {
  const [isAuthenticated, setAuthenticated] = useState(false);

  console.log("Is Authenticated:", isAuthenticated);

  return (
    <div>
      {isAuthenticated ? (
        <>
          <Portada/>
        </>
      ) : (
        <Login onLogin={() => setAuthenticated(true)} />
      )}
    </div>
  );
}

export default App;

