import { Imprimivel } from "../utils/imprimivel.js";
import { Negociacao } from "./negociacao.js";

export class Negociacoes implements Imprimivel {
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
}

const negociacoes = new Negociacoes();
negociacoes.lista().forEach(n => {
    console.log(n);
})