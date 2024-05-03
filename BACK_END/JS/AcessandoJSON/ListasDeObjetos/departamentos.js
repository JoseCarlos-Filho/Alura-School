const {log} = console;
const departamentos = [
    {
        id: 1,
        nome: "Vendas",
        funcionarios: [
            { id: 101, nome: "Ana", cargo: "Vendedor" },
            { id: 102, nome: "Carlos", cargo: "Gerente de vendas" }
        ]
    },
    {
        id: 2,
        nome: "TI",
        funcionarios: [
            { id: 201, nome: "Maria", cargo: "Desenvolvedor" },
            { id: 202, nome: "João", cargo: "Analista de sistemas" }
        ]
    },
    {
        id: 3,
        nome: "RH",
        funcionarios: [
            { id: 301, nome: "Elaine", cargo: "Recrutador" },
            { id: 302, nome: "Vitoria", cargo: "Desenvolvimento Pessoal" }
        ]
    }
]

// Função está incorreta, devolve um array vazio.
// function encontrarFuncionarioPorId(id) {
//     return departamentos.filter((departamento) => {
//         departamento.funcionarios.filter((funcionario) => funcionario.id === id); 
//     });
// };

// function encontrarFuncionarioPorId(id) {
//     const departamento = departamentos.find(departamento => departamento.funcionarios.findIndex(funcionario => funcionario.id === id) !== -1);
//     return departamento ? departamento.funcionarios.find(funcionario => funcionario.id === id) : null;
// }

function encontrarFuncionarioPorId(id) {
    const departamento = departamentos.find(
        (departamento) => departamento.funcionarios.findIndex(
            (funcionario) => funcionario.id === id) !== -1 );

    return departamento ? departamento.funcionarios.find((funcionario) => funcionario.id === id) : log('funcionário não encontrado', null);
}

const encontraFuncionarioComSucesso = encontrarFuncionarioPorId(302);
log()
log('Busca por funcionário com sucesso:');
log(encontraFuncionarioComSucesso);
log()

const encontraFuncionarioSemSucesso = encontrarFuncionarioPorId(300);
log('Busca por funcionário sem sucesso:');
log(encontraFuncionarioSemSucesso);