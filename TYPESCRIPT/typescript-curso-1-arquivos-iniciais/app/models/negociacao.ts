export class Negociacao {
    
    constructor(
        public readonly data: Date, 
        public readonly quantidade: number, 
        public readonly valor: number
    ) {}

    // get data(): Date {
    //     return this._data;
    // }

    // get quantidade(): number {
    //     return this._quantidade;
    // }

    // get valor(): number {
    //     return this._valor;
    // }

    get volume(): number {
        return this.quantidade * this.valor;
    }
}