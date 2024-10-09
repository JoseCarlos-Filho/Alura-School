/*
------------------ Declaração de variaveis -----------------------
*/

const html = document.querySelector('html');
// const btnActions = document.querySelectorAll('.app__card-button');
const btnFoco =  document.querySelector('.app__card-button--foco');
const btnCurto = document.querySelector('.app__card-button--curto');
const btnLongo = document.querySelector('.app__card-button--longo');
const displayTimer = document.getElementById('timer');
const displayTitle = document.querySelector('.app__title');
const displayImagem = document.querySelector('.app__image');
const btnStartPause = document.getElementById('start-pause');
const banner = document.querySelector('.app__image');
const titulo = document.querySelector('.app__title');
const botoes = document.querySelectorAll('.app__card-button');
const musicaFocoInput = document.querySelector('#alternar-musica');
const musica = new Audio('/sons/luna-rise-part-one.mp3');

let tempoDecorridoEmSegundos = 5;
let intervaloId = null;

const tempFoco = 1500;
const tempCurto = 300;
const tempLongo = 900;

/*
------------------ Ações dos botão de Audio  ----------------------------------------------------
*/
musica.loop = true;
musicaFocoInput.addEventListener("change", () => {
    if (musica.paused) {
        musica.play();
    } else {
        musica.pause();
    }
})

/*
------------------ Ações dos botões Foco, descanso-curto, descanso-longo  -----------------------
*/

btnFoco.addEventListener("click", () => {
    alterarContexto('foco');
    btnFoco.classList.add("active");
});

btnCurto.addEventListener("click", () => {
    alterarContexto('descanso-curto');
    btnCurto.classList.add("active");
})

btnLongo.addEventListener("click", () => {
    alterarContexto('descanso-longo');
    btnLongo.classList.add("active");
})

function alterarContexto(contexto) {
    botoes.forEach(contexto => {
        contexto.classList.remove("active");
    })
    html.setAttribute("data-contexto", contexto);
    banner.setAttribute("src", `/imagens/${contexto}.png`);
    switch (contexto) {
        case "foco":
            titulo.innerHTML = `Otimize sua produtividade,<br>
                <strong class="app__title-strong">mergulhe no que importa.</strong>`;
            break;
        case "descanso-curto":
            titulo.innerHTML = `Que tal dar uma respirada?<br>
                <strong class="app__title-strong">Faça uma pausa curta!</strong>`;
            break;
        case "descanso-longo":
            titulo.innerHTML = `Hora de voltar à superfície.<br>
                <strong class="app__title-strong">Faça uma pausa longa.</strong>`;
            break;
        default:
            break;
    }
}


/*
------------------ Função para ontrolar o temporizador  -----------------------
*/

const contagemRegressiva = () => {
    if(tempoDecorridoEmSegundos <= 0) {
        zerar();
        alert('Tempo finalizado');
        return;
    }
    tempoDecorridoEmSegundos -= 1;
    console.log("temporizador: " + tempoDecorridoEmSegundos);
}

btnStartPause.addEventListener("click", iniciarOuPausar);

function iniciarOuPausar() {
    if(intervaloId) {
        zerar()
        return;
    }
    intervaloId = setInterval(contagemRegressiva, 1000);
}

function zerar() {
    clearInterval(intervaloId);
    intervaloId = null;
}











// console.log(btnActions);

// btnActions.forEach(btnContexto => {
//     btnContexto.addEventListener("click", () => {
//         const contexto = btnContexto.getAttribute('data-contexto');
//         // const classeDinamica = `app__card-button--${contexto}`;
//         // console.log(contexto)
//         // console.log(classeDinamica);
//         // if(btnContexto.classList.contains(classeDinamica)) {
//         //     console.log("entrou na condicional");
//         //     html.setAttribute('data-contexto', `${contexto}`);
//         // }
//         // console.log(btnContexto);
//         console.log('Contexto:', contexto);
//         console.log(btnContexto.hasAttribute(contexto));
//         // console.log('Classe Dinâmica:', classeDinamica);
//         // console.log('Classes do Botão:', btnContexto.className);

//         if (contexto === 'foco') {
//             html.setAttribute('data-contexto', contexto);
//         } else {
//             console.log(`Botão não contém a classe dinâmica esperada: ${contexto}`);
//         }
//     }); 
// });