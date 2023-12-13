
<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>ExpenseMaster - Estado de Cuenta</title>
    <link rel="stylesheet" href="css/styles.css">
</head>

<body>
    <?php
   
    if (isset($_POST['concepto'], $_POST['monto'], $_POST['fecha'])) {
        
        $concepto = htmlspecialchars($_POST['concepto']);
        $monto = htmlspecialchars($_POST['monto']);
        $fecha = htmlspecialchars($_POST['fecha']);
    ?>

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
            <hr size="7px" color="black">
            <article class="articleFormulario">
                <h1 class="tituloEstadoDeCuenta">ESTADO DE CUENTA</h1>
                <table class="tablaEstadoDeCuenta">
                    <thead>
                        <tr>
                            <th>Concepto</th>
                            <th>Monto</th>
                            <th>Fecha</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><?php echo $concepto; ?></td>
                            <td><?php echo $monto; ?></td>
                            <td><?php echo $fecha; ?></td>
                        </tr>
                       
                    </tbody>
                </table>
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
    <?php
    } else {
        
        header("Location: formularioRegistroFinancieroPersonal.php");
        exit();
    }
    ?>
</body>

</html>
