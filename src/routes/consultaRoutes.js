const express = require("express");
const router = express.Router();

const controller = require('../controller/consultaController');

router.post("/create", controller.createConsulta);
router.get("/all", controller.getAll);
router.get("/byId/:id", controller.getById);
router.put("/update/:id", controller.updateConsulta);
router.delete("/delete/:id", controller.deleteConsulta);


module.exports = router;