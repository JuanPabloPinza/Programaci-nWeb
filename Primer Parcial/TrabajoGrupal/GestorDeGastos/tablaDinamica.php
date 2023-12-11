<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="css/styles.css">
</head>

<body>
    <!--Header Menú de Nuestro Proyecto-->
    <header>
        <a class="linkLogo" href="index.html">
        <img class="logo" src="images/ExpenseMaster.png" alt="logo">
        </a>
        <nav>
            <ul class="linksDelNav">
                <li><a target="_blank" href="https://github.com/JuanPabloPinza/ProgramacionWeb">Sobre Nosotros</a></li>
                <li><a href="formularioTablaDinamica.html">Tabla Dinámica</a></li>
                <li><a href="#">Q&A</a></li>
            </ul>
        </nav>
        <a class="CTA" href="#"><button>Inicia Sesión</button></a>
    </header>

    <main>
        <!--Aquí va a ir nuestra tablita dinámica-->
        <hr size="8px" color="blue">
        <section class="sectionTabla">
            <?php
            $filas = $_POST['filas'];
            $columnas = $_POST['columnas'];
            echo '<table class="tablaDinamica">';
            echo '<thead>';
            for ($iteradorColumnas = 0; $iteradorColumnas < $columnas; $iteradorColumnas++) {
                echo "<th>C " . ($iteradorColumnas + 1) . "</th>";
            }
            echo '</thead>';
            echo '<tbody>';
            for ($iteradorFilas = 0; $iteradorFilas < $filas; $iteradorFilas++) {
                echo "<tr>";
                for ($iteradorColumnas = 0; $iteradorColumnas < $columnas; $iteradorColumnas++) {
                    echo '<td>' . ($iteradorFilas + 1) . $iteradorColumnas + 1  . '</td>';
                }
                echo "</tr>";
            }
            echo '</tbody>';
            echo '</table>';
            ?>
        </section>
    </main>

</body>

</html>