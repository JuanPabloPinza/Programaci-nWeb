<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <title>Recepción de Datos</title>
    <style>
       body {
            display: flex;
            flex-direction: column;
            min-height: 100vh;
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
            background-color: #A5A4A6; 
        }

        header{

            background-color: #0F0C26; 
            color: white;
            text-align: center;
            padding: 20px;
            border-bottom: 2px solid #131240; 
        }
        footer {
            margin-top:auto;
            background-color: #0F0C26; 
            color: white;
            text-align: center;
            padding: 20px;
            border-top: 2px solid #131240; 
            
        }

        section {
            padding: 20px;
        }

        
    </style>
</head>

<body>
    
<header>
        <h1>Datos Recibidos</h1>
    </header>

    <section>
        <!-- <h2>Detalles del Formulario:</h2>
        <p>Nombre: <span id="nombre"></span></p>
        <p>Apellido: <span id="apellido"></span></p>
        <p>Presupuesto Mensual: <span id="presupuesto"></span></p>
        <p>Mes y Año: <span id="mesYAnio"></span></p> -->
        <!-- Metodo Get -->
        <!-- <h2>Detalles del Formulario:</h2>
        <p>Nombre: <span id="nombre"><?php echo $_GET['nombre']; ?></span></p>
        <p>Apellido: <span id="apellido"><?php echo $_GET['apellido']; ?></span></p>
        <p>Presupuesto Mensual: <span id="presupuesto"><?php echo $_GET['presupuesto']; ?></span></p>
        <p>Mes y Año: <span id="mesYAnio"><?php echo $_GET['mesYAnio']; ?></span></p> -->

        <!-- Metodo post -->
        <h2>Detalles del Formulario:</h2>
        <p>Nombre: <?php echo $_POST['nombre']; ?></p>
        <p>Apellido: <?php echo $_POST['apellido']; ?></p>
        <p>Presupuesto Mensual: <?php echo $_POST['presupuesto']; ?></p>
        <p>Mes y Año: <?php echo $_POST['mesYAnio']; ?></p>

        
        <!-- <?php echo "<h1>" . $_POST["nombre"] . "</h1>";?> -->
        


    </section>  

    <footer>
        <p>&copy; 2023 Juan Pablo Pinza & Alex Trejo</p>
    </footer>

    <!-- <script>
        // Obtener los parámetros de la URL
        const urlParams = new URLSearchParams(window.location.search);

        // Mostrar los datos en la página
        document.getElementById("nombre").textContent = urlParams.get("nombre");
        document.getElementById("apellido").textContent = urlParams.get("apellido");
        document.getElementById("presupuesto").textContent = urlParams.get("presupuesto");
        document.getElementById("mesYAnio").textContent = urlParams.get("mesYAnio");
        
    </script> -->




    <!-- <header>
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
    </script> -->
</body>

</html>
