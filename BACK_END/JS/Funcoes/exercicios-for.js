// Exercícios práticos utilizando o for
// Exercício 1
const {log} = console;
log();
log('Exercício 1');
log();

const numeros = [10, 20, 30, 1, 2, 4, 5];
let soma = 0;

for(let numero of numeros) {
    log(`Elemento: ${numero}`)
}

// Exercício 2
log();
log('Exercício 2');
log();

function exibeArray(arrayDeValores) {

    for (let i = 0; i < arrayDeValores.length; i++) {
        console.log(`indice : ${i}, Valor : ${arrayDeValores[i]}`);
    }
}

const valores = [9.5, 12.6, 18.7, 5, 6.2, 8.9, 11];
exibeArray(valores);

// Exercício 3
log();
log('Exercício 3');
log();

const somaArray = (inteiros) => {
    let soma = 0;
    for (let numero of inteiros) {
        soma += numero;
    }
    return soma;
}

const numerosInteros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const totalSoma = somaArray(numerosInteros);
log(`Soma total do array de inteiros: ${totalSoma}`);

// Exercício 4
log();
log('Exercício 4');
log();

const maiorEMenor = (listaNumerica) => {
    
    let maior = listaNumerica[0];
    let menor = listaNumerica[0];

    for (let i = 0; i < listaNumerica.length; i++) {
        if(listaNumerica[i] > maior) {
            maior = listaNumerica[i];
        }
        if (listaNumerica[i] < menor) {
            menor = listaNumerica[i];
        } 
    }

    return `O maior número é: ${maior} e o menor número é: ${menor}`;
}

const lista = [16, 4, 6, 10, 35, 22, 12, 24, 32, 1];
log(maiorEMenor(lista));

// Exercício 5
log();
log('Exercício 5');
log();

const numeroPar = (numeros) => {
    let listaPar = [];
    for(let par of numeros) {
        if (par % 2 === 0) {
            listaPar.push(par);
        }
    }
    return listaPar;
}

const listaNumeros = [3, 8, 12, 5, 6, 10, 7, 2, 9, 14];
let resultado = numeroPar(listaNumeros);
log('A lista de numeros pares é:' , resultado);

// Exercício 6
log();
log('Exercício 6');
log();

const calculoMedia = (lista) => {
    let soma = 0;
    for (let numero of lista) {
        soma += numero;
    }

    return soma / lista.length;
}

const numericos = [3, 8, 12, 5, 6, 10, 7, 2, 9, 14];
const media = calculoMedia(numericos);
log('Lista de números: ', numericos);
log('A média da lista de números é: ', media);

// maior e menor
log();
const arrMenoresMaiores = [5, 37, 18, 59, 12, -5];

function imprimeMaiorEMenor(arr) {

  let maior = 0;
  let menor = 0;

  for(let i = 0; i < arr.length; i++) {
    if (arr[i] > maior) {
      maior = arr[i]
    }
    if (arr[i] < menor) {
      menor = arr[i]
    }
  }
  return `o maior número é ${maior} e o menor número é ${menor}`;
}

console.log(imprimeMaiorEMenor(arrMenoresMaiores));
log();
