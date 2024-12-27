// classe abstrata que será herdada por outras classes que irão implementar o template
// A classe usa generics para definir o tipo de dado que será passado para o template
// A classe possui um método abstrato template que será implementado pelas classes filhas
export class View {
    constructor(seletor) {
        this.elemento = document.querySelector(seletor);
    }
    // {
    //     throw Error('Classe filha precisa implementar o método template');
    // }
    update(model) {
        const template = this.template(model);
        this.elemento.innerHTML = template;
    }
}
