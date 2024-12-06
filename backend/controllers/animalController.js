const {
    listAnimals,
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

module.exports = {
    getAnimals,
};