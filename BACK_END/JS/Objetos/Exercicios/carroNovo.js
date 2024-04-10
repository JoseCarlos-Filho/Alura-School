const {log} = console;
const carro = {
    marca: 'Toyota',
    modelo: 'Hilux',
    ano: 2024,
    cor: 'Branco', 
    ligado: false,
};

const carroNovo = {
    marca: 'Volkswagen',
    modelo: 'Jetta',
    ano: 2022,
    cor: 'Preto'
};

const carroComNovosDetalhes = {...carro, ...carroNovo};
log(`Carro com novos detalhes:\n ${carroComNovosDetalhes}`);
log(carroComNovosDetalhes);
log();

carroComNovosDetalhes.ano = 2010;
carroComNovosDetalhes.modelo = 'Gol';

log('Carro com novos detalhes atualizado:');
log(carroComNovosDetalhes);

