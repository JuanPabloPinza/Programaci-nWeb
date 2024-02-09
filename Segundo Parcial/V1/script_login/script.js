document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('loginBtn').addEventListener('click', function () {
        var correoLogin = document.getElementById('correoLogin').value;
        var contraseñaLogin = document.getElementById('contraseñaLogin').value;

        if (!correoLogin || !contraseñaLogin) {
            alert('Todos los campos son obligatorios para iniciar sesión');
            return;
        }

        // Puedes agregar más validaciones específicas si es necesario
         // Validación de formato de correo electrónico
         var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
         if (!emailRegex.test(correoLogin)) {
             alert('Ingrese un correo electrónico válido');
             return;
         }

        alert('Iniciar sesión exitoso. ¡Redirigiendo a la página principal!');
        window.location.href = 'index.html';
    });

    document.getElementById('registerBtn').addEventListener('click', function () {
        var nombre = document.getElementById('nombre').value;
        var numero_telefono = document.getElementById('numero_telefono').value;
        var correoRegistro = document.getElementById('correoRegistro').value;
        var contraseñaRegistro = document.getElementById('contraseñaRegistro').value;

        if (!nombre || !numero_telefono || !correoRegistro || !contraseñaRegistro) {
            alert('Todos los campos son obligatorios para registrarse');
            return;
        }

        // Validación de formato de correo electrónico
        var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(correoRegistro)) {
            alert('Ingrese un correo electrónico válido');
            return;
        }

        // Validación de número de teléfono (solo números)
        var phoneRegex = /^\d{10}$/;
        if (!phoneRegex.test(numero_telefono)) {
            alert('Ingrese un número de teléfono válido de 10 cifras');
            return;
        }



        
        var nameRegex = /^[a-zA-Z\s]+$/;
        if (!nameRegex.test(nombre)) {
            alert('Ingrese un nombre válido (solo letras y espacios)');
            return;
        }

        

        // Puedes agregar más validaciones específicas si es necesario

        alert('Registro exitoso. ¡Redirigiendo a la página principal!');
        window.location.href = 'index.html';
    });
});
