<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <title>Recepción de Datos</title>
    <style>
        body {
            display: flex;
            flex-direction: column;
            min-height: 100vh;
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
            background-color: #A5A4A6;
        }

        header {
            background-color: #0F0C26;
            color: white;
            text-align: center;
            padding: 20px;
            border-bottom: 2px solid #131240;
        }

        footer {
            margin-top: auto;
            background-color: #0F0C26;
            color: white;
            text-align: center;
            padding: 20px;
            border-top: 2px solid #131240;
        }

        section {
            padding: 20px;
        }

        /* Estilos adicionales para los detalles del formulario */
        h2 {
            color: #0F0C26;
            font-size: 1.5em;
            margin-bottom: 10px;
        }

        table {
            width: 100%;
            border-collapse: collapse;
            margin-top: 20px;
        }

        th, td {
            border: 1px solid #ddd;
            padding: 10px;
            text-align: left;
        }

        th {
            background-color: #3B3C40;
            color: white;
        }
    </style>
</head>

<body>
    <header>
        <h1>Datos Recibidos</h1>
    </header>

    <section>
        <!-- Método post -->
        <h2>Detalles del Formulario:</h2>
        <table>
            <tr>
                <th>Campo</th>
                <th>Valor</th>
            </tr>
            <tr>
                <td>Nombre</td>
                <td><?php echo $_POST['nombre']; ?></td>
            </tr>
            <tr>
                <td>Apellido</td>
                <td><?php echo $_POST['apellido']; ?></td>
            </tr>
            <tr>
                <td>Teléfono</td>
                <td><?php echo $_POST['telefono']; ?></td>
            </tr>
            <tr>
                <td>Dirección</td>
                <td><?php echo $_POST['direccion']; ?></td>
            </tr>
            <tr>
                <td>Presupuesto Mensual</td>
                <td><?php echo $_POST['presupuesto']; ?></td>
            </tr>
            <tr>
                <td>Mes y Año</td>
                <td><?php echo $_POST['mesYAnio']; ?></td>
            </tr>
            <tr>
                <td>Fecha de Nacimiento</td>
                <td><?php echo $_POST['fechaNacimiento']; ?></td>
            </tr>
            <tr>
                <td>Email</td>
                <td><?php echo $_POST['email']; ?></td>
            </tr>
            <tr>
                <td>Sexo</td>
                <td><?php echo $_POST['sexo']; ?></td>
            </tr>
            <tr>
                <td>Adjuntar Archivo</td>
                <td><?php echo isset($_POST['adjuntarArchivo']) ? 'Sí' : 'No'; ?></td>
            </tr>
            <tr>
                <td>Información Adicional</td>
                <td><?php echo isset($_POST['infoAdicional']) ? 'Sí' : 'No'; ?></td>
            </tr>
        </table>
    </section>

    <footer>
        <p>&copy; 2023 Juan Pablo Pinza & Alex Trejo</p>
    </footer>
</body>

</html>
