import { Negociacao } from '../models/negociacao.js';
import { Negociacoes } from '../models/negociacoes.js';
import { NegociacoesView } from '../views/negociacoes-view.js';
import { MensagemView } from '../views/mensagem-view.js';
import { DiaDaSemana } from '../enums/dias-da-semana.js';
import { logarTempoDeExecucao } from '../decorators/logar-tempo-de-execucao.js';
import { inspect } from '../decorators/inspect.js';
import { domInjector } from '../decorators/dom-injector.js';

export class NegociacaoController {
    @domInjector('#data')
    private inputData: HTMLInputElement;

    @domInjector('#quantidade')
    private inputQuantidade: HTMLInputElement;

    @domInjector('#valor')
    private inputValor: HTMLInputElement;

    private negociacoes = new Negociacoes();
    private negociacoesView = new NegociacoesView('#negociacoesView');
    private mensagemView = new MensagemView('#mensagemView');

    constructor() {
        // casting para HTMLInputElement
        // this.inputData = document.querySelector("#data") as HTMLInputElement;
        // Ao utilizar a propriedade strictNullChecks do TypeScript
        // é necessário verificar se o elemento foi encontrado no DOM antes de fazer o casting 
        this.negociacoesView.update(this.negociacoes);
    }
    @inspect()
    @logarTempoDeExecucao()
    public adiciona(): void {
        const negociacao = Negociacao.criaDe(
            this.inputData.value,
            this.inputQuantidade.value,
            this.inputValor.value
        );
        if (!this.isDiaUtil(negociacao.data)) {
            this.mensagemView
            .update('Negociações só podem ser feitas em dias úteis!');
            return;
        }

        this.negociacoes.adiciona(negociacao);
        this.atualizaView();
        this.limparFormulario(); 
    }

    public importarDados(): void {
        fetch('http://localhost:8080/dados')
            .then(res => res.json())
            .then((dados: any[]) => {
                return dados.map(dadoParcial => {
                    return new Negociacao(
                        new Date(), 
                        dadoParcial.vezes, 
                        dadoParcial.montante
                    );
                })
            })
            .then(negociacoesDeHoje => {
                for (let negociacao of negociacoesDeHoje) {
                    this.negociacoes.adiciona(negociacao);
                }
                this.negociacoesView.update(this.negociacoes);
            })
    }

    // private criaNegociacao(): Negociacao {
    //     const exp = /-/g;
    //     const date = new Date(this.inputData.value.replace(exp, ","));
    //     const quantidade = parseInt(this.inputQuantidade.value);
    //     const valor = parseFloat(this.inputValor.value);
    //     return new Negociacao(date, quantidade, valor);
    // }

     private limparFormulario(): void {
        this.inputData.value = '';
        this.inputQuantidade.value = '';
        this.inputValor.value = '';
        this.inputData.focus();
    }

    private atualizaView(): void {
        this.negociacoesView.update(this.negociacoes);
        this.mensagemView.update('Negociação adicionada com sucesso!');
    }

    private isDiaUtil(data: Date): boolean {
        return data.getDay() < DiaDaSemana.SABADO 
        && data.getDay() > DiaDaSemana.DOMINGO;
    }
}