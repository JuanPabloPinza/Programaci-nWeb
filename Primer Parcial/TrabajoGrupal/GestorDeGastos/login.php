<?php
    $usuarioValido = "admin@gmail.com";
    $contraseñaValida = "123";
    global $usuarioValido, $contraseñaValida;
       
    if ($_POST['username'] == $usuarioValido && $_POST['password'] == $contraseñaValida) {
       
        header("Location: index.php");
        exit();
    } else {
        $mensajeError = "Usuario o contraseña inválidos. Por favor, inténtalo de nuevo.";
        header("Location: formularioLogin.php?error=".urldecode($mensajeError));
        exit();

      
    }
    

?>