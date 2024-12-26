import { Negociacao } from "./negociacao";

export class Negociacoes {
    // essa declatação de tipo: Array<Negociacao> é o mesmo que Negociacao[]
    private negociacoes: Negociacao[] = [];

    adiciona(negociacao: Negociacao) {
        this.negociacoes.push(negociacao);
    }
    // A declaração de tipo ReadonlyArray<Negociacao> é o mesmo que readonly Negociacao[]
    // A diferença é que ReadonlyArray é uma interface e readonly é um modificador de acesso
    // ReadonlyArray é uma interface que define um array somente leitura
    lista(): readonly Negociacao[] {
        return this.negociacoes;
    }
}

const negociacoes = new Negociacoes();
negociacoes.lista().forEach(n => {
    console.log(n);
})