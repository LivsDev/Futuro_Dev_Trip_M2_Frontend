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

const episodios = [
    'Episódio 1',
    'Episódio 2',
    'Episódio 3',
];

function renderizarEpisodios() {
    const episodiosContainer = document.getElementById('episodios');
    episodiosContainer.innerHTML = '';
    
    episodios.forEach((episodio, index) => {
        episodiosContainer.innerHTML += `
            <div class="card-episodio" data-episodio="${episodio}" onclick="episodioClicado(this)">${episodio}</div>
        `;
    });
}

renderizarEpisodios();
