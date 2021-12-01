var database = require("../database/config")



function baixo(nome) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function baixo():",nome);
    var instrucao2 = `
        INSERT INTO instrumento (nome) VALUE ('${nome}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucao2);
    return database.executar(instrucao2);
}



function guitarra(nome) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function baixo():",nome);
    var instrucao3 = `
        INSERT INTO instrumento (nome) VALUE ('${nome}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucao3);
    return database.executar(instrucao3);
}


function violao(nome) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function baixo():",nome);
    var instrucao4 = `
        INSERT INTO instrumento (nome) VALUE ('${nome}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucao4);
    return database.executar(instrucao4);
}


function teclado(nome) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function baixo():",nome);
    var instrucao5 = `
        INSERT INTO instrumento (nome) VALUE ('${nome}');   
    `;
    console.log("Executando a instrução SQL: \n" + instrucao5);
    return database.executar(instrucao5);
}



function bateria() {
    console.log("ACESSEI O AVISO  MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function baixo()");
    var instrucao6 = `
    INSERT INTO instrumento (nome) VALUE ('${nome}');   
    `;
    console.log("Executando a instrução SQL: \n" + instrucao6);
    return database.executar(instrucao6);
}

function pegar() {
    console.log("ACESSEI O AVISO  MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar()");
    var instrucao6 = `
    select count(nome) as 'nome' from instrumento group by nome order by nome desc;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao6);
    return database.executar(instrucao6);
}



module.exports = {
    baixo,
    guitarra,
    violao,
    teclado,
    bateria,
    pegar,
   

};