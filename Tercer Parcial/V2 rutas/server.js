const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3001;

// Configuración de CORS y body-parser
app.use(cors());
app.use(bodyParser.json());

// Configuración de la conexión a MySQL
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: ''  ,
  database: 'login_app',
});

// Conexión a MySQL
db.connect(err => {
  if (err) {
    console.error('Error al conectar con MySQL: ', err);
  } else {
    console.log('Conexión exitosa con MySQL');
  }
});

// Rutas para operaciones de la base de datos
app.post('/login', (req, res) => {
  const { correoLogin, contraseñaLogin } = req.body;

  const sql = 'SELECT * FROM usuarios WHERE correo = ? AND contraseña = ?';
  db.query(sql, [correoLogin, contraseñaLogin], (err, results) => {
    if (err) {
      console.error('Error en la consulta de inicio de sesión: ', err);
      res.status(500).send('Error interno del servidor');
    } else {
      if (results.length > 0) {
        // Usuario autenticado
        res.json({ success: true, message: 'Inicio de sesión exitoso' });
      } else {
        // Usuario no autenticado
        res.json({ success: false, message: 'Credenciales incorrectas' });
      }
    }
  });
});

app.post('/registro', (req, res) => {
  const { nombre, numeroTelefono, correoRegistro, contraseñaRegistro } = req.body;

  // Verificar si el correo o el número de teléfono ya están en uso
  const checkEmailSql = 'SELECT * FROM usuarios WHERE correo = ?';
  const checkPhoneSql = 'SELECT * FROM usuarios WHERE numero_telefono = ?';

  db.query(checkEmailSql, [correoRegistro], (errEmail, resultsEmail) => {
    if (resultsEmail.length > 0) {
      res.json({ success: false, message: 'El correo ya está en uso' });
    } else {
      db.query(checkPhoneSql, [numeroTelefono], (errPhone, resultsPhone) => {
        if (resultsPhone.length > 0) {
          res.json({ success: false, message: 'El número de teléfono ya está en uso' });
        } else {
          // Insertar nuevo usuario si el correo y número de teléfono no están en uso
          const insertSql = 'INSERT INTO usuarios (nombre, numero_telefono, correo, contraseña) VALUES (?, ?, ?, ?)';
          db.query(insertSql, [nombre, numeroTelefono, correoRegistro, contraseñaRegistro], (errInsert, resultsInsert) => {
            if (errInsert) {
              console.error('Error en la consulta de registro: ', errInsert);
              res.status(500).send('Error interno del servidor');
            } else {
              res.json({ success: true, message: 'Registro exitoso' });
            }
          });
        }
      });
    }
  });
});

// Rutas para operaciones de la base de datos
app.post('/gastos', (req, res) => {
  const { correo } = req.body;

  const sql = `SELECT gastos.*
  FROM gastos
  JOIN usuarios ON gastos.id_usuario = usuarios.id_usuario
  WHERE usuarios.correo = ?
`;
  db.query(sql, [correo], (err, results) => {
    if (err) {
      console.error('Error en la consulta de gastos: ', err);
      res.status(500).send('Error interno del servidor');
    } else {
      if (results.length > 0) {
        res.json(results);
      } else {
        console.log('No se encontraron gastos para el usuario con correo: ', correo);
        res.json({ success: false, message: 'No se encontraron gastos para el usuario' });
      }
    }
  });
});


app.get('/getNombre', (req, res) => {
  console.log('Inicio de la solicitud de nombre');
  const { correo } = req.query;

  const sql = 'SELECT * FROM usuarios WHERE correo = ?';
  db.query(sql, [correo], (err, results) => {
    if (err) {
      console.error('Error en la consulta de obtener nombre: ', err);
      res.status(500).send('Error interno del servidor');
    } else {
      if (results.length > 0) {
        console.log('Nombre encontrado:', results[0].nombre); // Agrega este console.log
        console.log('Ahorros encontrado:', results[0].ahorros);

        res.json({ success: true, nombre: results[0].nombre, ahorros: results[0].ahorros});
      } else {
        res.json({ success: false, message: 'Usuario no encontrado' });
      }
    }
    console.log('Fin de la solicitud de nombre'); // Agr
  });
});


// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor iniciado en http://localhost:${port}`);
});
