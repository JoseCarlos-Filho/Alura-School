import { formatarMoeda, formatarData } from "../utils/formatters.js";
import Conta from "../types/Contas.js";
import DataComponent from "./data-component.js";

const elementoSaldo = document.querySelector(".saldo-valor .valor") as HTMLSpanElement;

DataComponent.atualizar();

renderizarSaldo();
function renderizarSaldo(): void {
   if (elementoSaldo !== null) {
        elementoSaldo.textContent = formatarMoeda(Conta.getSaldo());
    }
}

const SaldoComponent = {
    atualizar() {
        renderizarSaldo();
    }
}

export default SaldoComponent;

// if (elementoSaldo !== null && elementoDataAcesso !== null) {
//     elementoSaldo.textContent = formatarInformacoes(saldo, new Date(), FormatoData.DIA_SEMANA_DIA_MES_ANO);
// }

// if (elementoSaldo !== null && elementoDataAcesso !== null) {
//     dataEMoedaFormatada(elementoSaldo, elementoDataAcesso);
// }

// function dataEMoedaFormatada(elementoSaldo, elementoDataAcesso) {
//     const dataAcesso = new Date();
//     elementoDataAcesso.textContent = formatarData(dataAcesso, FormatoData.DIA_SEMANA_DIA_MES_ANO);
//     elementoSaldo.textContent = formatarMoeda(saldo);
    
// }