const express = require("express");
const router = express.Router();
const animalController = require("../controllers/animalController");

router.get("/animals", animalController.getAnimals_c);
router.get("/animals/:id", animalController.getAnimalByID_c);
router.post("/animals", animalController.addAnimal_c);

module.exports = router;