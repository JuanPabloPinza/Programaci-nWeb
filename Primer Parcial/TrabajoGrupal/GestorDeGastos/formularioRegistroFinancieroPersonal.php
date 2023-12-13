<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>ExpenseMaster - Registro Financiero Personal</title>
    <link rel="stylesheet" href="css/styles.css">
</head>

<body>
    <!-- Header Menú de Nuestro Proyecto -->
    <?php
    // Verifica si se ha recibido el nombre del usuario
    session_start();
    if ( isset($_POST['nombre']) || isset($_SESSION['nombre'])) {
        // Si se recibe el nombre del usuario, muestra el nombre y redirige a otra página
        $nombreUsuario = htmlspecialchars($_SESSION['nombre']); // Asegura que el nombre esté seguro para mostrar en HTML
        echo '<header>';
        echo '<a class="linkLogo" href="index.php">';
        echo '<img class="logo" src="images/ExpenseMaster.png" alt="logo">';
        echo '</a>';
        echo '<nav>';
        echo '<ul class="linksDelNav">';
        echo '<li><a target="_blank" href="https://github.com/JuanPabloPinza/ProgramacionWeb">Sobre Nosotros</a></li>';
        echo '<li><a href="formularioRegistroFinancieroPersonal.php">Registro Financiero Personal</a></li>';
    
        echo '<li><a href="estadoDeCuenta.php">Estado de Cuenta</a></li>';
        echo '<li><a href="Q&A.html">Q&A</a></li>';
        echo '</ul>';
        echo '</nav>';
        echo '<a class="CTA" href="perfilUsuario.php"><button>Bienvenido,' ,$nombreUsuario,'!</button></a>';
        echo '</header>';
    } else {
        // Si no se recibe el nombre del usuario, muestra el botón de inicio de sesión
        echo '<header>';
        echo '<a class="linkLogo" href="index.php">';
        echo '<img class="logo" src="images/ExpenseMaster.png" alt="logo">';
        echo '</a>';
        echo '<nav>';
        echo '<ul class="linksDelNav">';
        echo '<li><a target="_blank" href="https://github.com/JuanPabloPinza/ProgramacionWeb">Sobre Nosotros</a></li>';
        echo '<li><a href="formularioRegistroFinancieroPersonal.php">Registro Financiero Personal</a></li>';
        echo '<li><a href="estadoDeCuenta.php">Estado de Cuenta</a></li>';
        echo '<li><a href="Q&A.html">Q&A</a></li>';
        echo '</ul>';
        echo '</nav>';
        echo '<a class="CTA" href="formularioLogin.php"><button>Inicia Sesión</button></a>';
        echo '</header>';
    }
    ?>    

    <main class="mainFormulario">
        <!-- INICIO DE NUESTRA PÁGINA WEB -->
        <hr size="7px" color="black">
        <article class="articleFormulario">
            <h1 style="text-align: center;">REGISTRO FINANCIERO PERSONAL</h1>
            <form class="formRegistro" action="estadoDeCuenta.php" method="post">
                <label for="concepto">Concepto:</label><br>
                <input type="text" id="concepto" name="concepto"  placeholder="Ejm.zapatos" required><br>
                <label for="monto">Monto:</label><br>
                <input type="number" id="monto" name="monto" placeholder="Ej. 440.63" pattern="^\d+(\.\d{1,2})?$" required><br>
                <label for="fecha">Fecha de gasto o ingreso:</label><br>
                <input type="date" id="fecha" name="fecha" required><br>
                <input type="submit" value="Registrar">
            </form>
        </article>
    </main>

    <footer>
        <section class="redes-sociales">
            <a href="#" target="_blank">
                <img class="imgIconosFooter" src="images/facebook-icon.png" alt="Facebook">
            </a>
            <a href="#" target="_blank">
                <img class="imgIconosFooter" src="images/twitter-icon.png" alt="Twitter">
            </a>
            <a href="https://github.com/JuanPabloPinza/ProgramacionWeb" target="_blank">
                <img class="imgIconosFooter" src="images/github-icon.png" alt="Github">
            </a>
        </section>
        <p>&copy; 2023 Juan Pablo Pinza & Alex Trejo</p>
    </footer>
</body>

</html>
