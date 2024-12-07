async function buscaCEP () {
    try {
        const consultaCEP = await fetch("https://viacep.com.br/ws/01001000/json/");
        const resultadoCEP = await consultaCEP.json();
        if(resultadoCEP.erro) {
            throw Error("Cep não existente!");
        }
        console.log(resultadoCEP);
    } catch(erro) {
        console.log(erro);
    }
}

buscaCEP()

