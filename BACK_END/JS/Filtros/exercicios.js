// Exercícios
const {log} = console
log();
log('Exercício 1');
log();

function uniaoDeArrays(receitaFuba, receitaBolo, receitaVitamina) {
    return uniaoReceitas = [...receitaFuba, ...receitaBolo, ...receitaVitamina];
}

const ingredientesFuba = ['fuba de milho', 'farinha de trigo', 'oleo', 'açucar', 'ovos', 'sal', 'leite'];
const ingredientesBolo = ['farinha de trigo', 'oleo', 'açucar', 'ovos', 'sal', 'leite'];
const ingredientesVitamina = ['leite', 'banana', 'maça', 'mamão', 'neston'];

log(uniaoDeArrays(ingredientesFuba, ingredientesBolo, ingredientesVitamina));

function uniListas(...listas) {
    return [].concat(...listas);
}

log();
log('Lista Unida: ');
log(uniListas(ingredientesFuba, ingredientesBolo, ingredientesVitamina));

// Solução do instrutor
// function concatArrays(...arrays) {
//     return [].concat(...arrays); // operador spread para concatenar os arrays
// }

// const arr1 = [1, 2];
// const arr2 = [3, 4];
// const arr3 = [5, 6];
// const arraysConcatenados = concatArrays(arr1, arr2, arr3);
// console.log(arraysConcatenados); // Saída: [1, 2, 3, 4, 5, 6]

// Exercício 2
log();
log('Exercício 2');
log();

const valores = [10, 5.90, 6.80, 7.50, 9.99, 8.99, 12.29];
const soma = valores.reduce((acumulador, valorAtual) => valorAtual + acumulador, 0);
log(soma); 

// Exercício 3
log();
log('Exercício 3');
log();

const coresLista1 = ['Vermelho', 'Verde', 'Azul', 'Amarelo', 'Vermelho'];
const coresLista2 = ['Laranja', 'Verde', 'Roxo', 'Azul'];

const uniaoListaCores = coresLista1.concat(coresLista2);
log(uniaoListaCores);
const listaCoresAtualizada = [...new Set(uniaoListaCores)];
log('Lista Atualizada: ', listaCoresAtualizada);

// solução do instrutor;
// const coresLista1 = ['Vermelho', 'Verde', 'Azul', 'Amarelo', 'Vermelho'];
// const coresLista2 = ['Laranja', 'Verde', 'Roxo', 'Azul'];

// const coresUnicas = [...new Set([...coresLista1, ...coresLista2])];
// console.log('Cores sem repetir: ', coresUnicas);

// Exercício 4
log();
log('Exercício 4');
log();

const numeros = [10, 2, 4, 1, 3, 5, 12, 7, 9, 14, 13, 8];

function novoArray(array) {
    let pares = [];
    array.forEach((element, indice) => {
        if (element % 2 === 0) {
            pares.push(element);
        }
    });
    return pares;
}

log(novoArray(numeros));

// Exercício 5
log();
log('Exercício 5');
log();

const listaNumeros = [51, 2, 4, 1, 3, 5, 23, 7, 9, 14, 12, 8];

const novaListaNumeros = listaNumeros.filter((numero) => numero > 5 && numero % 3 === 0)

log(novaListaNumeros);


// Exercício 6
log();
log('Exercício 6');
log();

const numerosLista = [10, 2, 4, 1, 3, 5, 12, 7, 9, 14, 13, 8];

const listaSoma = numerosLista.reduce((acumulador, valor) => acumulador + valor, 0);
log(listaSoma);