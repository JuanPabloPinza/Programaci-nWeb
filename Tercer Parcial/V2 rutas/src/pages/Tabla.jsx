import React, { useEffect, useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import "../styles/tabla.css";
import "../styles/portada.css";

function Tabla({ correo }) {
  const categoriasDisponibles = ["Vivienda","Alimentacion","Salud","Comida", "Educacion","Transporte", "Entretenimiento", "Otros"]; // Agrega tus categorías aquí
  const [categorias, setCategorias] = useState(categoriasDisponibles);
  const [gastos, setGastos] = useState([]);
  const [nombreUsuario, setNombreUsuario] = useState("");
  const [ahorros, setAhorros] = useState("");
  const [editingGastoId, setEditingGastoId] = useState(null);
  const [editandoAhorros, setEditandoAhorros] = useState(false);
  const [nuevosAhorros, setNuevosAhorros] = useState("");
  const [nuevoNombreGasto, setNuevoNombreGasto] = useState("");

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


  const [nuevoFechaGasto, setNuevoFechaGasto] = useState("");
  const [nuevoPrecioGasto, setNuevoPrecioGasto] = useState("");
  const [nuevaCategoriaGasto, setNuevaCategoriaGasto] = useState("");

  const editarGasto = (gasto) => {
    setEditingGastoId(gasto.id_gasto);
    setNuevoNombreGasto(gasto.nombre_gasto); // Puedes ajustar esto según tus necesidades
    setNuevoFechaGasto(gasto.fecha_gasto);
    setNuevoPrecioGasto(gasto.precio);
    setNuevaCategoriaGasto(gasto.categoria_gasto);
  };

  const cancelarEdicionGasto = () => {
    setEditingGastoId(null);
    setNuevoNombreGasto("");
    setNuevoFechaGasto(""); // Limpiar el estado de la fecha
    setNuevoPrecioGasto(""); // Limpiar el estado del precio
    setNuevaCategoriaGasto(""); // Limpiar el estado de la categoría  
  };

  const guardarEdicionGasto = (id_gasto, nuevoGasto) => {
    const {
      nombre_gasto,
      fecha_gasto,
      categoria_gasto,
      precio,
    } = nuevoGasto;

    fetch("http://localhost:3001/editarGasto", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id_gasto: id_gasto,
        nuevoGasto: { nombre_gasto, fecha_gasto, categoria_gasto, precio },
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
        setEditingGastoId(null);
        setNuevoNombreGasto("");
        setNuevoFechaGasto("");
          setNuevoPrecioGasto("");
          setNuevaCategoriaGasto("");
          const nuevasCategorias = data.categoriasActualizadas || categoriasDisponibles;
          setCategorias(nuevasCategorias);
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

  const sumaTotalPrecios = Array.isArray(gastos) && gastos.length > 0
  ? gastos.reduce((total, gasto) => total + parseFloat(gasto.precio), 0).toFixed(2)
  : "0.00";

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
                className="inputEditarAhorros"
                type="number"
                value={nuevosAhorros}
                onChange={(e) => setNuevosAhorros(e.target.value)}
              />
              <button className="botonEditar" onClick={guardarAhorrosEditados}>
                Guardar
              </button>
              <button
                className="botonEditar"
                onClick={cancelarEdicionAhorros}
              >
                Cancelar
              </button>
            </div>
          ) : (
            <button className="botonEditar" onClick={activarEdicionAhorros}>
              Editar
            </button>
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
                  <td>
                    {editingGastoId === gasto.id_gasto ? (
                      <input
                        type="text"
                        value={nuevoNombreGasto}
                        onChange={(e) => setNuevoNombreGasto(e.target.value)}
                      />
                    ) : (
                      gasto.nombre_gasto
                    )}
                  </td>
                  <td>
                    {editingGastoId === gasto.id_gasto ? (
                      <input
                        type="date"
                        value={nuevoFechaGasto}
                        onChange={(e) => setNuevoFechaGasto(e.target.value)}
                      />
                    ) : (
                      new Date(gasto.fecha_gasto).toLocaleDateString()
                    )}
                  </td>
                  <td>
                    {editingGastoId === gasto.id_gasto ? (
                      <input
                        type="number"
                        value={nuevoPrecioGasto}
                        onChange={(e) => setNuevoPrecioGasto(e.target.value)}
                      />
                    ) : (
                      `$${gasto.precio.toFixed(2)}`
                    )}
                  </td>
                  <td>
                    {editingGastoId === gasto.id_gasto ? (
                      <input
                        type="text"
                        value={nuevaCategoriaGasto}
                        onChange={(e) =>
                          setNuevaCategoriaGasto(e.target.value)
                        }
                      />
                    ) : (
                      gasto.categoria_gasto
                    )}
                  </td>
                  <td>
                    {editingGastoId === gasto.id_gasto ? (
                      <button
                        className="botonGuardar"
                        onClick={() =>
                          guardarEdicionGasto(gasto.id_gasto, {
                            nombre_gasto: nuevoNombreGasto,
                            fecha_gasto: nuevoFechaGasto,
                            precio: parseFloat(nuevoPrecioGasto),
                            categoria_gasto: nuevaCategoriaGasto,
                          })
                        }
                      >
                        Guardar
                      </button>
                    ) : (
                      <button
                        className="botonEditar"
                        onClick={() => editarGasto(gasto)}
                      >
                        Editar
                      </button>
                    )}
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
                  ${sumaTotalPrecios}
                  
                </strong>
              </td>
              <td colSpan="2">
                <strong>Ahorros restantes:</strong> ${ahorrosRestantes || "0.00"}
              </td>
            </tr>
          </tbody>
        </table>
      </section>
      <Footer />
    </>
  );
};

export default Tabla;
