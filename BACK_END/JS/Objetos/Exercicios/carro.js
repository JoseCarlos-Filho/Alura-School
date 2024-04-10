const {log} = console;
const carro = {
    marca: 'Toyota',
    modelo: 'Hilux',
    ano: 2024,
    cor: 'Branco',
    tipo: 'SUV SW4',
    motorizacao: 'motor 3.0',
    tracao: '4wd',
};
log();
for (let chave in carro) {
    log(`Carro ${chave}: descrição ${carro[chave]}`);
}
log();