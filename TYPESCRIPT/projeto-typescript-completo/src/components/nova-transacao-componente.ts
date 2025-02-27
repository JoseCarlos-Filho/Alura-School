import { Transacao } from "../types/Transacao.js";
import { TipoTransacao } from "../types/TipoTransacao.js";
import SaldoComponent from "./saldo-componente.js";
import Conta from "../types/Contas.js";
import ExtratoComponent from "./extrato-component.js";


const elementoFormulario = document.querySelector(".block-nova-transacao form") as HTMLFormElement;
elementoFormulario.addEventListener("submit", function(event) {
    try {
        event.preventDefault();
        if (!elementoFormulario.checkValidity()) {
            alert("Preencha todos os campos da transação!");
        }

        const inputTipoTransacao = document.querySelector("#tipoTransacao") as HTMLSelectElement;
        const inputValor = document.querySelector("#valor") as HTMLInputElement;
        const inputData = document.querySelector("#data") as HTMLInputElement;

        let tipoTransacao: TipoTransacao = inputTipoTransacao.value as TipoTransacao;
        let valor: number = inputValor.valueAsNumber;
        let data: Date = new Date(inputData.value + " 00:00:00");

        const novaTransacao: Transacao = {
        tipoTransacao: tipoTransacao,
        valor: valor,
        data: data 
        }

        Conta.registrarTransacao(novaTransacao);
        SaldoComponent.atualizar();
        ExtratoComponent.atualizar();
        Conta.getResumoTransacoes();
        elementoFormulario.reset();
    } catch (error) {
        alert(error.message);
    }
});