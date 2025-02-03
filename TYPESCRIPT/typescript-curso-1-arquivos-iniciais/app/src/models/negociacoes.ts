import { Negociacao } from "./negociacao.js";
import { Modelo } from "../interface/modelo.js";

export class Negociacoes implements Modelo<Negociacoes> {
    // essa declatação de tipo: Array<Negociacao> é o mesmo que Negociacao[]
    private negociacoes: Negociacao[] = [];

    public adiciona(negociacao: Negociacao) {
        this.negociacoes.push(negociacao);
    }
    // A declaração de tipo ReadonlyArray<Negociacao> é o mesmo que readonly Negociacao[]
    // A diferença é que ReadonlyArray é uma interface e readonly é um modificador de acesso
    // ReadonlyArray é uma interface que define um array somente leitura
    public lista(): readonly Negociacao[] {
        return this.negociacoes;
    }

    public paraTexto(): string {
        return JSON.stringify(this.negociacoes, null, 2);
    }

    public ehIgual(negociacoes: Negociacoes): boolean {
        return JSON.stringify(this.negociacoes) === JSON.stringify(negociacoes.lista());
    }
}

const negociacoes = new Negociacoes();
negociacoes.lista().forEach(n => {
    console.log(n);
})