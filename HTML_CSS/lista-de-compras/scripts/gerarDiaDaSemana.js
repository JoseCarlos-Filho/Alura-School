function gerarDiaDaSemana() {
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
        hour: "numeric",
        minute: "numeric",
        hour12: false,
        timeZone: fusoHorario
    })

    const dataHoraFormatada = `${diaSemana} (${dataCompleta}) às ${horaCompleta}`

    return dataHoraFormatada
}

export default gerarDiaDaSemana;