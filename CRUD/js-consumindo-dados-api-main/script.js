async function mostraCEP () {
    try {
        const consultaCEP = await fetch("https://viacep.com.br/ws/01001000/json/");
        const resultadoCEP = await consultaCEP.json();
        console.log(resultadoCEP);
    } catch(error) {
        console.log(error);
    }
}

mostraCEP()

