let sectionLivros = document.getElementById('livros');
const elementoValorTotalLivrosDisponiveis = document.getElementById("valor_total_livros_disponiveis");

export default function exibiListaDeLivros(listaDeLivros) {
    elementoValorTotalLivrosDisponiveis.innerHTML = "";
    sectionLivros.innerHTML = "";
    listaDeLivros.forEach(livro => {
        let livrosDisponiveis = livro.quantidade > 0 ? 'livro_imagens' : 'livro_imagens indisponivel';
        sectionLivros.innerHTML += `
        <div class="livro">
            <img class="${livrosDisponiveis}" src="${livro.imagem}" alt="${livro.alt}" />
            <h2 class="livro__titulo">
                ${livro.titulo}
            </h2>
            <p class="livro__descricao">${livro.autor}</p>
            <p class="livro__preco" id="preco">${livro.preco.toFixed(2)}</p>
            <span class="livro__cart">
                <button><img width="16" height="16" src="https://img.icons8.com/officexs/16/add.png" alt="add"/></button>
                <img width="32" height="32" src="https://img.icons8.com/dusk/64/shopping-cart--v1.png" alt="shopping-cart--v1"/>
                <button><img width="16" height="16" src="https://img.icons8.com/office/16/minus-2-math.png" alt="minus-2-math"/></button>
            </span>
            <div class="tags">
                <span class="tag">${livro.categoria}</span>
            </div>
        </div>
        ` 
    })
}