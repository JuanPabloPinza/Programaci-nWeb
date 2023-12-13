<?php
// Inicia o reanuda una sesión
session_start();


// Verifica si se ha recibido el nombre del usuario
if (isset($_POST['nombre'])) {
    // Si se recibe el nombre del usuario, guarda los datos en la sesión
    $_SESSION['nombre'] = htmlspecialchars($_POST['nombre']);
    $_SESSION['apellido'] = htmlspecialchars($_POST['apellido']);
    $_SESSION['telefono'] = htmlspecialchars($_POST['telefono']);
    $_SESSION['direccion'] = htmlspecialchars($_POST['direccion']);
    $_SESSION['presupuestoMensual'] = htmlspecialchars($_POST['presupuestoMensual']);
    $_SESSION['fechaNacimiento'] = htmlspecialchars($_POST['fechaNacimiento']);
    $_SESSION['correoElectronico'] = htmlspecialchars($_POST['correoElectronico']);
    $_SESSION['genero'] = htmlspecialchars($_POST['genero']);
    
    // Puedes añadir más campos según sea necesario
}

?>
<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>ExpenseMaster</title>
    <link rel="stylesheet" href="css/styles.css">
</head>

<body>
    <!--Header Menú de Nuestro Proyecto-->
    <?php
    // Verifica si se ha recibido el nombre del usuario
    
    if (isset($_POST['nombre'])      ) {
        // Si se recibe el nombre del usuario, muestra el nombre y redirige a otra página
        $_SESSION['nombre'] = htmlspecialchars($_POST['nombre']);
        
        $nombreUsuario = htmlspecialchars($_POST['nombre']); // Asegura que el nombre esté seguro para mostrar en HTML
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
    
    
    
    <main>
        <!--INICIO DE NUESTRA PÁGINA WEB-->
        <hr size="7px" color="black">
        <article class="portadaPrincipal">
            <section class="textoPortada">
                <h1>ExpenseMaster</h1>
                <p><i>"Ahorra hoy, vive mejor mañana"</i></p>

                <?php
                // Verifica si se ha recibido el nombre del usuario
                if (isset($_POST['nombre'])) {
                    // Si se recibe el nombre del usuario, muestra un mensaje de bienvenida
                    $nombreUsuario = htmlspecialchars($_POST['nombre']); // Asegura que el nombre esté seguro para mostrar en HTML
                   
                } else {
                    // Si no se recibe el nombre del usuario, muestra el botón "Únete"
                    echo '<a href="formularioRegistro.html"><button>Únete</button></a>';
                }
                ?>

                
            </section>
            <section class="imagenPortada"><img src="images/ChanchitoMonederoLogo.png"></section>
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