import React, { useEffect, useState } from "react";
import Footer from '../components/Footer';
import Header from '../components/Header';
import '../styles/tabla.css';
import '../styles/portada.css';
import '../styles/registroFinanciero.css';

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
    if (ahorros === null) {
      alert("¡Primero ingresa tu saldo inicial!");
      return;
    }
    // Obtener la fecha actual
    const fechaActual = new Date();
  
    // Convertir la fecha del nuevo gasto a un objeto Date
    const fechaGasto = new Date(nuevoGasto.fecha);
  
    // Obtener la fecha hace dos meses
    const fechaDosMesesAtras = new Date();
    fechaDosMesesAtras.setMonth(fechaActual.getMonth() - 2);
  
    // Verificar si la fecha del nuevo gasto es en el futuro
    if (fechaGasto > fechaActual) {
      alert("No se puede ingresar una fecha del futuro.");
      return;
    }
  
    // Verificar si la fecha del nuevo gasto es mayor a dos meses atrás
    if (fechaGasto < fechaDosMesesAtras) {
      alert("La fecha del gasto debe ser dentro de los últimos dos meses.");
      return;
    }
    
    if (ahorros === null) {
      alert("¡Primero ingresa tu saldo inicial!");
      return;
    }

    // Validar que el precio sea mayor que cero
    if (nuevoGasto.precio <= 0 || isNaN(nuevoGasto.precio)) {
      alert("El precio debe ser mayor que cero y numérico.");
      return;
    }
  
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
        setGastos(prevGastos => [...prevGastos, {
          nombre: nuevoGasto.nombre,
          fecha: nuevoGasto.fecha,
          categoria: nuevoGasto.categoria,
          precio: nuevoGasto.precio
        }]);
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
  const sumaTotalPrecios = gastos && Array.isArray(gastos) && gastos.length > 0
  ? gastos.reduce((total, gasto) => total + parseFloat(gasto.precio), 0).toFixed(2)
  : "0.00";

  // Cálculo de los ahorros restantes
  const ahorrosRestantes = ahorros
    ? (ahorros - sumaTotalPrecios).toFixed(2)
    : "0.00";

    const mensajeSaldoInicial = ahorros ? null : (
      <p>
        ¡Recuerda ingresar tu saldo inicial para un mejor control financiero!
      </p>
    );

  return (
    <>
      <Header />
      <section className="sectionRegistro">
        <h1 className="tituloRegistro">Registro Financiero</h1>
        {mensajeSaldoInicial}
        <form className="formularioRegistro" onSubmit={handleSubmit}>
        <section className="campoFormulario">
          <label>
            Nombre del gasto:
            <input
              type="text"
              name="nombre"
              value={nuevoGasto.nombre}
              onChange={handleInputChange}
            />
          </label>
          </section>
          <section className="campoFormulario">
          <label>
            Fecha del gasto:
            <input
              type="date"
              name="fecha"
              value={nuevoGasto.fecha}
              onChange={handleInputChange}
            />
          </label>
          </section>
        <section className="campoFormulario">
          <label>
            Precio:
            <input
              type="number"
              name="precio"
              value={nuevoGasto.precio}
              onChange={handleInputChange}
            />
          </label>
            </section>
            <section className="campoFormulario">
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
        </section>
        <button type="submit" disabled={ahorros === null || parseFloat(ahorros) === 0}>Agregar Gasto</button>

        </form>
      </section>
      <Footer />
    </>
  );
}

export default RegistroFinanciero;
