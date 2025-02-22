import Conta from "../types/Contas.js";
import { FormatoData } from "../types/FormatoData.js";
import { formatarData, formatarMoeda } from "../utils/formatters.js";
const elementoRegistroTransacoesExtrato = document.querySelector(".extrato .registro-transacoes");
renderizarExtrato();
function renderizarExtrato() {
    const gruposTransacoes = Conta.getGruposTransacoes();
    elementoRegistroTransacoesExtrato.innerHTML = "";
    let htmlRegistrosTransacoes = "";
    for (let grupoTransacao of gruposTransacoes) {
        let htmlTransacoesItem = "";
        for (let transacao of grupoTransacao.transacoes) {
            htmlTransacoesItem += `
                <div class="transacao-item">
                        <div class="transacao-info">
                            <span class="tipo">${transacao.tipoTransacao}</span>
                            <strong class="valor">${formatarMoeda(transacao.valor)}</strong>
                        </div>
                        <time class="data">${formatarData(transacao.data, FormatoData.DIA_MES)}</time>
                </div>
            `;
        }
        htmlRegistrosTransacoes += `
            <div class="transacoes-group">
                <strong class="mes-group">${grupoTransacao.label}</strong>
                ${htmlTransacoesItem}
            </div>
        `;
    }
    if (htmlRegistrosTransacoes === "") {
        htmlRegistrosTransacoes = "<div>Não há transações Registradas.</div>";
    }
    elementoRegistroTransacoesExtrato.innerHTML = htmlRegistrosTransacoes;
}
const ExtratoComponent = {
    atualizar() {
        renderizarExtrato();
    }
};
export default ExtratoComponent;
