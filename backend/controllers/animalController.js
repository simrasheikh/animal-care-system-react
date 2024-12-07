const {
    listAnimals,
    getAnimalByID_m,
} = require("../models/animalModel");
const db = require("../config/db");

async function getAnimals(req, res) {
    try {
        const animals = await listAnimals();
        res.json({data: animals});
    } catch (err) {
        res.status(500).json({message: "Error fetching animals", error: err});
    }
}

async function getAnimalByID(req, res) {
    try {
        const id = req.params.id;
        const animal = await getAnimalByID_m(id);
        res.json({data: animal});
    } catch (err) {
        res.status(500).json({message: "Error fetching animal data", error: err});
    }
}

module.exports = {
    getAnimals,
    getAnimalByID,
};