<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <title>Gestor de Gastos Personales</title>
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

        footer {
            margin-top: auto;
            background-color: #0F0C26;
            color: white;
            text-align: center;
            padding: 20px;
            border-top: 2px solid #131240;
        }

        nav {
            background-color: #3B3C40;
            display: flex;
            justify-content: space-around;
            align-items: center;
            padding: 10px;
            border-bottom: 2px solid #131240;
        }

        nav a {
            color: white;
            text-decoration: none;
            padding: 8px;
            border-radius: 5px;
        }

        nav a:hover {
            text-decoration: underline;
        }

        header {
            background-color: #0F0C26;
            color: white;
            text-align: center;
            padding: 20px;
            border-bottom: 2px solid #131240;
        }

        section {
            padding: 20px;
        }

        .registro-info {
            max-width: 400px;
            margin: 20px auto;
            padding: 20px;
            border-radius: 10px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
            background-color: #ddd;
        }

        .registro-info p {
            margin-bottom: 10px;
        }
    </style>
</head>

<body>

    <header>
        <h1>Gestor de Gastos Personales</h1>
    </header>
    <nav>
        <a href="index.html">Inicio</a>
        <a href="#">Registro de Gastos</a>
        <a href="#">Reportes Mensuales</a>
        <a href="formulario.html">Formulario</a>
        <a href="#">Registrarse</a>
        <a href="formularioLogin.php">Iniciar Sesión</a>
    </nav>

    <section class="registro-info">
        <?php

        if ($_SERVER["REQUEST_METHOD"] == "POST") {

            $concepto = htmlspecialchars($_POST["concepto"]);
            $monto = floatval($_POST["monto"]);
            $fecha = htmlspecialchars($_POST["fecha"]);

            echo "<h2>Gasto registrado:</h2>";
            echo "<p><strong>Concepto:</strong> $concepto</p>";
            echo "<p><strong>Monto:</strong> $monto</p>";
            echo "<p><strong>Fecha:</strong> $fecha</p>";
        } else {

            header("Location: formulario_registro_gastos.html");
            exit();
        }
        ?>
    </section>

    <footer>
        <p>&copy; 2023 Juan Pablo Pinza & Alex Trejo</p>
    </footer>

</body>

</html>
