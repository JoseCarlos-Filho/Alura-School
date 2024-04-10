const {log} = console;
const carro = {
    marca: 'Toyota',
    modelo: 'Hilux',
    ano: 2024,
    cor: 'Branco',
    placa: 'AAA1234', 
};

log()
Object.defineProperty(carro, 'placa', {enumerable: false});

for(let chave in carro) {
    log(`Propriedade enumerada ${chave} --> ${carro[chave]}`);
}

log(`Chaves enumeradas: ${Object.keys(carro)}`);

log(`Propriedade placa: ${carro.placa}`);