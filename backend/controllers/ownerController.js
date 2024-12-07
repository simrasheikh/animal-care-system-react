const {
    listOwners,
} = require("../models/ownerModel");
const db = require("../config/db");

async function getOwners(req, res) {
    try {
        const owners = await listOwners();
        res.json({data: owners});
    } catch (err) {
        res.status(500).json({message: "Error fetching owners", error: err});
    }
}

module.exports = {
    getOwners,
};