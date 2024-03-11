import React, { useEffect, useState } from "react";
import Footer from '../components/Footer';

import Header from '../components/Header';
import '../styles/tabla.css';
import '../styles/portada.css'


function Tabla({correo}) {
  const [gastos, setGastos] = useState([]);
  const [nombreUsuario, setNombreUsuario] = useState('');
  console.log("Correo:", correo);
  console.log("Nombre Usuario:", nombreUsuario);

  useEffect(() => {
    
    // Realizar la solicitud para obtener el nombre del usuario
    fetch(`http://localhost:3001/getNombre?correo=${correo}`)
      .then(response => response.json())
      .then(data => {
        if (data.success) {
          setNombreUsuario(data.nombre);
        } else {
          console.error('Error al obtener el nombre del usuario:', data.message);
        }
      })
      .catch(error => {
        console.error('Error en la solicitud para obtener el nombre del usuario:', error);
      });

    // Realizar la solicitud para obtener los gastos
    
    
    fetch("http://localhost:3001/gastos", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        correo: correo,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Respuesta de la base de datos en gastos:", data);
        setGastos(data); // Cambiado de data.gastos a data
        console.log("Gastos:", data); // Cambiado de data.gastos a data
      })
      .catch((error) => {
        console.error("Error al obtener gastos", error);
      });
  }, [correo]);

  return (
    <>
    <Header/>
    <section className="sectionTabla">
      <h1 className="tituloTabla">MIS GASTOS PERSONALES - {nombreUsuario}</h1>
    <table>
      <thead>
        <tr>
          <th>Nombre del gasto</th>
          <th>Fecha del gasto</th>
          <th>Categoría del gasto</th>
        </tr>
      </thead>
      <tbody>
      {Array.isArray(gastos) && gastos.length > 0 ? (
          gastos.map((gasto) => (
            <tr key={gasto.id_gasto}>
              <td>{gasto.nombre_gasto}</td>
              <td>{new Date(gasto.fecha_gasto).toLocaleDateString()}</td>
              <td>{gasto.categoria_gasto}</td>
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan="3">No hay gastos disponibles</td>
          </tr>
        )}
      </tbody>
    </table>
    </section>
    <Footer/>
    </>
  );
}

export default Tabla;