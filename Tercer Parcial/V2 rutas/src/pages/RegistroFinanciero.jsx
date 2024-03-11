import React, { useEffect, useState } from "react";
import Footer from '../components/Footer';
import Header from '../components/Header';
import '../styles/tabla.css';
import '../styles/portada.css';

function RegistroFinanciero({ correo }) {
  const [gastos, setGastos] = useState([]);
  const [nombreUsuario, setNombreUsuario] = useState('');
  const [ahorros, setAhorros] = useState('');
  const [nuevoGasto, setNuevoGasto] = useState({
    nombre: '',
    fecha: '',
    precio: 0,
    categoria: '',
  });

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

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNuevoGasto(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Realizar la solicitud para insertar el nuevo gasto
    fetch("http://localhost:3001/insertarGasto", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        correo: correo,
        nombre_gasto: nuevoGasto.nombre,
        fecha_gasto: nuevoGasto.fecha,
        categoria_gasto: nuevoGasto.categoria,
        precio: nuevoGasto.precio
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Respuesta de la base de datos al insertar el gasto:", data);
        if (data.success) {
          // Actualizar la lista de gastos si la inserción fue exitosa
          setGastos(prevGastos => [...prevGastos, nuevoGasto]);
          // Limpiar el estado del nuevo gasto
          setNuevoGasto({
            nombre: '',
            fecha: '',
            precio: 0,
            categoria: ''
          });
        } else {
          console.error("Error al insertar el nuevo gasto:", data.message);
        }
      })
      .catch((error) => {
        console.error("Error al insertar el nuevo gasto:", error);
      });
  };

  // Cálculo de la suma total de precios
  const sumaTotalPrecios = gastos.reduce((total, gasto) => total + gasto.precio, 0);

  // Cálculo de los ahorros restantes
  const ahorrosRestantes = ahorros - sumaTotalPrecios;

  return (
    <>
      <Header />
      <section className="sectionTabla">
        <h1 className="tituloTabla">Registro Financiero</h1>
        <form onSubmit={handleSubmit}>
          <label>
            Nombre del gasto:
            <input
              type="text"
              name="nombre"
              value={nuevoGasto.nombre}
              onChange={handleInputChange}
            />
          </label>
          <label>
            Fecha del gasto:
            <input
              type="date"
              name="fecha"
              value={nuevoGasto.fecha}
              onChange={handleInputChange}
            />
          </label>
          <label>
            Precio:
            <input
              type="number"
              name="precio"
              value={nuevoGasto.precio}
              onChange={handleInputChange}
            />
          </label>
          <label>
            Categoría del gasto:
            <select
              name="categoria"
              value={nuevoGasto.categoria}
              onChange={handleInputChange}
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
      <Footer />
    </>
  );
}

export default RegistroFinanciero;
