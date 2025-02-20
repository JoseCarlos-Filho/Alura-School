import Conta from "../types/Contas.js";
import { formatarData } from "../utils/formatters.js";
import { FormatoData } from "../types/FormatoData.js";

const elementoDataAcesso = document.querySelector(".block-saldo time") as HTMLTimeElement;

function renderizaData(): void {
    if (elementoDataAcesso !== null) {
        elementoDataAcesso.textContent = formatarData(
            Conta.getDataAcesso(), FormatoData.DIA_SEMANA_DIA_MES_ANO
        );
    }
}

const DataComponent = {
    atualizar() {
        renderizaData();
    }
}

export default DataComponent;