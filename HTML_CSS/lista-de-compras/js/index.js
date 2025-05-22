const inputItem = document.getElementById("input-item");
const btnAdicionar = document.getElementById("adicionar-item");
const listaDeCompras = document.getElementById("lista-de-compras");

let contador = 0;

btnAdicionar.addEventListener("click", (evento) => {
    evento.preventDefault();
    let item = inputItem.value
    if (!item) {
        alert("Digite um item válido!");
        return;
    }

    const itemDaLista = document.createElement("li");
    const divItemDaLista = document.createElement("div");
    divItemDaLista.classList.add("lista-item-container");
    
    const itemInputCheckbox = document.createElement("input");
    itemInputCheckbox.type = "checkbox";
    itemInputCheckbox.id = "checkbox-" + contador++;

    const itemNome = document.createElement("p");
    itemNome.innerText = item;

    divItemDaLista.appendChild(itemInputCheckbox);
    divItemDaLista.appendChild(itemNome);

    itemDaLista.appendChild(divItemDaLista);
    listaDeCompras.appendChild(itemDaLista);

    // manipulando data
    const agora = new Date(); 
    const fusoHorario = "America/Sao_Paulo";

    // Dia da semana
    const diaSemana = agora.toLocaleDateString("pt-BR", { 
        weekday: "long", 
        timeZone: fusoHorario
    });

    // formato data DD/MM/YYYY
    const dataCompleta = agora.toLocaleDateString("pt-BR", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
        timeZone: fusoHorario
    });

    // hora no formato HH:mm (ex: "08:30")
    const horaCompleta = agora.toLocaleTimeString("pt-BR", {
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
        timeZone: fusoHorario
    })

    const dataHoraFormatada = `${diaSemana} (${dataCompleta}) às ${horaCompleta}`

    const inputDiaDaSemana = document.createElement("p");
    inputDiaDaSemana.classList.add("texto-data");
    inputDiaDaSemana.innerText = dataHoraFormatada;
    itemDaLista.appendChild(inputDiaDaSemana);

})