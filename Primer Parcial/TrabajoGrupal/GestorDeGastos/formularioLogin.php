<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>ExpenseMaster</title>
    <link rel="stylesheet" href="css/styles.css">
   
   
</head>

<body>
    <main class="mainLogin">
    <section class="centerWrapper">
    <?php
    
    if (isset($_GET['error'])) {
        echo '<h1 id="mensajeError">' . urldecode($_GET['error']) . '</h1>';
    }
    ?>
        <section class="portadaPrincipal">
            <!-- <section style="text-align: center;">
                    <img src="ruta/a/tu/imagen-de-usuario.png" alt="Imagen de usuario" style="width: 50px; height: 50px;">
            </section> -->
            <section class="sectionFormularioLogin" >
                <form action="login.php" method="post" class="sectionFormularioLogin__form">
                <label for="username" class="formLogin">Correo:</label>
                
                <input type="text" id="username" name="username" required>
                
                <label for="password" class="formLogin">Contraseña:</label>
                <input type="password" id="password" name="password" required >
                <br>
                <button type="submit" >Iniciar Sesión</button>
                </form>
            </section>
        
        </section>

    </section>
    
    
        
    </main>

    
    
    

    <footer>
        <p>&copy; 2023 Juan Pablo Pinza & Alex Trejo</p>
    </footer>
</body>

</html>
