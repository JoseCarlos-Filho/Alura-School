function troca(lista, analise) {
    let itemAnalise = lista[analise];
    let itemAnterior = lista[analise - 1];
               
    lista[analise] = itemAnterior;
    lista[analise - 1] = itemAnalise;
}

function trocaSelectionSort(lista, atual, menor) {
    let livroAtual = lista[atual];
    let livroMenorPreco = lista[menor];

    lista[atual] = livroMenorPreco;
    lista[menor] = livroAtual;
}

module.exports = {troca, trocaSelectionSort};