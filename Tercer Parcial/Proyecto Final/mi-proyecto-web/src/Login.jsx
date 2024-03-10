import React, { useState } from 'react';
import '../css/style_login.css';  

const Login = ({ onLogin }) => {
    const [correoLogin, setCorreoLogin] = useState('');
    const [contraseñaLogin, setContraseñaLogin] = useState('');
    const [nombre, setNombre] = useState('');
    const [numeroTelefono, setNumeroTelefono] = useState('');
    const [correoRegistro, setCorreoRegistro] = useState('');
    const [contraseñaRegistro, setContraseñaRegistro] = useState('');

    const handleLogin = () => {
        // Lógica de inicio de sesión aquí
        // Si la autenticación es exitosa, llama a la función onLogin
        if (!correoLogin || !contraseñaLogin) {
            alert('Todos los campos son obligatorios para iniciar sesión');
            return;
        }

        

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(correoLogin)) {
          alert('Ingrese un correo electrónico válido');
          return;
        }

        console.log('Datos ingresados en el formulario de inicio de sesión:');
        console.log('Correo:', correoLogin);
        console.log('Contraseña:', contraseñaLogin);

        // Lógica de inicio de sesión aquí
    fetch('http://localhost:3001/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          correoLogin: correoLogin,
          contraseñaLogin: contraseñaLogin,
        }),
      })
        .then(response => response.json())
        .then(data => {
            console.log('Respuesta de la base de datos en inicio de sesión:', data);
          if (data.success) {
            alert('Inicio de sesión exitoso. ¡Redirigiendo a la página principal!');
            onLogin(correoLogin);
          } else {
            alert('Credenciales incorrectas');
          }
        })
        .catch(error => {
          console.error('Error al iniciar sesión: ', error);
          alert('Error al iniciar sesión');
        });
    };





    const handleRegistro = () => {
        
            
        // Validaciones de registro
        if (!nombre || !numeroTelefono || !correoRegistro || !contraseñaRegistro) {
          alert('Todos los campos son obligatorios para registrarse');
          return;
        }
    
        // Validación de formato de correo electrónico
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(correoRegistro)) {
          alert('Ingrese un correo electrónico válido');
          return;
        }
    
        // Validación de número de teléfono (solo números)
        const phoneRegex = /^\d{10}$/;
        if (!phoneRegex.test(numeroTelefono)) {
          alert('Ingrese un número de teléfono válido de 10 cifras');
          return;
        }
    
        // Validación de nombre (solo letras y espacios)
        const nameRegex = /^[a-zA-Z\s]+$/;
        if (!nameRegex.test(nombre)) {
          alert('Ingrese un nombre válido (solo letras y espacios)');
          return;
        }

        console.log('Datos ingresados en el formulario de registro:');
        console.log('Nombre:', nombre);
        console.log('Número de teléfono:', numeroTelefono);
        console.log('Correo:', correoRegistro);
        console.log('Contraseña:', contraseñaRegistro);
    
// Lógica de registro aquí
fetch('http://localhost:3001/registro', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      nombre: nombre,
      numeroTelefono: numeroTelefono,
      correoRegistro: correoRegistro,
      contraseñaRegistro: contraseñaRegistro,
    }),
  })
    .then(response => response.json())
    .then(data => {
        console.log('Respuesta de la base de datos en registro:', data);
      if (data.success) {
        alert('Registro exitoso. ¡Redirigiendo a la página principal!');
        onLogin();
      } else {
        alert('Error en el registro: ' + data.message);
      }
    })
    .catch(error => {
      console.error('Error al registrar: ', error);
      alert('Error al registrar');
    });
};



  return (
    <div className="custom-style" style={{ color: 'aliceblue' }}>
      <section id="stars"></section>
      <section id="stars2"></section>
      <section id="stars3"></section>
      <section className="section">
        <section className="container">
          <section className="row full-height justify-content-center">
            <section className="col-12 text-center align-self-center py-5">
              <section className="section pb-5 pt-5 pt-sm-2 text-center">
                <h6 className="mb-0 pb-3">
                  <span>Iniciar sesión </span>
                  <span>Registrarse</span>
                </h6>
                <input className="checkbox" type="checkbox" id="reg-log" name="reg-log" />
                <label htmlFor="reg-log"></label>
                <section className="card-3d-wrap mx-auto">
                  <section className="card-3d-wrapper">
                    <section className="card-front">
                      <section className="center-wrap">
                        <section className="section text-center">
                          <h4 className="mb-4 pb-3">Iniciar sesión</h4>
                          <section className="form-group">
                            <input 
                            type="email" 
                            id="correoLogin" 
                            className="form-style" 
                            placeholder="Correo"
                            value={correoLogin}
                            onChange={(e) => setCorreoLogin(e.target.value)} 
                            
                            />
                          </section>
                          <section className="form-group mt-2">
                            <input 
                            type="password" 
                            id="contraseñaLogin" 
                            className="form-style" 
                            placeholder="Contraseña" 
                            value={contraseñaLogin}
                            onChange={(e) => setContraseñaLogin(e.target.value)}
                            
                            />
                          </section>
                            <button 
                          style={{ color: 'black', backgroundColor: 'aliceblue' }} 
                          type="button" 
                          id="loginBtn" 
                          className="btn mt-4"
                          onClick={handleLogin}
                          >
                            Iniciar sesión
                            </button>
                          <p className="mb-0 mt-4 text-center">
                            <a style={{ color: 'aliceblue' }} href="#" className="link">¿Olvidaste tu contraseña?</a>
                          </p>
                        </section>
                      </section>
                    </section>
                    <section className="card-back">
                      <section className="center-wrap">
                        <section className="section text-center">
                          <h4 className="mb-3 pb-3">Registrarse</h4>
                          <section className="form-group">
                            <input 
                            type="text" 
                            id="nombre" 
                            className="form-style" 
                            placeholder="Nombre" 
                            value={nombre}
                            onChange={(e) => setNombre(e.target.value)}
                            />
                            <i className="input-icon uil uil-user"></i>
                          </section>
                          <section className="form-group mt-2">
                            <input 
                            type="tel" 
                            className="form-style" 
                            id="numero_telefono" 
                            placeholder="Número de teléfono" 
                            value={numeroTelefono}
                            onChange={(e) => setNumeroTelefono(e.target.value)}
                            />
                          </section>
                          <section className="form-group mt-2">
                            <input 
                            type="email" 
                            id="correoRegistro" 
                            className="form-style" 
                            placeholder="Correo" 
                            value={correoRegistro}
                            onChange={(e) => setCorreoRegistro(e.target.value)}
                            
                            />
                          </section>
                          <section className="form-group mt-2">
                            <input 
                            type="password" 
                            id="contraseñaRegistro" 
                            className="form-style" 
                            placeholder="Contraseña" 
                            value={contraseñaRegistro}
                            onChange={(e) => setContraseñaRegistro(e.target.value)}
                            />
                          </section>
                          <button 
                          style={{ color: 'black', backgroundColor: 'aliceblue' }} 
                          type="button" id="registerBtn" 
                          className="btn mt-4"
                          onClick={handleRegistro}
                          >
                            Registrarse
                            </button>
                        </section>
                      </section>
                    </section>
                  </section>
                </section>
              </section>
            </section>
          </section>
        </section>
      </section>
      <section className="card-front-Logo">
        <section className="center-wrap">
          <section className="section text-center">
            
            <img src="../images/Logo_Login.png" style={{ width: '60%', height: '40%' }} alt="Logo" />
            </section>
        </section>
      </section>
    </div>
  );
}

export default Login;
