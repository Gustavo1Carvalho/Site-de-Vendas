<?php
function OpenCon()
{
    $dbhost = "localhost";
    $dbuser = "root";
    $dbpass = ""; // Padrão do XAMPP
    $dbname = "sistamaweb"; // Sem acento é mais seguro para nomes de banco

    try {
        $conn = new PDO("mysql:host=$dbhost;dbname=$dbname", $dbuser, $dbpass);
        $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    } catch (PDOException $e) {
        die("Falha na conexão: " . $e->getMessage());
    }

    return $conn;
}

function CloseCon($conn)
{
    $conn = null;
}
?>
