async function buscaCEP (cep) {
    try {
        const consultaCEP = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
        const resultadoCEP = await consultaCEP.json();
        if(resultadoCEP.erro) {
            throw Error("Cep não existente!");
        }
        console.log(resultadoCEP);
        return resultadoCEP;
    } catch(erro) {
        console.log(erro);
    }
}

let ceps = ['04168040', '01001001'];
let conjuntoCeps = ceps.map(cep => buscaCEP(cep));
Promise.all(conjuntoCeps).then(res => console.log(res));
// buscaCEP()

