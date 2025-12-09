<?php
$host = getenv('DB_HOST');
$port = getenv('DB_PORT');
$dbname = getenv('DB_NAME');
$user = getenv('DB_USER');
$password = getenv('DB_PASSWORD');

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $nome = trim($_POST['nome'] ?? '');
    $email = trim($_POST['email'] ?? '');
    $atualizacoes = isset($_POST['atualizacoes']);

    if (empty($nome) || empty($email) || !$atualizacoes) {
        echo "Por favor, preencha todos os campos obrigatórios.";
        exit;
    }

    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        echo "Email inválido.";
        exit;
    }

    try {
        $pdo = new PDO("pgsql:host=$host;port=$port;dbname=$dbname", $user, $password);
        $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

        $stmt = $pdo->prepare("INSERT INTO formulario (nome, email) VALUES (:nome, :email)");
        $stmt->execute([':nome' => $nome, ':email' => $email]);

        // Exibe mensagem com contagem regressiva
        echo '<!DOCTYPE html>
<html>
<head>
    <title>Enviado</title>
    <style>
        body { font-family: Arial, sans-serif; text-align: center; padding: 50px; }
        #countdown { font-size: 24px; color: #E38417; }
    </style>
</head>
<body>
    <p>Dados enviados com sucesso!</p>
    <p>Você será redirecionado em <span id="countdown">3</span> segundos...</p>
    <script>
        let timeLeft = 3;
        const countdownElement = document.getElementById("countdown");
        const timer = setInterval(() => {
            timeLeft--;
            countdownElement.textContent = timeLeft;
            if (timeLeft <= 0) {
                clearInterval(timer);
                window.location.href = "https://padariafamiliasantos.onrender.com/";
            }
        }, 1000);
    </script>
</body>
</html>';
        exit;
    } catch (PDOException $e) {
        if ($e->getCode() == '23505') {
            echo "Esse email já está cadastrado.";
        } else {
            echo "Erro ao conectar ou inserir dados: " . $e->getMessage();
        }
        exit;
    }
} else {
    echo "Acesso inválido.";
    exit;
}
?>