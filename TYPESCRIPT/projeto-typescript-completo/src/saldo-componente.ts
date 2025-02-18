let saldo = 3000;

const elementoSaldo = document.querySelector(".saldo-valor .valor") as HTMLSpanElement;
const elementoDataAcesso = document.querySelector(".block-saldo time") as HTMLTimeElement;

if (elementoSaldo !== null) {
    elementoSaldo.textContent = formatarMoeda(saldo);
}

if (elementoDataAcesso !== null) {
    const dataAcesso: Date = new Date();
    elementoDataAcesso.textContent = formatarData(dataAcesso, FormatoData.DIA_SEMANA_DIA_MES_ANO);
}

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