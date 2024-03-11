import React, { useEffect, useState } from "react";
import Footer from '../components/Footer';

import Header from '../components/Header';
import '../styles/tabla.css';
import '../styles/portada.css'


function  RegistroFinanciero({correo}) {
  const [gastos, setGastos] = useState([]);
  const [nombreUsuario, setNombreUsuario] = useState('');
  const [ahorros, setAhorros] = useState('');
  const [nuevoGasto, setNuevoGasto] = useState({
    nombre: '',
    fecha: '',
    precio: 0,
    categoria: '',
  });

    // Función para manejar cambios en el formulario de nuevo gasto
    const handleNuevoGastoChange = (e) => {
        const { name, value } = e.target;
        setNuevoGasto((prevGasto) => ({
          ...prevGasto,
          [name]: value,
        }));
      };

      // Función para manejar el envío del formulario y agregar el nuevo gasto
const handleAgregarGasto = (e) => {
  e.preventDefault();
  // Lógica para guardar el nuevo gasto
  console.log("Nuevo gasto:", nuevoGasto);
  // Puedes enviar este nuevo gasto a la API o almacenarlo según tus necesidades
  // Realizar la solicitud para agregar el nuevo gasto
  fetch("http://localhost:3001/nuevoGasto", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      ...nuevoGasto,
      correo: correo,
    }),
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    })
    .then((data) => {
      console.log("Respuesta al agregar gasto:", data);

      // Verificar si la respuesta fue exitosa
      if (data.success) {
        // Recargar la lista de gastos después de agregar uno nuevo
        fetch("http://localhost:3001/gastos", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            correo: correo,
          }),
        })
          .then((response) => {
            if (!response.ok) {
              throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
          })
          .then((data) => {
            setGastos(data);
          })
          .catch((error) => {
            console.error("Error al obtener gastos después de agregar uno nuevo", error);
          });

        // Limpia el formulario después de un registro exitoso
        setNuevoGasto({
          nombre: '',
          fecha: '',
          precio: 0,
          categoria: '',
        });
      } else {
        // Manejo de errores en la respuesta de la API al agregar gasto
        console.error("Error al agregar gasto:", data.message);
        // Puedes agregar lógica para mostrar un mensaje de error al usuario
      }
    })
    .catch((error) => {
      // Manejo de errores al realizar la solicitud para agregar gasto
      console.error("Error al agregar gasto", error);
      // Puedes agregar lógica para mostrar un mensaje de error al usuario
    });
};


  console.log("Correo:", correo);
  console.log("Nombre Usuario:", nombreUsuario);
  console.log("AHORROSS:", ahorros);

  useEffect(() => {
    
    // Realizar la solicitud para obtener el nombre del usuario
    fetch(`http://localhost:3001/getNombre?correo=${correo}`)
      .then(response => response.json())
      .then(data => {
        if (data.success) {
          setNombreUsuario(data.nombre);
          setAhorros(data.ahorros);
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


// Cálculo de la suma total de precios
const sumaTotalPrecios = gastos.reduce((total, gasto) => total + gasto.precio, 0);

// Cálculo de los ahorros restantes
const ahorrosRestantes = ahorros - sumaTotalPrecios;

  return (
    <>
    <Header/>
    <section className="sectionTabla">
        <h1 className="tituloTabla">Registro Financiero</h1>
        <form onSubmit={handleAgregarGasto}>
          <label>
            Nombre del gasto:
            <input
              type="text"
              name="nombre"
              value={nuevoGasto.nombre}
              onChange={handleNuevoGastoChange}
            />
          </label>
          <label>
            Fecha del gasto:
            <input
              type="date"
              name="fecha"
              value={nuevoGasto.fecha}
              onChange={handleNuevoGastoChange}
            />
          </label>
          <label>
            Precio:
            <input
              type="number"
              name="precio"
              value={nuevoGasto.precio}
              onChange={handleNuevoGastoChange}
            />
          </label>
          <label>
            Categoría del gasto:
            <select
              name="categoria"
              value={nuevoGasto.categoria}
              onChange={handleNuevoGastoChange}
            >
              <option value="Vivienda">Vivienda</option>
              <option value="Alimentación">Alimentación</option>
                <option value="Transporte">Transporte</option>
                <option value="Salud">Salud</option>
                <option value="Educación">Educación</option>
                <option value="Entretenimiento">Entretenimiento</option>
                <option value="Otros">Otros</option>

              {/* Agrega las demás categorías */}
            </select>
          </label>
          <button type="submit">Agregar Gasto</button>
        </form>
      </section>
    <Footer/>
    </>
  );
}

export default RegistroFinanciero;