const menorValor = 1
const maiorValor = 1000
const numeroSecreto = gerarNumeroAleatorio() 
    
function gerarNumeroAleatorio() {
    return parseInt(Math.random() * maiorValor + 1);
}

const elementoMenorValor = document.querySelector("#menor-valor");
menor.innerHTML = `${menorValor}`;

const elementoMaiorValor =  document.querySelector("#maior-valor");
maior.innerHTML = `${maiorValor}`;

console.log('Numero Secreto', numeroSecreto);
