export class Negociacoes {
    constructor() {
        // essa declatação de tipo: Array<Negociacao> é o mesmo que Negociacao[]
        this.negociacoes = [];
    }
    adiciona(negociacao) {
        this.negociacoes.push(negociacao);
    }
    // A declaração de tipo ReadonlyArray<Negociacao> é o mesmo que readonly Negociacao[]
    // A diferença é que ReadonlyArray é uma interface e readonly é um modificador de acesso
    // ReadonlyArray é uma interface que define um array somente leitura
    lista() {
        return this.negociacoes;
    }
}
const negociacoes = new Negociacoes();
negociacoes.lista().forEach(n => {
    console.log(n);
});
