const {log} = console;
const pessoa = {
    nome: 'José',
    notas: [9, 9, 9, 9],
    calcularMediaNotas: function(notas) {
        let soma = 0;
        notas.forEach((nota) => soma += nota);
        const media = soma / notas.length;
        return media;
    },
    classificarDesempenho: function(media) {
        let desempenho;
        if (media >= 9) {
            return desempenho = 'Excelente';
        } else if (media > 7.5 && media < 9) {
            return desempenho = 'Bom';
        } else if (media >= 6 && media <= 7.5) {
            return desempenho = 'Regular';
        } else {
            return desempenho = 'Insuficiente';
        }
    },
};

const mediaTotal = pessoa.calcularMediaNotas(pessoa.notas);
const situacao = pessoa.classificarDesempenho(mediaTotal);
log(`Média da pessoa é ${mediaTotal} tem situação ${situacao}`);