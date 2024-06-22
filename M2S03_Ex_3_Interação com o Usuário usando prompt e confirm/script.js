document.getElementById('startButton').addEventListener('click', function() {
    const name = prompt("Por favor, insira seu nome:");

    if (name === null || name.trim() === "") {
        displayMessage("Você não inseriu um nome. Por favor, recarregue a página e tente novamente.", "alert");
    } else {
        const proceed = confirm(`Olá, ${name}! Deseja continuar com a interação?`);

        if (proceed) {
            displayMessage(`Obrigado por continuar, ${name}!`, "success");
        } else {
            displayMessage("Interação cancelada. Até a próxima!", "alert");
        }
    }
});

function displayMessage(message, type) {
    const messageDiv = document.getElementById('message');
    messageDiv.textContent = message;
    messageDiv.className = type;
}
