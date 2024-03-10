<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>ExpenseMaster - Registro Financiero Personal</title>
    <link rel="stylesheet" href="css/formularioFinanciero.css">
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

    <main class="mainFormulario">
        <!-- INICIO DE NUESTRA PÁGINA WEB -->
        <hr size="7px" color="black">
        <article class="articleFormulario">
            <h1 class="tituloSeccion" style="text-align: center; color: rgb(244, 238, 255);">Registro <span class="palabraOtroColor">Financiero</span></h1>
            <form class="formRegistro" action="estadoDeCuenta.php" method="post">
                <label for="concepto">Concepto:</label><br>
                <input type="text" id="concepto" name="concepto" placeholder="Zapatos" required><br>
                <label for="monto">Monto:</label><br>
                <input type="text" id="monto" name="monto" placeholder="440.9" pattern="\d+(\.\d{1,2})?" required><br>
                <label for="fecha">Fecha de Gasto:</label><br>
                <input type="date" id="fecha" name="fecha" required><br>
                <input type="submit" value="Registrar">
            </form>
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
</body>

</html>