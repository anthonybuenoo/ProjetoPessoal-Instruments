var database = require("../database/config")



function feliz(emocao) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function feliz():",emocao);
    var instrucao2 = `
        INSERT INTO emocoes (emocao) VALUE ('${emocao}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucao2);
    return database.executar(instrucao2);
}



function triste(emocao) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function feliz():",emocao);
    var instrucao3 = `
        INSERT INTO emocoes (emocao) VALUE ('${emocao}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucao3);
    return database.executar(instrucao3);
}


function bravo(emocao) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function feliz():",emocao);
    var instrucao4 = `
        INSERT INTO emocoes (emocao) VALUE ('${emocao}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucao4);
    return database.executar(instrucao4);
}


function normal(emocao) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function feliz():",emocao);
    var instrucao5 = `
        INSERT INTO emocoes (emocao) VALUE ('${emocao}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucao5);
    return database.executar(instrucao5);
}



function pegar() {
    console.log("ACESSEI O AVISO  MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar()");
    var instrucao6 = `
    select count(emocao) as 'emoções' from emocoes group by emocao order by emocao desc;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao6);
    return database.executar(instrucao6);
}













module.exports = {
    feliz,
    triste,
    bravo,
    normal,
    pegar
   
};