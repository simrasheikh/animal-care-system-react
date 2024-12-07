const {
    getOwners_m,
} = require("../models/ownerModel");
const db = require("../config/db");

async function getOwners_c(req, res) {
    try {
        const owners = await getOwners_m();
        res.json({data: owners});
    } catch (err) {
        res.status(500).json({message: "Error fetching owners", error: err});
    }
}

module.exports = {
    getOwners_c,
};