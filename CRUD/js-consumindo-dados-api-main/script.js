async function buscaCEP (cep) {
    let messagemErro = document.getElementById("erro");
    messagemErro.innerHTML = "";
    try {
        const consultaCEP = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
        const resultadoCEP = await consultaCEP.json();
        if(resultadoCEP.erro) {
            throw Error("Cep não existente!");
        }

        let cidade = document.querySelector("#cidade");
        let logradouro = document.querySelector("#endereco");
        let estado = document.querySelector("#estado");
        let bairro = document.querySelector("#bairro");
        let numero = document.querySelector("#numero");
        cidade.value = resultadoCEP.localidade;
        logradouro.value = resultadoCEP.logradouro;
        estado.value = resultadoCEP.uf;
        bairro.value = resultadoCEP.bairro;
        console.log(resultadoCEP);
        return resultadoCEP;
    } catch(erro) {
        messagemErro.innerHTML = `<p>Cep inválido. Tente novamente!</p>`
        console.log(erro);
    }
}

const cep = document.querySelector("#cep");
cep.addEventListener("focusout", (e) => {
    e.preventDefault();
    buscaCEP(cep.value)
});
// let ceps = ['04168040', '01001001'];
// let conjuntoCeps = ceps.map(cep => buscaCEP(cep));
// Promise.all(conjuntoCeps).then(res => console.log(res));
// buscaCEP()

