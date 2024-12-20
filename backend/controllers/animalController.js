const {
    getAnimals_m,
    getAnimalsUser_m,
    getAnimalByID_m,
    addAnimal_m,
    editAnimal_m,
    deleteAnimal_m,
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

async function getAnimalsUser_c(req, res) {
    try {
        const animals = await getAnimalsUser_m();
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
    console.log(req.body);
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

async function editAnimal_c(req, res) {
    try {
        const id = req.params.id;
        const success = await editAnimal_m(id, req.body);
        if (success) {
            res.json({message: "Animal edited successfully"});
        } else {
            res.status(500).json({message: "Error editing animal"});
        }
    } catch (error) {
        res.status(500).json({message: "Error editing animal", error});
    }
}

async function deleteAnimal_c(req, res) {
    try {
        const id = req.params.id;
        const success = await deleteAnimal_m(id);
        if (success) {
            res.json({message: "Animal deleted successfully"});
        } else {
            res.status(500).json({message: "Error deleting animal"});
        }
    } catch (error) {
        res.status(500).json({message: "Error deleting animal", error});
    }
}

module.exports = {
    getAnimals_c,
    getAnimalsUser_c,
    getAnimalByID_c,
    addAnimal_c,
    editAnimal_c,
    deleteAnimal_c,
};