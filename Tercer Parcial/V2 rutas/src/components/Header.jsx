import React, { useContext } from "react";
import { Link } from 'react-router-dom'; // Importar Link desde react-router-dom

import "../styles/header.css";
import { AuthContext } from "../App"; // Importar el contexto de autenticación


function Header() {
  const { isAuthenticated, handleLogout, nombre } = useContext(AuthContext); // Utilizar useContext para acceder al contexto

  return (
    <header>
      <Link to="/" className="linkLogo" > {/* Utilizar Link para navegar a la página principal */}
        <img className="logo" src="images/ExpenseMaster.png" alt="logo" />
      </Link>
      <nav>
        <ul className="linksDelNav">
          <li>
            <a target="_blank" href="https://github.com/JuanPabloPinza/ProgramacionWeb"> Sobre Nosotros</a>
          </li>
          <li>
            <Link  to="/tabla" > Balance de Cuenta </Link>
          </li>
          <li>
            <Link  to="/registroFinanciero" > Regristro Financiero </Link>
          </li>
          
          <li>
            <Link to="/preguntasFrecuentes">Q&A</Link >
          </li>
          {isAuthenticated && (
            <>
              <li>
                <span className="nombreUsuario">
                  ¡Hola, {nombre || "Usuario"}!
                </span>
              </li>
              <li>
                <button onClick={handleLogout} className="colorBotonPrincipal">
                  Cerrar Sesión
                </button>
              </li>
            </>
          )}
        </ul>
      </nav>

      <hr size="1px" color="#383241" />
      <hr size="1px" color="rgb(8, 6, 11)" />
    </header>
  );
}

export default Header;
