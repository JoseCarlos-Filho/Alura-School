// Execício 1
const {log} = console;
log('Exercício 1')
log();
const arrayEsparso = [,1,,3,,,,7,];
arrayEsparso.forEach((indice) => {
    log(indice);
})
log(arrayEsparso);
log(arrayEsparso.length);

// Exercício 2
log();
log('Exercício 2');
log();
const arrayDeElementos = ['vindo', 'JS', 2024, 'ALURA', true];
log(arrayDeElementos);
arrayDeElementos.unshift('Bem');
log(arrayDeElementos);

// Exercício 3
log();
log('Exercício 3');
log();

const meuArray = [];
meuArray.push(20, 30, 60);
log(meuArray);
let primeiraPosicao = meuArray.splice(0, 1);
meuArray.unshift(primeiraPosicao * 2);
log(meuArray);

// Exercício 4
log();
log('Exercício 4');
log();

const lista = [];
lista.push(1, 3, 5);
log(lista);

// Exercício 5
log();
log('Exercício 5');
log();

const clinica = [];

clinica.push('lufy', 'pingo', 'pipa');
log(clinica);

while(clinica.length > 0) {
    log('Removendo item: ', clinica);
    clinica.pop();
}
log(clinica);

// Exercícios alterando Arrays(slice(), splice(), concat(), arrays de arrays)
// Exercício 1.
log();
log('Exercício 1');
log();

const list1 = [1, 2, 3];
const list2 = [4, 5, 6];
const listaDeInteiros = list1.concat(list2);
log(listaDeInteiros);

// Exercício 2.
log();
log('Exercício 2');
log();

const listaNumeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const parteNumeros = listaNumeros.slice(2, 7);
log(listaNumeros);
log(parteNumeros);

// Exercício 3.
log();
log('Exercício 3');
log();

const frutas = ['Maçã', 'Banana', 'Laranja', 'Limão', 'Abacaxi'];
frutas.splice(2, 1, 'Kiwi');
frutas.splice(3, 1, 'Pêssego');
log(frutas);

// Exercício 4.
log();
log('Exercício 4');
log();

const menuPrincipal = ['frango', 'arroz a grega', 'feijão tropeiro', 'macarrão jardineira'];
const menuDeSobremesas = ['pudim', 'browny', 'sorvete', 'creme de papaya'];
const menuCompleto = menuPrincipal.concat(menuDeSobremesas);
log(`Menu Principal :`, menuPrincipal);
log(`Menu de Sobremesas :`, menuDeSobremesas);
log(`Menu Completo : `, menuCompleto);

// Exercício 5.
log();
log('Exercício 5');
log();

let valorInicial = 1;
let matriz = [];
for (let i = 0; i < 3; i++) {
    let linha = [];
    for (let j = 0; j < 3; j++) {
        linha.push(valorInicial++);
    }
    matriz.push(linha);
}
log(`Matriz de duas dimensões: `);
log(matriz);
matriz.forEach((linha) => log(linha));
log(`Elemento na segunda linha e terceira coluna : ${matriz[1][2]}`);
matriz[2][1] = 25;
log(matriz);


// let valorInicial = 1;
// let matrizBidimensional = [];

// // for para as linhas da lista bidimensional
// for (let i = 0; i < 3; i++) {
//     let linha = [];
//     // for para as colunas da lista bidimensional
//     for (let j = 0; j < 3; j++) {
//         let matriz = [];
//         // for para as linhas da matriz
//         for (let k = 0; k < 3; k++ ) {
//             let coluna = [];
//             // for para a coluna da matriz
//             for (let l = 0; l < 3; l++) {
//                 coluna.push(valorInicial++);
//             }
//             // adiciona a coluna à matriz
//             matriz.push(coluna);
//         }
//         // adiciona  a matriz na linha
//         linha.push(matriz);
        
//     }
//     // adiciona a linha na matriz bidimensional.
//     matrizBidimensional.push(linha);
// }

// log(matrizBidimensional[0]);

// // Iterar sobre a lista bidimensional e imprimir os valores
// for (let i = 0; i < matrizBidimensional.length; i++) {
//     for (let j = 0; j < matrizBidimensional[i].length; j++) {
//         for (let k = 0; k < matrizBidimensional[i][j].length; k++) {
//             console.log(matrizBidimensional[i][j][k].join(' '));
//         }
//     }
// }

//*************************************************************************

// Função para criar uma matriz 3x3 com valores iniciando em 'startValue'
// function createMatrix(startValue) {
//     let matrix = [];
//     let value = startValue;
//     for (let i = 0; i < 3; i++) {
//         let row = [];
//         for (let j = 0; j < 3; j++) {
//             row.push(value);
//             value++;
//         }
//         matrix.push(row);
//     }
//     return matrix;
// }

// // Criar a lista bidimensional
// let listaBidimensional = [];
// let startValue = 1;
// for (let i = 0; i < 3; i++) {
//     let matriz = createMatrix(startValue);
//     listaBidimensional.push(matriz);
//     startValue += 9; // Incrementar o valor inicial para a próxima matriz
// }

// // Imprimir a lista bidimensional
// console.log(listaBidimensional);