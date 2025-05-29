<?php
include 'db_connection.php';

$conn = OpenCon();

if ($conn instanceof mysqli) {
    echo "Conectado com sucesso usando MySQLi";
} else {
    echo "Tipo de conexão inesperado.";
}

CloseCon($conn);
?>
