var express = require("express");
var router = express.Router();

var instrumentoController = require("../controllers/instrumentoController");

router.get("/", function (req, res) {
   instrumentoController.testar(req, res);
});

router.get("/pegar", function (req, res) {
    instrumentoController.pegar(req, res);
});

router.post("/baixo", function (req, res) {
    instrumentoController.baixo(req, res);
})

router.post("/guitarra", function (req, res) {
    instrumentoController.guitarra(req, res);
})

router.post("/violao", function (req, res) {
    instrumentoController.violao(req, res);
})

router.post("/teclado", function (req, res) {
    instrumentoController.teclado(req, res);
})

router.post("/bateria", function (req, res) {
    instrumentoController.bateria(req, res);
})


module.exports = router;
