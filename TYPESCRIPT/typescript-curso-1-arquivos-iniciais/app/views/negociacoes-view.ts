import { Negociacoes } from "../models/negociacoes.js";
import { View } from "./view.js";

export class NegociacoesView extends View<Negociacoes> {

    protected template(model: Negociacoes): string {
        // outra forma de formatar a data
        // <td>${negociacao.data.getDate()}/${negociacao.data.getMonth() + 1}/${negociacao.data.getFullYear()}</td>
        return `
        <table class="table table-hover table-bordered">
            <thead>
                <tr>
                    <th>DATA</th>
                    <th>QUANTIDADE</th>
                    <th>VALOR</th>
                </tr>
            </thead>
            
            <tbody>
                ${model.lista().map(negociacao => {
                    return `
                    <tr>
                        <td>${this.converteData(negociacao.data)}</td>
                        <td>${negociacao.quantidade}</td>
                        <td>${negociacao.valor}</td>
                    </tr>
                    `;
                }).join('')}
            </tbody>
            
            <tfoot>
            </tfoot>
        </table>
        `;
    }

    private converteData(data: Date) {
        return new Intl.DateTimeFormat().format(data);
    }
    
}