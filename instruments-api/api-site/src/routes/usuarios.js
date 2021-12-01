var express = require("express");
var router = express.Router();

var usuarioController = require("../controllers/usuarioController");
    
router.get("/", function (req, res) {
    usuarioController.testar(req, res);
});

router.get("/listar", function (req, res) {
    usuarioController.listar(req, res);
});

router.post("/cadastrar", function (req, res) {
    usuarioController.cadastrar(req, res);
})

router.post("/autenticar", function (req, res) {
    usuarioController.entrar(req, res);
});

router.post("/favorito/id", function (req, res) {
    usuarioController.favorito(req, res);
});
router.get("/funcmusico", function (req, res) {
    usuarioController.funcmusico(req, res);

});router.get("/funcnomusico", function (req, res) {
    usuarioController.funcnomusico(req, res);
});


module.exports = router;