const menorValor = 1
const maiorValor = 1000
const numeroSecreto = gerarNumeroAleatorio() 
    
function gerarNumeroAleatorio() {
    return parseInt(Math.random() * maiorValor + 1);
}

const elementoMenorValor = document.querySelector("#menor-valor");
elementoMenorValor.innerHTML = `${menorValor}`;

const elementoMaiorValor =  document.querySelector("#maior-valor");
elementoMaiorValor.innerHTML = `${maiorValor}`;

console.log('Numero Secreto', numeroSecreto);
