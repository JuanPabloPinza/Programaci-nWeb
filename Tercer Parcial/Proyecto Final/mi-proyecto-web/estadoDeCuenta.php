<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>ExpenseMaster - Estado de Cuenta</title>
    <link rel="stylesheet" href="css/estadoDeCuenta.css">
</head>

<body>

    <!--Header Menú de Nuestro Proyecto-->
    <header>
        <a class="linkLogo" href="inicio.html">
            <img class="logo" src="images/ExpenseMaster.png" alt="logo">
        </a>
        <nav>
            <ul class="linksDelNav">
                <li><a target="_blank" href="https://github.com/JuanPabloPinza/ProgramacionWeb">Sobre Nosotros</a></li>
                <li><a href="formularioRegistroFinancieroPersonal.php">Registro Financiero Personal</a></li>
                <li><a href="inicio.html#nuestrosServicios">Nuestros Servicios</a></li>
                <li><a href="inicio.html#preguntasFrecuentes">Q&A</a></li>
            </ul>
        </nav>
        <a class="CTA" target="_blank" href="https://www.equifax.com.ec/miscreditos/blog/ahorro"><button class="colorBotonPrincipal">Tips de Ahorro</button></a>
        <hr size="1px" color="#383241">
        <hr size="1px" color="rgb(8, 6, 11)">
    </header>

    <?php
   
    if (isset($_POST['concepto'], $_POST['monto'], $_POST['fecha'])) {
        
        $concepto = htmlspecialchars($_POST['concepto']);
        $monto = htmlspecialchars($_POST['monto']);
        $fecha = htmlspecialchars($_POST['fecha']);
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

        <!--FOOTER-->
    <footer>
        <section class="redes-sociales">
            <a href="https://www.facebook.com/ESPE.U" target="_blank">
                <img class="imgIconosFooter" src="images/facebook-icon.png" alt="Facebook">
            </a>
            <a href="https://twitter.com/i/trends" target="_blank">
                <img class="imgIconosFooter" src="images/twitter-icon.png" alt="Twitter">
            </a>
            <a href="https://github.com/JuanPabloPinza/ProgramacionWeb" target="_blank">
                <img class="imgIconosFooter" src="images/github-icon.png" alt="Github">
            </a>
        </section>
        <p style="color: rgb(184, 173, 210);">&copy; 2024 Juan Pablo Pinza & Alex Trejo</p>
    </footer>
    <?php
    } else {
        
        header("Location: formularioRegistroFinancieroPersonal.php");
        exit();
    }
    ?>
</body>

</html>
