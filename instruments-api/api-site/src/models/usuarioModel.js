var database = require("../database/config")

function listar() {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar()");
    var instrucao = `
        SELECT * FROM usuario;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function entrar(email, senha) {
    var instrucao = `
        SELECT * FROM usuario WHERE email = '${email}' AND senha = '${senha}';
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function cadastrar(nome, email, senha, data_nascimento, musico ) {
    var instrucao = `
        INSERT INTO usuario (nome, email, senha, data_nascimento, musico) VALUES ('${nome}', '${email}', '${senha}', '${data_nascimento}', '${musico}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}
function favorito(id, idinstrumento) {
    var instrucao = `
    update usuario set fk_instrumentosFavorito = ${idinstrumento} where id = ${id}; 
    `
    return database.executar(instrucao);
}




function funcmusico() {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function funcmusico()");
    
    var instrucao =  `select count(musico) as 'musicobd' from usuario where musico= 'sim'; `
    ;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}
function funcnomusico() {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function funcmusico()");
    
    var instrucao =  `select count(musico) as 'nomusicobd' from usuario where musico= 'nao'; `
    ;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}
module.exports = {
    entrar,
    cadastrar,
    listar,
    favorito,
    funcmusico,
    funcnomusico,
};