const {log} = console;
const animais = [
    { id: 1, nome: "Leão", especie: "Felino", idade: 5 },
    { id: 2, nome: "Elefante", especie: "Mamífero", idade: 10 },
    { id: 3, nome: "Pinguim", especie: "Ave", idade: 3 }
]

function ordenarAnimais(lista) {
    return lista.sort((a, b) => a.idade - b.idade);
}

function ordenarAnimaisCrescente(lista, nome) {
    return lista.sort((a, b) => {
        if (a[nome] < b[nome]) return -1;
        if (a[nome] > b[nome]) return 1;
        return 0;
    })
}

function ordenarAnimaisDecrescente(lista, nome) {
    return lista.sort((a, b) => {
        if (a[nome] < b[nome]) return 1;
        if (a[nome] > b[nome]) return -1;
        return 0;
    })
}

const listaDeAnimaisPorIdade = ordenarAnimais(animais);
log('Lista de Animais Ordenados por Idade: ');
log(listaDeAnimaisPorIdade)
log();

const listaDeAnimaisPorNomeCrescente = ordenarAnimaisCrescente(animais, "nome");
log('Lista de Animais Ordenados pelo Nome Crescente: ');
log(listaDeAnimaisPorNomeCrescente);
log();

const listaDeAnimaisPorNomeDecrescente = ordenarAnimaisDecrescente(animais, "nome");
log('Lista de Animais Ordenados pelo Nome Decrescente: ');
log(listaDeAnimaisPorNomeDecrescente);
log();