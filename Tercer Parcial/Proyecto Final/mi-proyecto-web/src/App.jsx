import React, {  useState, useEffect, createContext, useContext } from 'react';
import Login from './Login';
import Portada from './pages/Portada';
import Tabla from './Tabla';




export const AuthContext = createContext(); // Crear el contexto para la autenticación

function App() {
  
  const storedIsAuthenticated = JSON.parse(localStorage.getItem('isAuthenticated')) || false;
  const storedCorreo = localStorage.getItem('correo') || '';
  const storedNombre = localStorage.getItem('nombre') || ''; // Nuevo: Obtener el nombre del almacenamiento local


  const [isAuthenticated, setAuthenticated] = useState(storedIsAuthenticated);
  const [correo, setCorreo] = useState(storedCorreo);
  const [nombre, setNombre] = useState(storedNombre); // Nuevo: Estado para almacenar el nombre



  console.log("Is Authenticated:", isAuthenticated);

  const handleLogin = async(correoLogin,nombreUsuario) => {

    try {
      // Realizar la solicitud para obtener el nombre del usuario
      const response = await fetch(`http://localhost:3001/getNombre?correo=${correoLogin}`);
      const data = await response.json();

      console.log('Respuesta de la solicitud para obtener el nombre:', data);

      if (data.success) {
        setNombre(data.nombre);
      setAuthenticated(true);
      setCorreo(correoLogin);
      localStorage.setItem('isAuthenticated', JSON.stringify(true));
      localStorage.setItem('correo', correoLogin);
      localStorage.setItem('nombre', data.nombre);

      console.log("Nombre guardado1:", data.nombre);
      console.log("Correo guardado:", correoLogin);
      nombreUsuario = data.nombre;


      } else {
        console.error('Error al obtener el nombre del usuario:', data.message);
      }
    } catch (error) {
      console.error('Error en la solicitud para obtener el nombre del usuario:', error);
    }
    
    setAuthenticated(true);
    // setCorreo(correoLogin); // Aquí guardamos el correo
    // setNombre(nombreUsuario);  // Nuevo: Guardar el nombre

    console.log("Nombre guardado2:", nombreUsuario);  // Agrega esta línea
    console.log("Correo guardado:", correoLogin);  // Agrega esta línea
    
    // localStorage.setItem('isAuthenticated', JSON.stringify(true));
    // localStorage.setItem('correo', correoLogin);
    // localStorage.setItem('nombre', nombreUsuario); // Nuevo: Guardar el nombre en el almacenamiento local
  };

  const handleLogout = () => {
    setAuthenticated(false);
    setCorreo('');
    setNombre(''); // Nuevo: Limpiar el nombre al cerrar sesión

    // Limpiar la información en el almacenamiento local
    localStorage.removeItem('isAuthenticated');
    localStorage.removeItem('correo');
    localStorage.removeItem('nombre'); // Nuevo: Limpiar el nombre en el almacenamiento local
  };


   // Almacenar el estado de autenticación y el correo en localStorage cuando cambian
   useEffect(() => {
    localStorage.setItem('isAuthenticated', JSON.stringify(isAuthenticated));
    localStorage.setItem('correo', correo);
    localStorage.setItem('nombre', nombre); // Nuevo: Guardar el nombre en el almacenamiento local
    if (isAuthenticated) {
      console.log("Nombre guardado3:", nombre);
    }

  }, [isAuthenticated, correo, nombre]);

  return (
    
    <AuthContext.Provider value={{ isAuthenticated, handleLogout,nombre }}>
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
    </AuthContext.Provider>
  );
}

export default App;

