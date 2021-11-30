var express = require("express");
var router = express.Router();

var sentimentoController = require("../controllers/sentimentoController");

//router.get("/", function (req, res) {
  //  sentimentoController.testar(req, res);
//});

router.get("/pegar", function (req, res) {
    sentimentoController.pegar(req, res);
});

router.post("/feliz", function (req, res) {
    sentimentoController.feliz(req, res);
})

router.post("/triste", function (req, res) {
    sentimentoController.triste(req, res);
})

router.post("/bravo", function (req, res) {
    sentimentoController.bravo(req, res);
})

router.post("/normal", function (req, res) {
    sentimentoController.normal(req, res);
})








module.exports = router;