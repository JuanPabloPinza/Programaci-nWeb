<?php
session_start();

// Verifica si hay datos en la sesión
if (isset($_SESSION['nombre'], $_SESSION['apellido'], $_SESSION['telefono'], $_SESSION['direccion'], $_SESSION['presupuestoMensual'], $_SESSION['fechaNacimiento'], $_SESSION['correoElectronico'], $_SESSION['genero'])) {
    // Recupera los datos de la sesión
    $nombre = $_SESSION['nombre'];
    $apellido = $_SESSION['apellido'];
    $telefono = $_SESSION['telefono'];
    $direccion = $_SESSION['direccion'];
    $presupuestoMensual = $_SESSION['presupuestoMensual'];
    $fechaNacimiento = $_SESSION['fechaNacimiento'];
    $correoElectronico = $_SESSION['correoElectronico'];
    $genero = $_SESSION['genero'];
    // Puedes agregar más campos según sea necesario
     // Recupera la ruta de la imagen
     $rutaImagen = isset($_SESSION['rutaImagen']) ? $_SESSION['rutaImagen'] : '';
     if (!empty($rutaImagen)) {
        echo "<img src='$rutaImagen' alt='Imagen de perfil' style='width: 300px; height: auto; margin-top: -50px;'>";
    }
     // Puedes agregar más campos según sea necesario
} else {
    // Si no hay datos en la sesión, redirige a la página de registro
    header("Location: index.php");
    exit();
}

?>
<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Perfil de Usuario</title>
    <link rel="stylesheet" href="css/styles.css">
</head>

<body>
<?php
   
   


   // Verifica si se ha recibido el nombre del usuario
   
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
   
       echo '<li><a href="#">Estado de Cuenta</a></li>';
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
       echo '<li><a href="#">Estado de Cuenta</a></li>';
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
            <h1 class="tituloEstadoDeCuenta">PERFIL DE USUARIO</h1>
            <!-- Muestra la información del usuario en una tabla -->
            <?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    if (isset($_FILES['imagen'])) {
        $imagen = $_FILES['imagen'];
        $nombreImagen = $imagen['name'];
        $rutaImagen = $imagen['tmp_name'];
        $destinoImagen = 'uploads/' . $nombreImagen;

        if (move_uploaded_file($rutaImagen, $destinoImagen)) {
            // Muestra la imagen
            echo "<img src='$destinoImagen' alt='Imagen adjuntada' style='width: 300px; height: auto; margin-top: -50px;'>";

            // También puedes mostrar el nombre de la imagen
            echo "<p>Nombre de la imagen: $nombreImagen</p>";
        } else {
            echo "<p>Error al subir la imagen.</p>";
        }
    } else {
        echo "<p>No se adjuntó ninguna imagen.</p>";
    }
}
?>

            <table class="tablaEstadoDeCuenta">
                <tr>
                    <td>Nombre</td>
                    <td><?php echo $nombre; ?></td>
                </tr>
                <tr>
                    <td>Apellido</td>
                    <td><?php echo $apellido; ?></td>
                </tr>
                <tr>
                    <td>Teléfono</td>
                    <td><?php echo $telefono; ?></td>
                </tr>
                <tr>
                    <td>Dirección</td>
                    <td><?php echo $direccion; ?></td>
                </tr>
                <tr>
                    <td>Presupuesto Mensual</td>
                    <td><?php echo $presupuestoMensual; ?></td>
                </tr>
                <tr>
                    <td>Fecha de Nacimiento</td>
                    <td><?php echo $fechaNacimiento; ?></td>
                </tr>
                <tr>
                    <td>Correo Electrónico</td>
                    <td><?php echo $correoElectronico; ?></td>
                </tr>
                <tr>
                    <td>Género</td>
                    <td><?php echo $genero; ?></td>
                </tr>
            </table>
            <!-- Puedes agregar más campos según sea necesario -->
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
