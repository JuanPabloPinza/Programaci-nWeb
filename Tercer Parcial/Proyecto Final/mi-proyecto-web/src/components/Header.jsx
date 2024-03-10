import React, { useContext } from 'react';
import '../styles/header.css';
import { AuthContext } from '../App'; // Importar el contexto de autenticación


function Header() {
    const { isAuthenticated, handleLogout, nombre } = useContext(AuthContext); // Utilizar useContext para acceder al contexto

    

   
    



    return (
        <header>
            <a className="linkLogo" href="#">
                <img className="logo" src="images/ExpenseMaster.png" alt="logo" />
            </a>
            <nav>
                <ul className="linksDelNav">
                    <li><a target="_blank" href="https://github.com/JuanPabloPinza/ProgramacionWeb">Sobre Nosotros</a></li>
                    <li><a href="formularioRegistroFinancieroPersonal.php">Registro Financiero Personal</a></li>
                    <li><a href="#nuestrosServicios">Nuestros Servicios</a></li>
                    <li><a href="#preguntasFrecuentes">Q&A</a></li>
                </ul>
            </nav>

            

            <a className="CTA" target="_blank" href="https://www.equifax.com.ec/miscreditos/blog/ahorro"><button className="colorBotonPrincipal">Tips de Ahorro</button></a>
            <hr size="1px" color="#383241" />
            <hr size="1px" color="rgb(8, 6, 11)" />

            {isAuthenticated && (
            <>
            <span className="nombreUsuario">¡Hola, {nombre || 'Usuario'}!</span>
            <button onClick={handleLogout} className="colorBotonPrincipal">
              Cerrar Sesión
            </button>
            </>
            
            )}
        </header>
    );
}

export default Header;
