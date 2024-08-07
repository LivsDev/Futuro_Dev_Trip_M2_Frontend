// Função chamada quando o usuário clica no botão "Adicionar Tarefa"
function addTask() {
    const taskList = document.getElementById('taskList'); // Seleciona a lista de tarefas
    const taskInput = document.getElementById('taskInput'); // Seleciona o campo de entrada de texto
    const task = taskInput.value; // Obtém o valor digitado no campo de entrada

    // Verifica se o texto não é apenas espaços em branco
    if (task.trim() === '') {
        alert('Por favor, insira uma tarefa válida.'); // Exibe um alerta se o campo estiver vazio
        return; // Sai da função se nenhum texto for inserido
    }

    const newTask = document.createElement('li');
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox'; // Define o tipo do elemento como checkbox
    checkbox.addEventListener('change', function() {
        if (this.checked) {
            newTask.classList.add('done'); // Marca a tarefa como concluída
        } else {
            newTask.classList.remove('done'); // Remove a marcação de concluída
        }
    });

    newTask.appendChild(checkbox); // Adiciona o checkbox ao item da lista
    newTask.appendChild(document.createTextNode(task)); // Adiciona o texto da tarefa ao lado do checkbox

    taskList.appendChild(newTask);
    taskInput.value = '';
}