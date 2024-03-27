const express = require("express");
const router = express.Router();

const controller = require('../controller/pacienteController');

router.post("/create", controller.createPaciente);
router.get("/all", controller.getAll);
router.get("/byId/:id", controller.getById);
router.put("/update/:id", controller.updatePaciente);
router.delete("/delete/:id", controller.deletePaciente);

module.exports = router;