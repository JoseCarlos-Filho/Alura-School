const inputTarefa = document.getElementById('input_item');
const listaDeFilme = document.getElementById('lista_de_filmes');
const btnAdicionar = document.getElementById('adicionar_Button');


function adicionarFilme() {
    console.log(inputTarefa.value);
    if (!inputTarefa.value) {
        alert("Digite um filme válido!");
        return;
    }

    const itemFilme = document.createElement('li');
    itemFilme.textContent = inputTarefa.value;
    listaDeFilme.appendChild(itemFilme);
    inputTarefa.value = '';
}

btnAdicionar.addEventListener('click', adicionarFilme);