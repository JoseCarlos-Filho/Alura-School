const notas = [10, 6.5, 8, 7.5];
let soma = 0;

for (let i = 0; i < notas.length; i++) {
    soma += notas[i];
}
const media = soma/4;
console.log(media);

// Utilizando foreach();

const listaNumeros = [10, 5, 6.5, 7.5];
let calculo = 0;

listaNumeros.forEach((numero) => {
    calculo += numero;
});

const calculoMedia = calculo/listaNumeros.length;
console.log(calculoMedia);