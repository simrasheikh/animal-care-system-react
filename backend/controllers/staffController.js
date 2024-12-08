const {
    getStaff_m,
    validateStaff_m, 
    getStaffByID_m,
    addStaff_m,
    editStaff_m,
    deleteStaff_m
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

async function getStaffByID_c(req, res) {
    try {
        const id = req.params.id;
        const staff = await getStaffByID_m(id);
        res.json({data: staff});
    } catch (err) {
        res.status(500).json({message: "Error fetching staff data", error: err});
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

async function addStaff_c(req, res) {
    console.log(req.body);
    try {
        const success = await addStaff_m(req.body);
        if (success) {
            res.json({message: "Staff added successfully"});
        } else {
            res.status(500).json({message: "Error adding staff"});
        }
    } catch (error) {
        res.status(500).json({message: "Error adding staff", error});
    }
}

async function editStaff_c(req, res) {
    try {
        const id = req.params.id;
        const success = await editStaff_m(id, req.body);
        if (success) {
            res.json({message: "Staff edited successfully"});
        } else {
            res.status(500).json({message: "Error editing staff"});
        }
    } catch (error) {
        res.status(500).json({message: "Error editing staff", error});
    }
}

async function deleteStaff_c(req, res) {
    try {
        const id = req.params.id;
        const success = await deleteStaff_m(id);
        if (success) {
            res.json({message: "Staff deleted successfully"});
        } else {
            res.status(500).json({message: "Error deleting staff"});
        }
    } catch (error) {
        res.status(500).json({message: "Error deleting staff", error});
    }
}

module.exports = {
    getStaff_c,
    validateStaff_c, 
    getStaffByID_c,
    addStaff_c,
    editStaff_c,
    deleteStaff_c
};