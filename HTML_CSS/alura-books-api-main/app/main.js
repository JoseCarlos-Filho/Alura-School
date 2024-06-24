let listaDeLivros = [];
const endpointDaApi = '/livros.json';
let sectionLivros = document.getElementById('livros');

async function getBuscaLivrosDaAPI() {
    const resposta = await fetch(endpointDaApi);
    listaDeLivros = await resposta.json();
    console.table(listaDeLivros);
    exibiListaDeLivros(listaDeLivros);
}

getBuscaLivrosDaAPI();

function exibiListaDeLivros(listaDeLivros) {
    listaDeLivros.forEach(livro => {
        sectionLivros.innerHTML += `
        <div class="livro">
            <img class="livro__imagens" src="${livro.imagem}" alt="${livro.alt}" />
            <h2 class="livro__titulo">
                ${livro.titulo}
            </h2>
            <p class="livro__descricao">${livro.autor}</p>
            <p class="livro__preco" id="preco">${livro.preco.toFixed(2)}</p>
            <div class="tags">
                <span class="tag">${livro.categoria}</span>
            </div>
        </div>
        ` 
    })
}