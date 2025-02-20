import { formatarMoeda } from "../utils/formatters.js";
import Conta from "../types/Contas.js";
import DataComponent from "./data-component.js";
const elementoSaldo = document.querySelector(".saldo-valor .valor");
DataComponent.atualizar();
renderizarSaldo();
function renderizarSaldo() {
    if (elementoSaldo !== null) {
        elementoSaldo.textContent = formatarMoeda(Conta.getSaldo());
    }
}
const SaldoComponent = {
    atualizar() {
        renderizarSaldo();
    }
};
export default SaldoComponent;
