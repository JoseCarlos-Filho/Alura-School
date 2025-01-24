// import { Negociacao } from "./models/negociacao.js";
import { NegociacaoController } from "./controllers/negociacao-controller.js";

// const negociacao = new Negociacao(new Date(), 10, 100);
// console.log(negociacao.data);
// console.log(negociacao.volume);

const controller = new NegociacaoController();
const form = document.querySelector('.form');
// verificação para evitar erro de null
// se form for null, não será possível adicionar o evento
if (form) {
    form.addEventListener("submit", event => {
        event.preventDefault();
        controller.adiciona();
    });
} else {
    throw Error('Não foi possível inicializar a aplicação. Verifique se o form existe');
}

const botaoImporta = document.querySelector('#botao-importa');
if (botaoImporta) {
    botaoImporta.addEventListener('click', () => {
        controller.importarDados();
    });
} else {
    throw Error('Botão de importação não foi encontrado');
}


