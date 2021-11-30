
var rankingModel = require("../models/rankingModel")

function listar(req, res) {
    rankingModel.listar().then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar os avisos: ", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}


function editar(req, res) {
    var novaDescricao = req.body.descricao; //nome da variavel e o que ele está pegando do SessionStorage
    var idAviso = req.params.idAviso

    rankingModel.editar(novaDescricao, idAviso)
        .then(
            function (resultado) {
               res.json(resultado);
            }
        ).catch(
            function (erro) {
                console.log(erro);
                console.log("Houve um erro ao buscar os avisos: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            }
        );
}


module.exports = {
    listar,
    editar
}