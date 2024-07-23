import exibiListaDeLivros from "./exibiLivros.js";
import aplicaDesconto from "./aplicaDesconto.js";
import filtraLivros from "./filtraLivros.js";
import ordenaPorPreco from "./filtraPorPreco.js";
import calculaValorTotalDeLivros from "./calculaValorTotal.js";

let listaDeLivros = [];
const endpointDaApi = '/livros.json';


async function getBuscaLivrosDaAPI() {
    const resposta = await fetch(endpointDaApi);
    listaDeLivros = await resposta.json();
    let livrosComDesconto = aplicaDesconto(listaDeLivros)
    exibiListaDeLivros(livrosComDesconto);
}

const botoes = document.querySelectorAll('.btn');
botoes.forEach(botao => {
    botao.addEventListener('click', () => {
        const categoria = botao.value;
        let livrosFiltrados = filtraLivros(listaDeLivros, categoria);
        let valorTotalDosLivros = calculaValorTotalDeLivros(livrosFiltrados);
        console.log(valorTotalDosLivros);
        exibiListaDeLivros(livrosFiltrados);
        exibiValorTotalDosLivros(valorTotalDosLivros);
    })
})

const btnOrdenaPorPreco = document.getElementById('btnOrdenarPorPreco');
btnOrdenaPorPreco.addEventListener("click", () => {
    let livrosOrdenadosPorPreco = ordenaPorPreco(listaDeLivros);
    exibiListaDeLivros(livrosOrdenadosPorPreco);
})


// const btnLivrosDisponiveis = document.getElementById("btnLivrosDisponiveis");
// btnLivrosDisponiveis.addEventListener("click", () => {
//     let livroDisponivel = filtraLivros(listaDeLivros, categoria);
// })



getBuscaLivrosDaAPI();


function exibiValorTotalDosLivros(valorTotalDosLivros) {
    const elementoValorTotalLivrosDisponiveis = document.getElementById("valor_total_livros_disponiveis");
    elementoValorTotalLivrosDisponiveis.innerHTML = `
        <div class="livros__disponiveis">
            <p>Todos os livros disponíveis por R$ <span id="valor">${valorTotalDosLivros.toFixed(2)}</span></p>
        </div>
    `
}
// Outra forma de solução.
// document.querySelectorAll('.btn-categoria').forEach(btn => {
//     btn.addEventListener('click', function() {
//         const categoria = this.getAttribute('data-categoria');
//         const livrosFiltrados = livros.filter(livro => livro.categoria === categoria);
//         exibirLivros(livrosFiltrados);
//     });
// });

// function exibirLivros(livros) {
//     // Sua lógica para exibir os livros na tela
// }

// function filtrarELimpar(livrosFiltrados) {
//     elementoParaInserirLivros.innerHTML = ''; // Limpa o conteúdo anterior
//     exibirOsLivrosNaTela(livrosFiltrados); // Exibe os novos livros filtrados
// }

// // Supondo que essa função seja chamada quando um botão de categoria é clicado
// function aoClicarNoBotao(categoria) {
//     const livrosFiltrados = livros.filter(livro => livro.categoria === categoria);
//     filtrarELimpar(livrosFiltrados);
// }