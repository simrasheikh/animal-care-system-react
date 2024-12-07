const {
    getStaff_m,
} = require("../models/staffModel");
const db = require("../config/db");

async function getStaff_c(req, res) {
    try {
        const staff = await getStaff_m();
        res.json({data: staff});
    } catch (err) {
        res.status(500).json({message: "Error fetching staff", error: err});
    }
}

module.exports = {
    getStaff_c,
};