const express = require("express");
const router = express.Router();
const animalController = require("../controllers/animalController");

router.get("/animals", animalController.getAnimals);
router.get("/animals/:id", animalController.getAnimalByID);

module.exports = router;