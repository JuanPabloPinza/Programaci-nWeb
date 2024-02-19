import React from 'react';
import './styles/index-style.css';

function Header() {
    return (
        <header>
            <a className="linkLogo" href="inicio.html">
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
        </header>
    );
}

export default Header;
