const express = require("express");
const mysql = require("mysql");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const port = 3001;

// Configuración de CORS y body-parser
app.use(cors());
app.use(bodyParser.json());

// Configuración de la conexión a MySQL
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "login_app",
});

// Conexión a MySQL
db.connect((err) => {
  if (err) {
    console.error("Error al conectar con MySQL: ", err);
  } else {
    console.log("Conexión exitosa con MySQL");
  }
});

// Rutas para operaciones de la base de datos
app.post("/login", (req, res) => {
  const { correoLogin, contraseñaLogin } = req.body;

  const sql = "SELECT * FROM usuarios WHERE correo = ? AND contraseña = ?";
  db.query(sql, [correoLogin, contraseñaLogin], (err, results) => {
    if (err) {
      console.error("Error en la consulta de inicio de sesión: ", err);
      res.status(500).send("Error interno del servidor");
    } else {
      if (results.length > 0) {
        // Usuario autenticado
        res.json({ success: true, message: "Inicio de sesión exitoso" });
      } else {
        // Usuario no autenticado
        res.json({ success: false, message: "Credenciales incorrectas" });
      }
    }
  });
});

app.post("/registro", (req, res) => {
  const { nombre, numeroTelefono, correoRegistro, contraseñaRegistro } =
    req.body;

  // Verificar si el correo o el número de teléfono ya están en uso
  const checkEmailSql = "SELECT * FROM usuarios WHERE correo = ?";
  const checkPhoneSql = "SELECT * FROM usuarios WHERE numero_telefono = ?";

  db.query(checkEmailSql, [correoRegistro], (errEmail, resultsEmail) => {
    if (resultsEmail.length > 0) {
      res.json({ success: false, message: "El correo ya está en uso" });
    } else {
      db.query(checkPhoneSql, [numeroTelefono], (errPhone, resultsPhone) => {
        if (resultsPhone.length > 0) {
          res.json({
            success: false,
            message: "El número de teléfono ya está en uso",
          });
        } else {
          // Insertar nuevo usuario si el correo y número de teléfono no están en uso
          const insertSql =
            "INSERT INTO usuarios (nombre, numero_telefono, correo, contraseña) VALUES (?, ?, ?, ?)";
          db.query(
            insertSql,
            [nombre, numeroTelefono, correoRegistro, contraseñaRegistro],
            (errInsert, resultsInsert) => {
              if (errInsert) {
                console.error("Error en la consulta de registro: ", errInsert);
                res.status(500).send("Error interno del servidor");
              } else {
                res.json({ success: true, message: "Registro exitoso" });
              }
            }
          );
        }
      });
    }
  });
});

// Rutas para operaciones de la base de datos
app.post("/gastos", (req, res) => {
  const { correo } = req.body;

  const sql = `SELECT gastos.*
  FROM gastos
  JOIN usuarios ON gastos.id_usuario = usuarios.id_usuario
  WHERE usuarios.correo = ?
`;
  db.query(sql, [correo], (err, results) => {
    if (err) {
      console.error("Error en la consulta de gastos: ", err);
      res.status(500).send("Error interno del servidor");
    } else {
      if (results.length > 0) {
        res.json(results);
      } else {
        console.log(
          "No se encontraron gastos para el usuario con correo: ",
          correo
        );
        res.json({
          success: false,
          message: "No se encontraron gastos para el usuario",
        });
      }
    }
  });
});

app.post("/insertarGasto", (req, res) => {
  const { correo, nombre_gasto, fecha_gasto, categoria_gasto, precio } = req.body;

  const getUserIdSql = "SELECT id_usuario FROM usuarios WHERE correo = ?";
  db.query(getUserIdSql, [correo], (errUserId, resultsUserId) => {
    if (errUserId) {
      console.error("Error al obtener el id_usuario: ", errUserId);
      res.status(500).send("Error interno del servidor");
    } else {
      if (resultsUserId.length > 0) {
        const id_usuario = resultsUserId[0].id_usuario;
        
        // Insertar el nuevo gasto con el id_usuario obtenido
        const insertGastoSql = "INSERT INTO gastos (nombre_gasto, fecha_gasto, categoria_gasto, precio, id_usuario) VALUES (?, ?, ?, ?, ?)";
        db.query(insertGastoSql, [nombre_gasto, fecha_gasto, categoria_gasto, precio, id_usuario], (errInsert, resultsInsert) => {
          if (errInsert) {
            console.error("Error al insertar el nuevo gasto: ", errInsert);
            res.status(500).send("Error interno del servidor");
          } else {
            res.json({ success: true, message: "Gasto insertado exitosamente" });
          }
        });
      } else {
        res.json({ success: false, message: "Usuario no encontrado" });
      }
    }
  });
});

app.post("/borrarGasto", (req, res) => {
  const { id_gasto } = req.body;

  const deleteGastoSql = "DELETE FROM gastos WHERE id_gasto = ?";
  db.query(deleteGastoSql, [id_gasto], (errDelete, resultsDelete) => {
    if (errDelete) {
      console.error("Error al borrar el gasto: ", errDelete);
      res.status(500).send("Error interno del servidor");
    } else {
      res.json({ success: true, message: "Gasto eliminado exitosamente" });
    }
  });
});
/*
// Ruta para editar un gasto
app.post("/editarGasto", (req, res) => {
  const { id_gasto, nuevoGasto } = req.body;

  const updateGastoSql = "UPDATE gastos SET nombre_gasto = ?, fecha_gasto = ?, categoria_gasto = ?, precio = ? WHERE id_gasto = ?";
  const { nombre_gasto, fecha_gasto, categoria_gasto, precio } = nuevoGasto;
  
  db.query(updateGastoSql, [nombre_gasto, fecha_gasto, categoria_gasto, precio, id_gasto], (err, result) => {
    if (err) {
      console.error("Error al editar el gasto:", err);
      res.status(500).json({ success: false, message: "Error interno del servidor" });
    } else {
      res.json({ success: true, message: "Gasto editado exitosamente", gastoActualizado: nuevoGasto });
    }
  });
});
*/

app.get("/getNombre", (req, res) => {
  console.log("Inicio de la solicitud de nombre");
  const { correo } = req.query;

  const sql = "SELECT * FROM usuarios WHERE correo = ?";
  db.query(sql, [correo], (err, results) => {
    if (err) {
      console.error("Error en la consulta de obtener nombre: ", err);
      res.status(500).send("Error interno del servidor");
    } else {
      if (results.length > 0) {
        console.log("Nombre encontrado:", results[0].nombre); // Agrega este console.log
        console.log("Ahorros encontrado:", results[0].ahorros);

        res.json({
          success: true,
          nombre: results[0].nombre,
          ahorros: results[0].ahorros,
        });
      } else {
        res.json({ success: false, message: "Usuario no encontrado" });
      }
    }
    console.log("Fin de la solicitud de nombre"); // Agr
  });
});

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor iniciado en http://localhost:${port}`);
});
