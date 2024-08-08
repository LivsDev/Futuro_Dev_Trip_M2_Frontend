function compartilhar(redeSocial) {
    alert('Compartilhando no ' + redeSocial);
}

function paginaEmConstrucao() {
    alert('Página em construção');
}

function episodioClicado(numero) {
    alert('Episódio ' + numero + ' clicado');
}

function episodioClicado(element) {
    alert(element.getAttribute('data-episodio') + ' clicado');
}

// Array de episódios
const episodios = [
    'Episódio 1',
    'Episódio 2',
    'Episódio 3',
];
// Função para renderizar os episódios
function renderizarEpisodios() {
    const episodiosContainer = document.getElementById('episodios');
    episodiosContainer.innerHTML = '';// Limpa o conteúdo existente
    
    episodios.forEach((episodio, index) => {  // Adiciona cada episódio ao contêiner usando `innerHTML`
        episodiosContainer.innerHTML += `
            <div class="card-episodio" data-episodio="${episodio}" onclick="episodioClicado(this)">${episodio}</div>
        `;
    });
}
// Chamar a função para renderizar os episódios
renderizarEpisodios();
