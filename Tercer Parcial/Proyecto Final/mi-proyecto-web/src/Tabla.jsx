import React, { useEffect, useState } from "react";

function Tabla({correo}) {
  const [gastos, setGastos] = useState([]);
    console.log("Correooo!:", correo);
  useEffect(() => {
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
  }, []);

  return (
    <table>
      <thead>
        <tr>
          <th>Nombre del gasto</th>
          <th>Fecha del gasto</th>
          <th>Categoría del gasto</th>
        </tr>
      </thead>
      <tbody>
        {gastos.map((gasto) => ( // Cambiado de gastos a gasto
          <tr key={gasto.id_gasto}>
            <td>{gasto.nombre_gasto}</td>
            <td>{new Date(gasto.fecha_gasto).toLocaleDateString()}</td>
            <td>{gasto.categoria_gasto}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Tabla;