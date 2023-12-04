<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <title>Recepción de Datos</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
            background-color: #F8E71C;
            text-align: center;
        }

        header {
            background-color: #3E3E3E;
            color: white;
            padding: 20px;
        }

        section {
            padding: 20px;
        }

        footer {
            position: fixed;
            bottom: 0;
            color: white;
            width: 100%;
            background-color: #3E3E3E;
            padding: 20px;
            text-align: center;
        }
    </style>
</head>

<body>
    <header>
        <h1>Datos Recibidos</h1>
    </header>

    <section>
        <h2>Detalles del Formulario:</h2>
        <p>Nombre: <span id="nombre"></span></p>
        <p>Apellido: <span id="apellido"></span></p>
        <p>Presupuesto Mensual: <span id="presupuesto"></span></p>
        <p>Mes y Año: <span id="mesYAnio"></span></p>
    </section>

    <footer>
        <p>&copy; 2023 Juan Pablo Pinza & Alex Trejo</p>
    </footer>

    <script>
        // Obtener los parámetros de la URL
        const urlParams = new URLSearchParams(window.location.search);

        // Mostrar los datos en la página
        document.getElementById("nombre").textContent = urlParams.get("nombre");
        document.getElementById("apellido").textContent = urlParams.get("apellido");
        document.getElementById("presupuesto").textContent = urlParams.get("presupuesto");
        document.getElementById("mesYAnio").textContent = urlParams.get("mesYAnio");
    </script>
</body>

</html>
