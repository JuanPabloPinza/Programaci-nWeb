import React from 'react';
import './styles/index-style.css';

function SegundaSeccion() {
    return (
        <article className="segundaSeccion">
            <h1 className="tituloSeccion">Toma el <span className="palabraOtroColor">Control</span></h1>
            <div className="divContenedor">
                <div className="divImagen">
                  
                    <img style={{ width: '330px' }} src="../images/lluvia-de-meteoros.png" alt="" />
                </div>
                <div className="divInformacion">
                    <div className="itemContenedor">
                        
                        <img src="../images/lista-de-verificacion.png" style={{ width: '100px' }} alt="ImgDiv" />
                        <h3 style={{ color: '#24a5b7' }}>Lleva un Registro</h3>
                        <p>Mantén un control total sobre tus finanzas con nuestra herramienta de registro de gastos.</p>
                    </div>
                    <div className="itemContenedor">
                        
                        <img src="../images/objetivo.png" style={{ width: '100px' }} alt="ImgDiv" />
                        <h3 style={{ color: '#24a5b7' }}>Apunta a Objetivos</h3>
                        <p>Establece metas financieras y visualiza tu progreso con nuestro sistema de objetivos.</p>
                    </div>
                    <div className="itemContenedor">
                        <img src="../images/calendario.png" style={{ width: '100px' }} alt="ImgDiv" />
                        <h3 style={{ color: '#24a5b7' }}>Lleva las Fechas</h3>
                        <p>Programa recordatorios y mantén un seguimiento de tus próximos pagos y fechas importantes con nuestro calendario integrado.</p>
                    </div>
                </div>
            </div>
        </article>
    );
}

export default SegundaSeccion;
