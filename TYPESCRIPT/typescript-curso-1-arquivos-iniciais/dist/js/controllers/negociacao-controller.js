import { Negociacao } from './../models/negociacao.js';
import { Negociacoes } from '../models/negociacoes.js';
import { NegociacoesView } from '../views/negociacoes-view.js';
import { MensagemView } from '../views/mensagem-view.js';
import { DiaDaSemana } from '../enums/dias-da-semana.js';
// enum DiaDaSemana {
//     Domingo,
//     Segunda,
//     Terca,
//     Quarta,
//     Quinta,
//     Sexta,
//     Sabado
// }
export class NegociacaoController {
    constructor() {
        this.negociacoes = new Negociacoes();
        this.negociacoesView = new NegociacoesView('#negociacoesView');
        this.mensagemView = new MensagemView('#mensagemView');
        this.inputData = document.querySelector("#data");
        this.inputQuantidade = document.querySelector("#quantidade");
        this.inputValor = document.querySelector("#valor");
        this.negociacoesView.update(this.negociacoes);
    }
    adiciona() {
        // const negociacao = this.criaNegociacao();
        // const negociacaoTemp = new Negociacao(null, 0, 0);
        // const negociacao = negociacaoTemp.criaDe(
        const negociacao = Negociacao.criaDe(this.inputData.value, this.inputQuantidade.value, this.inputValor.value);
        if (!this.isDiaUtil(negociacao.data)) {
            this.mensagemView
                .update('Negociações só podem ser feitas em dias úteis!');
            return;
        }
        this.negociacoes.adiciona(negociacao);
        this.atualizaView();
        this.limparFormulario();
    }
    // private criaNegociacao(): Negociacao {
    //     const exp = /-/g;
    //     const date = new Date(this.inputData.value.replace(exp, ","));
    //     const quantidade = parseInt(this.inputQuantidade.value);
    //     const valor = parseFloat(this.inputValor.value);
    //     return new Negociacao(date, quantidade, valor);
    // }
    limparFormulario() {
        this.inputData.value = '';
        this.inputQuantidade.value = '';
        this.inputValor.value = '';
        this.inputData.focus();
    }
    atualizaView() {
        this.negociacoesView.update(this.negociacoes);
        this.mensagemView.update('Negociação adicionada com sucesso!');
    }
    isDiaUtil(data) {
        return data.getDay() < DiaDaSemana.SABADO
            && data.getDay() > DiaDaSemana.DOMINGO;
    }
}
