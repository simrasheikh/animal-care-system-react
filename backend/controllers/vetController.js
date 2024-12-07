const {
    getVets_m,
} = require('../models/vetModel');
const db = require('../config/db');

async function getVets_c(req, res) {
    try {
        const vets = await getVets_m();
        res.status(200).json(vets);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

module.exports = {
    getVets_c,
};