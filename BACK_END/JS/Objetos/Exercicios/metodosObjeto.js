const {log} = console;
const carro = {
    marca: 'Toyota',
    modelo: 'Hilux',
    ano: 2024,
    cor: 'Branco',
    ligado: false,
    placa: 'AAA1234',
    ligar: function() {
        if(this.ligado !== true) {
            log();
            log('Ligando o carro')
            return this.ligado = true;
        } else {
            log();
            log('O carro já está Ligado');
        }
    },
    desligar: function() {
        if(this.ligado) {
            log();
            log('Desligando o carro');
            return this.ligado = false;
        } else {
            log();
            log('O carro já esta desligado');
        }
    },
    obterDetalhes: function() {
        log();
        log('Detalhes do carro:');
        log();
        const estado = this.ligado ? 'ligado' : 'desligado';
        log(`Marca: ${this.marca}\nModelo: ${this.modelo}\nAno: ${this.ano}\nCor: ${this.cor}\nEstado: ${estado}`);
        // for (let chave in carro) {
        //     if(!(typeof carro[chave] === 'object' || typeof carro[chave] === 'function')) {
        //         log(`${chave} ==> ${carro[chave]}`);
        //     }
        // }
    }, 
};

carro.ligar();
carro.desligar();
carro.desligar();
carro.ligar();
carro.obterDetalhes();
