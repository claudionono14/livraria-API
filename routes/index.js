const express = require("express");
const router = express.Router();
const listarController = require('../controllers/listarController');

router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

router.get("/show", listarController.listarTodos);
router.put('/editar/:id', listarController.editarLivro);
router.post('/criar', listarController.criarLivro);

module.exports = router;