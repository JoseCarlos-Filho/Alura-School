// classe abstrata que será herdada por outras classes que irão implementar o template
// A classe usa generics para definir o tipo de dado que será passado para o template
// A classe possui um método abstrato template que será implementado pelas classes filhas
export abstract class View<T> {
    // protegido para que as classes filhas possam acessar o elemento
    // somente as classes filhas podem acessar o elemento
    protected elemento: HTMLElement;

    constructor(seletor: string) {
        this.elemento = document.querySelector(seletor);
    }
    // metodo abstrato onde a responsabilidade de implementar o template é da classe filha.

    protected abstract template(model: T): string;
    // {
    //     throw Error('Classe filha precisa implementar o método template');
    // }

    public update(model: T): void {
        const template = this.template(model);
        this.elemento.innerHTML = template;
    }
}