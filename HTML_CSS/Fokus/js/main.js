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

const tempFoco = 1500;
const tempCurto = 300;
const tempLongo = 900;


/*
------------------ Ações dos botões Foco, descanso-curto, descanso-longo  -----------------------
*/

btnFoco.addEventListener("click", () => {
    alterarContexto('foco');
});

btnCurto.addEventListener("click", () => {
    alterarContexto('descanso-curto');
})

btnLongo.addEventListener("click", () => {
    alterarContexto('descanso-longo');
})

function alterarContexto(contexto) {
    html.setAttribute("data-contexto", contexto);
    banner.setAttribute("src", `/imagens/${contexto}.png`);
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