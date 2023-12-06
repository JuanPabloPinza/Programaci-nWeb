<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <title>Gestor de Gastos Personales - Login</title>
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

        main {
            display: flex;
            justify-content: space-around;
            padding: 20px;
        }

        article,
        aside {
            flex: 1;
            padding: 20px;
            border-radius: 10px;
            margin: 10px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
            background-color: #ddd;
        }

        article {
            background-color: #eee;
        }

        section {
            margin-bottom: 20px;
        }

        .portada {
            width: 100%;
        }

        .fondo {

            max-height: 5vw;
            min-height: 35%;
            position: relative;
            top: 0;
            left: 0px;
            overflow: hidden;
            z-index: 1;
        }

        .header {
            height: 40%;
            display: flex;
            justify-content: left;
            align-items: center;
            height: auto;
        }

        .tema {
            position: absolute;
            display: flex;
            align-items: center;
            justify-content: left;
            top: -5%;
            left: 1%;
            z-index: 4;
        }

        .tema h1 {
            color: #0F0C26;
            font-size: 2.8vw;
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            text-shadow: 1px 2px 2px black;
        }

        header {
            background-color: #0F0C26;
            color: white;
            text-align: center;
            padding: 20px;
            border-bottom: 2px solid #131240;
        }

        
        form {
            max-width: 400px;
            margin: 20px auto;
            padding: 20px;
            border-radius: 10px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
            background-color: #ddd;
        }

        form label {
            display: block;
            margin-bottom: 8px;
            color: #0F0C26;
        }

        form input {
            width: 100%;
            padding: 8px;
            margin-bottom: 16px;
            box-sizing: border-box;
        }

        form button {
            background-color: #3B3C40;
            color: white;
            padding: 10px;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            transition: background-color 0.3s ease-in-out;
        }

        form button:hover {
            background-color: #555;
        }

        #mensajeError {
            color: red;
            margin: 10px 0;
            cursor: pointer;
        }
    </style>
</head>

<body>
    <header>
        <h1>Gestor de Gastos Personales</h1>
    </header>

    
    <?php
    
    if (isset($_GET['error'])) {
        echo '<h1 id="mensajeError">' . urldecode($_GET['error']) . '</h1>';
    }
    ?>

    
        <form action="login.php" method="post">
            <label for="username">Usuario:</label>
            <input type="text" id="username" name="username" required>

            <label for="password">Contraseña:</label>
            <input type="password" id="password" name="password" required>

            <button type="submit">Iniciar Sesión</button>
        </form>
    

    <footer>
        <p>&copy; 2023 Juan Pablo Pinza & Alex Trejo</p>
    </footer>
</body>

</html>
