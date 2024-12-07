const {
    getAnimals_m,
    getAnimalByID_m,
    addAnimal_m,
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

async function addAnimal_c(req, res) {
    try {
        const success = await addAnimal_m(req.body);
        if (success) {
            res.json({message: "Animal added successfully"});
        } else {
            res.status(500).json({message: "Error adding animal"});
        }
    } catch (error) {
        res.status(500).json({message: "Error adding animal", error});
    }
}

module.exports = {
    getAnimals_c,
    getAnimalByID_c,
    addAnimal_c,
};