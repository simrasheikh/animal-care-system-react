const {
    getOwners_m,
    signup_m,
    getOwnerByUsername_m,
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

async function signup_c(req, res) {
    // const {name, email, password} = req.body;
    try {
        const {
            owner_name,
            username,
            email,
            password
        } = req.body;
        const result = await signup_m(owner_name, username, email, password);
        res.json({message: "Signup successful", data: result});
    } catch (err) {
        res.status(500).json({message: "Signup failed", error: err});
    }
}

async function getOwnerByUsername_c(req, res) {
    const { username } = req.params;  // Get the username from request params
    try {
        const owner = await getOwnerByUsername_m(username);

        if (owner) {
            res.json({ owner });
        } else {
            res.status(404).json({ message: "Owner not found" });
        }
    } catch (error) {
        res.status(500).json({ message: "Error fetching owner", error });
    }
}

module.exports = {
    getOwners_c,
    signup_c,
    getOwnerByUsername_c,
};