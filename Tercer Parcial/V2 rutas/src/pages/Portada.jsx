import React from 'react';
import '../styles/portada.css';
import Footer from '../components/Footer';
import Header from '../components/Header';
import SegundaSeccion from '../SegundaSeccion';
import PreguntasFrecuentes from './FAQ';




function Portada() {
    return (
        <>
        <Header/>
        <main id="main">
            <article className="portadaPrincipal">
                <section className="textoPortada">
                    <h1>ExpenseMaster</h1>
                    <p className="sloganPortada"><i>"Ahorra hoy, vive mejor mañana"</i></p>
                    <a target="_blank" href="https://www.principal.com/es/personas/vida-y-dinero/cinco-pasos-para-fijar-tus-metas-financieras-este-a%C3%B1o"><button className="botonPortada">Establece Metas</button></a>
                </section>
                <section className="imagenPortada"><img src="images/ChanchitoMonederoLogo.png" /></section>
            </article>
        </main>
        <SegundaSeccion/>
        
        <Footer/>
        </>
    );
}

export default Portada;
