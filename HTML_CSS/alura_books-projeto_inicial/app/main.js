import exibirOsLivrosNaTela from "./metodoForEach.js";
import aplicarDesconto from "./metodoMap.js";
import filtrarLivros from "./metodoFilter.js";
import ordenarLivrosPorPreco from "./metodoSort.js";
import calcularValorTotalDeLivrosDisponiveis from "./metodoReduce.js";

let livros = [];
const endpointDaAPI = 'https://guilhermeonrails.github.io/casadocodigo/livros.json';

getBuscarLivrosDaAPI();

async function getBuscarLivrosDaAPI() {
    const res = await fetch(endpointDaAPI);
    livros = await res.json();
    // console.table(livros);
    let livrosComDesconto = aplicarDesconto(livros)
    exibirOsLivrosNaTela(livrosComDesconto);
}

const botoes = document.querySelectorAll(".btn");
botoes.forEach(btn => {
    btn.addEventListener("click", () => {
        const categoria = btn.value;
        // console.log(livros);
        // console.log(categoria);
        let livrosFiltrados = filtrarLivros(livros, categoria);
        exibirOsLivrosNaTela(livrosFiltrados);
        if (categoria === 'disponivel') {
            const valorTotal = calcularValorTotalDeLivrosDisponiveis(livrosFiltrados)
            // let valorTotalDeLivros = livros.reduce((total, livro) => total + livro.preco, 0);
            // console.log(valorTotal);
            exibirValorTotalDeLivrosDisponiveis(valorTotal)
        }
    })
})

let btnOrdenarPorPreco = document.getElementById('btnOrdenarPorPreco');
btnOrdenarPorPreco.addEventListener("click", () => {
    let livrosOrdenados = ordenarLivrosPorPreco(livros);
    exibirOsLivrosNaTela(livrosOrdenados)
})


function exibirValorTotalDeLivrosDisponiveis(valor) {
    const elementoValorTotalDeLivrosDisponiveis = document.getElementById("valor_total_livros_disponiveis");
    elementoValorTotalDeLivrosDisponiveis.innerHTML = `
    <div class="livros__disponiveis">
        <p>Todos os livros disponíveis por R$ <span id="valor">${valor.toFixed(2)}</span></p>
    </div>
    `
    
}
// const btnFiltrarLivrosDeFront = document.getElementById("btnFiltrarLivrosFront");
// btnFiltrarLivrosDeFront.addEventListener('click', () => {
//     let livrosFiltrados = filtrarLivros(livros);
//     console.table(livrosFiltrados);
// });

