import { Transacao } from './Transacao.js';
import { TipoTransacao } from './TipoTransacao.js';
import { GrupoTransacao } from './GrupoTransacao.js';
import { ResumoTransacoes } from './ResumoTransacoes.js';

let saldo: number = JSON.parse(localStorage.getItem("saldo")) || 0;
const transacoes: Transacao[] = localStorage.getItem("transacoes") ? JSON.parse(localStorage.getItem("transacoes"), (key: string, value: string) => {
    if (key === "data") {
        return new Date(value);
    }
    return value;
}) : [];

function debitar(valor: number): void {
    if (valor <= 0) {
        throw new Error("Valor a ser debitado deve ser maior que zero!");
    }
    if (valor > saldo) {
        throw new Error("Saldo insuficiente!");
    }
    saldo -= valor;
    localStorage.setItem("saldo", saldo.toString());
}

function depositar(valor: number): void {
    if (valor <= 0) {
        throw new Error("Valor a ser depositado deve ser maior que zero!");
    }
    saldo += valor;
    localStorage.setItem("saldo", saldo.toString());
}

const Conta = {
    getSaldo() {
        return saldo;
    },

    getDataAcesso(): Date {
        return new Date();
    },

    getGruposTransacoes(): GrupoTransacao[] {
        const gruposTransacoes: GrupoTransacao[] = [];
        const listaTransacoes: Transacao[] = structuredClone(transacoes);
        const transacoesOrdenadas: Transacao[] = 
            listaTransacoes.sort((a, b) => b.data.getTime() - a.data.getTime());
        let labelAtualGrupoTransacao: string = "";

        for (let transacao of transacoesOrdenadas) {
            let labelGrupoTransacao: string = transacao.data.toLocaleDateString("pt-BR", {
                month: "long",
                year: "numeric"
            });
            if (labelAtualGrupoTransacao !== labelGrupoTransacao) {
                labelAtualGrupoTransacao = labelGrupoTransacao;
                gruposTransacoes.push({
                    label: labelGrupoTransacao,
                    transacoes: []
                });
            }
            gruposTransacoes.at(-1).transacoes.push(transacao);
        }
        return gruposTransacoes;
    },

    getResumoTransacoes(): ResumoTransacoes {
        const resumoTransacoes: ResumoTransacoes = {
            totalDepositos: 0,
            totalTransferencias: 0,
            totalPagamentosBoleto: 0
        };
        for (let transacao of transacoes) {
            switch (transacao.tipoTransacao) {
                case TipoTransacao.DEPOSITO:
                    resumoTransacoes.totalDepositos += transacao.valor;
                    break;
                
                case TipoTransacao.TRANSFERENCIA:
                    resumoTransacoes.totalTransferencias += transacao.valor;
                    break;

                case TipoTransacao.PAGAMENTO_BOLETO:
                    resumoTransacoes.totalPagamentosBoleto += transacao.valor;
                    break;
            }
        };
        console.log(`Total de depósitos realizados: ${resumoTransacoes.totalDepositos}`);
        console.log(`Total de transferências realizadas: ${resumoTransacoes.totalTransferencias}`);
        console.log(`Total de boletos pagos: ${resumoTransacoes.totalPagamentosBoleto}`);
        return resumoTransacoes;
    },

    registrarTransacao(novaTransacao: Transacao): void {
        if (novaTransacao.tipoTransacao === TipoTransacao.DEPOSITO) {
                depositar(novaTransacao.valor);
                // saldo += novaTransacao.valor;
                // console.log(saldo);
            } else if (
                novaTransacao.tipoTransacao === TipoTransacao.TRANSFERENCIA || 
                novaTransacao.tipoTransacao === TipoTransacao.PAGAMENTO_BOLETO
            ) {
                debitar(novaTransacao.valor);
                novaTransacao.valor *= -1;
                // saldo -= novaTransacao.valor;
            } else {
                throw new Error("Tipo de transação inválido!");
                // alert("Tipo de transação inválido!");
            }
            transacoes.push(novaTransacao);
            console.log(this.getGruposTransacoes());
            localStorage.setItem("transacoes", JSON.stringify(transacoes));
    }
}

export default Conta;