import React, { useEffect, useState } from "react";
import Footer from "../components/Footer";

import Header from "../components/Header";
import "../styles/tabla.css";
import "../styles/portada.css";

function Tabla({ correo }) {
  const [gastos, setGastos] = useState([]);
  const [nombreUsuario, setNombreUsuario] = useState("");
  const [ahorros, setAhorros] = useState("");
  const [editingGasto, setEditingGasto] = useState(null); // Estado para almacenar el gasto que se está editando

  console.log("Correo:", correo);
  console.log("Nombre Usuario:", nombreUsuario);
  console.log("AHORROSS:", ahorros);

  useEffect(() => {
    // Realizar la solicitud para obtener el nombre del usuario
    fetch(`http://localhost:3001/getNombre?correo=${correo}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          setNombreUsuario(data.nombre);
          setAhorros(data.ahorros);
        } else {
          console.error(
            "Error al obtener el nombre del usuario:",
            data.message
          );
        }
      })
      .catch((error) => {
        console.error(
          "Error en la solicitud para obtener el nombre del usuario:",
          error
        );
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

  const eliminarGasto = (id_gasto) => {
    fetch("http://localhost:3001/borrarGasto", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id_gasto: id_gasto,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          // Si el gasto se eliminó exitosamente, actualizamos la lista de gastos
          setGastos(gastos.filter((gasto) => gasto.id_gasto !== id_gasto));
        } else {
          console.error("Error al eliminar el gasto:", data.message);
        }
      })
      .catch((error) => {
        console.error("Error al eliminar el gasto:", error);
      });
  };

  const editarGasto = (gasto) => {
    setEditingGasto(gasto); // Establecer el gasto actual como el gasto que se está editando
    // Aquí podrías mostrar un popup/modal con un formulario prellenado con los detalles del gasto para editar
  };

  const guardarEdicionGasto = (id_gasto, nuevoGasto) => {
    // Aquí debes enviar una solicitud al servidor para actualizar el gasto en la base de datos
    fetch("http://localhost:3001/editarGasto", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id_gasto: id_gasto,
        nuevoGasto: nuevoGasto,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          // Actualizar la lista de gastos en el estado del componente con los datos actualizados
          setGastos(gastos.map(g => g.id_gasto === id_gasto ? data.gastoActualizado : g));
          setEditingGasto(null); // Desactivar el modo de edición
        } else {
          console.error("Error al editar el gasto:", data.message);
        }
      })
      .catch((error) => {
        console.error("Error al editar el gasto:", error);
      });
  };

  // Cálculo de la suma total de precios
  const sumaTotalPrecios = gastos
    .reduce((total, gasto) => total + gasto.precio, 0)
    .toFixed(2);

  // Cálculo de los ahorros restantes
  const ahorrosRestantes = (ahorros - sumaTotalPrecios).toFixed(2);

  return (
    <>
      <Header />
      <section className="sectionTabla">
        <h1 className="tituloTabla">Balance de Cuenta - {nombreUsuario}</h1>
        <h2
          style={{
            paddingTop: "20px",
            color: "#f4eeff",
            marginLeft: "-48%",
            fontSize: "25px",
          }}
          className="tituloSeccion"
        >
          Mis ahorros totales:{" "}
          <span className="palabraOtroColor">${ahorros}</span>
        </h2>
        <table>
          <thead>
            <tr>
              <th>Nombre del gasto</th>
              <th>Fecha del gasto</th>
              <th>Precio</th>
              <th>Categoría del gasto</th>
              <th>Acciones</th> {/* Nueva columna para el botón Eliminar */}
            </tr>
          </thead>
          <tbody>
            {Array.isArray(gastos) && gastos.length > 0 ? (
              gastos.map((gasto) => (
                <tr key={gasto.id_gasto}>
                  <td>{gasto.nombre_gasto}</td>
                  <td>{new Date(gasto.fecha_gasto).toLocaleDateString()}</td>
                  <td>${gasto.precio.toFixed(2)}</td>
                  <td>{gasto.categoria_gasto}</td>
                  <td>
                    <button onClick={() => eliminarGasto(gasto.id_gasto)}>
                      Eliminar
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5">No hay gastos disponibles</td>
              </tr>
            )}
            {/* Fila para la suma total de precios y los ahorros restantes */}
            <tr>
              <td colSpan="2">
                <strong>TOTAL:</strong>
              </td>
              <td>
                <strong>
                  $
                  {gastos
                    .reduce((total, gasto) => total + gasto.precio, 0)
                    .toFixed(2)}
                </strong>
              </td>
              <td colSpan="2">
                <strong>Ahorros restantes:</strong> $
                {ahorros -
                  gastos
                    .reduce((total, gasto) => total + gasto.precio, 0)
                    .toFixed(2)}
              </td>
            </tr>
          </tbody>
        </table>
      </section>
      <Footer />
    </>
  );
}

export default Tabla;
