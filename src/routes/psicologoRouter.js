const express = require("express");
const router = express.Router();

const controller = require('../controller/psicologoController');

router.post("/create", controller.createPsicologo);
router.get("/all", controller.getAll);
router.get("/byId/:id", controller.getById);
router.put("/update/:id", controller.updatePsicologo);
router.delete("/delete/:id", controller.deletePsicologo);

module.exports = router;