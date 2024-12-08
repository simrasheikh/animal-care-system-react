const {
    getStaff_m,
    validateStaff_m
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

async function validateStaff_c(req, res) {
    try {
        const success = await validateStaff_m(req.body);
        if (success) {
            // console.log("correct");
            res.json({message: "Staff validated successfully"});
        } else {
            res.status(500).json({message: "Incorrect staff ID or password"});
        }
    } catch (error) {
        res.status(500).json({message: "Error validating staff", error});
    }
}

module.exports = {
    getStaff_c,
    validateStaff_c
};