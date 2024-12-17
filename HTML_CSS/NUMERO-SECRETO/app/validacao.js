function verificaSeOChutePossuiUmValorValido(chute) {
    const numero = +chute; // +chute converte conteudo para o numero inteiro.

    
    if(chuteForInvalido(numero)) {
        if (chute.toLowerCase() === "game over") {
            document.body.style.backgroundColor = "red";
            document.body.innerHTML = `
            <h2>Jogo Finalizado!</h2>
            <h3>Quer tentar novamente?!</h3>
            <button id="jogar-novamente" class="btn-jogar">Jogar Novamente</button>
        `;
        }
        else {
            elementoChute.innerHTML += '<div>Valor inválido</div>';
        }
    }

    if (numeroForMaiorOuMenorQueOValorPermitido(numero)) {
        elementoChute.innerHTML += `
            <div> 
                Valor inválido: Fale um número entre ${menorValor} e ${maiorValor}
            </div>
        `;
    }

    if (numero === numeroSecreto) {
        document.body.innerHTML = `
            <h2>Você acertou!</h2>
            <h3>O número secreto é ${numeroSecreto}</h3>
            <button id="jogar-novamente" class="btn-jogar">Jogar Novamente</button>
        `
    } else if (numero > numeroSecreto) {
        elementoChute.innerHTML += `
            <div>
                O número secreto é menor <i class="fa-solid fa-arrow-down"></i>
            </div>
        `
    } else {
        elementoChute.innerHTML += `
            <div>
                O número secreto é maior <i class="fa-solid fa-arrow-up"></i>
            </div>
        `
    }

}

function chuteForInvalido(numero) {
    return Number.isNaN(numero)
}

function numeroForMaiorOuMenorQueOValorPermitido(numero) {
    return numero > maiorValor || numero < menorValor;
}

document.body.addEventListener("click", e => {
    if(e.target.id == 'jogar-novamente') {
        window.location.reload();
    }
})
