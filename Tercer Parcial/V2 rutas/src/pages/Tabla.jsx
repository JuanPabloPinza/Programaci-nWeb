import React, { useEffect, useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import "../styles/tabla.css";
import "../styles/portada.css";

function Tabla({ correo }) {
  const [gastos, setGastos] = useState([]);
  const [nombreUsuario, setNombreUsuario] = useState("");
  const [ahorros, setAhorros] = useState("");
  const [editingGasto, setEditingGasto] = useState(null);
  const [editandoAhorros, setEditandoAhorros] = useState(false);
  const [nuevosAhorros, setNuevosAhorros] = useState("");

  useEffect(() => {
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
        setGastos(data);
        console.log("Gastos:", data);
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
          setGastos(gastos.filter((gasto) => gasto.id_gasto !== id_gasto));
        } else {
          console.error("Error al eliminar el gasto:", data.message);
        }
      })
      .catch((error) => {
        console.error("Error al eliminar el gasto:", error);
      });
  };

  const guardarAhorrosEditados = () => {
    actualizarAhorros(nuevosAhorros);
    setEditandoAhorros(false);
    setAhorros(nuevosAhorros); // Actualizar el estado local de los ahorros
  };

  const activarEdicionAhorros = () => {
    setEditandoAhorros(true);
    setNuevosAhorros(ahorros); // Establecer el valor inicial del input como los ahorros actuales
  };

  const cancelarEdicionAhorros = () => {
    setEditandoAhorros(false);
  };

  const editarGasto = (gasto) => {
    setEditingGasto(gasto);
  };

  const guardarEdicionGasto = (id_gasto, nuevoGasto) => {
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
          setGastos(
            gastos.map((g) =>
              g.id_gasto === id_gasto ? data.gastoActualizado : g
            )
          );
          setEditingGasto(null);
        } else {
          console.error("Error al editar el gasto:", data.message);
        }
      })
      .catch((error) => {
        console.error("Error al editar el gasto:", error);
      });
  };

  const actualizarAhorros = (nuevosAhorros) => {
    fetch("http://localhost:3001/editarAhorros", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        correo: correo,
        nuevosAhorros: nuevosAhorros,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          console.log("Ahorros actualizados exitosamente");
        } else {
          console.error("Error al actualizar los ahorros:", data.message);
        }
      })
      .catch((error) => {
        console.error("Error al actualizar los ahorros:", error);
      });
  };

  const sumaTotalPrecios = gastos
    .reduce((total, gasto) => total + gasto.precio, 0)
    .toFixed(2);

  const ahorrosRestantes = (ahorros - sumaTotalPrecios).toFixed(2);

  return (
    <>
      <Header />
      <section className="sectionTablaEncabezado">
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
          {editandoAhorros ? (
            <div>
              <input
                type="number"
                value={nuevosAhorros}
                onChange={(e) => setNuevosAhorros(e.target.value)}
              />
              <button className='botonEditar' onClick={guardarAhorrosEditados}>Guardar</button>
              <button  className='botonEditar' onClick={cancelarEdicionAhorros}>Cancelar</button>
            </div>
          ) : (
            <button  className='botonEditar' onClick={activarEdicionAhorros}>Editar</button>
          )}
        </h2>
        </section>
      <section className="sectionTabla">

        <table>
          <thead>
            <tr>
              <th>Nombre del gasto</th>
              <th>Fecha del gasto</th>
              <th>Precio</th>
              <th>Categoría del gasto</th>
              <th>Acciones</th>
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
                    <button
                      className="botonEliminar"
                      onClick={() => eliminarGasto(gasto.id_gasto)}
                    >
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
                {ahorrosRestantes}
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
