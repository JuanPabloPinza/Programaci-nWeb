<?php
    $usuarioValido = "123";
    $contraseñaValida = "123";
    global $usuarioValido, $contraseñaValida;
       
    if ($_POST['username'] == $usuarioValido && $_POST['password'] == $contraseñaValida) {
       
        header("Location: index.html");
        exit();
    } else {
        $mensajeError = "Usuario o contraseña inválidos. Por favor, inténtalo de nuevo.";
        header("Location: formularioLogin.php?error=".urldecode($mensajeError));
        exit();

      
    }
    

?>