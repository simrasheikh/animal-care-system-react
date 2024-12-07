const {
    getAnimals_m,
    getAnimalByID_m,
} = require("../models/animalModel");
const db = require("../config/db");

async function getAnimals_c(req, res) {
    try {
        const animals = await getAnimals_m();
        res.json({data: animals});
    } catch (err) {
        res.status(500).json({message: "Error fetching animals", error: err});
    }
}

async function getAnimalByID_c(req, res) {
    try {
        const id = req.params.id;
        const animal = await getAnimalByID_m(id);
        res.json({data: animal});
    } catch (err) {
        res.status(500).json({message: "Error fetching animal data", error: err});
    }
}

module.exports = {
    getAnimals_c,
    getAnimalByID_c,
};