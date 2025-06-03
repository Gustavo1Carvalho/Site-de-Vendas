<?php

function OpenCon() {

    $dbhost = "localhost";

    $dbuser = "root";

    $dbpass = "";

    $dbname = "loja_web";

    $conn = new mysqli ($dbhost, $dbuser, $dbpass, $dbname);

    if ($conn -> connect_error) {

        die ("connection failed: " . $conn -> connect_error);

    }

    return $conn;

}

$conn = OpenCon();

$nome = $_POST ['nome'];
$email = $_POST ['email'];
$senha = password_hash($_POST ['senha'], PASSWORD_DEFAULT);
$cpf = $_POST ['cpf'];
$genero = $_POST ['genero'];

$sql = "INSERT INTO tb_cliente (nome, email, senha, cpf, genero)
        VALUES ('$nome', '$email', '$senha', '$cpf', '$genero')";

if ($conn -> query($sql) == TRUE) {
    echo "Cadastro realizado com sucesso!";
} else {
    echo "Erro: " . $sql . "<br>" . $conn->error;
}

$conn -> close();

?>