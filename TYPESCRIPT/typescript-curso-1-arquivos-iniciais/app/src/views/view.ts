// classe abstrata que será herdada por outras classes que irão implementar o template
// A classe usa generics para definir o tipo de dado que será passado para o template

import { logarTempoDeExecucao } from "../decorators/logar-tempo-de-execucao.js";

// A classe possui um método abstrato template que será implementado pelas classes filhas
export abstract class View<T> {
    // protegido para que as classes filhas possam acessar o elemento
    // somente as classes filhas podem acessar o elemento
    protected elemento: HTMLElement;
    private escapar = false;

    constructor(seletor: string, escapar?: boolean) {
        const elemento = document.querySelector(seletor);
        if (elemento) {
            this.elemento = elemento as HTMLElement;
        } else {
            throw Error(`Seletor ${seletor} não existe no DOM. Verifique`);
        }
        if (escapar) {
            this.escapar = escapar;
        }
    }
    // metodo abstrato onde a responsabilidade de implementar o template é da classe filha.

    protected abstract template(model: T): string;
    // {
    //     throw Error('Classe filha precisa implementar o método template');
    // }

    @logarTempoDeExecucao()
    public update(model: T): void {
        let template = this.template(model);
        if (this.escapar) {
            template = template.replace(/<script>[\s\S]*?<\/script>/, '');
        }
        this.elemento.innerHTML = template;
    }
}