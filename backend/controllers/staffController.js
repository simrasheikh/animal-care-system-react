const {
    listStaff,
} = require("../models/staffModel");
const db = require("../config/db");

async function getStaff(req, res) {
    try {
        const staff = await listStaff();
        console.log(staff)
        res.json({data: staff});
    } catch (err) {
        res.status(500).json({message: "Error fetching staff", error: err});
    }
}

module.exports = {
    getStaff,
};