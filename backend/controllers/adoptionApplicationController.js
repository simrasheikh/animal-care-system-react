const { 
    getAllApps_m,
    approveApplication_m,
    submitAdoptionApplication_m, 
    getOwnerByUsername_m 
} = require("../models/adoptionApplicationModel");

async function getAllApps_c(req, res) {
    try {
        const adoptionApplications = await getAllApps_m();

        if (adoptionApplications) {
            res.status(200).json(adoptionApplications);
        } else {
            res.status(404).json({ message: "No adoption applications found" });
        }

    } catch (error) {
        res.status(500).json({ message: "Error fetching adoption applications", error });
    }
}

async function approveApplication_c(req, res) {
    const { app_id } = req.body;  // Expect app_id from the form
    console.log(req.body);

    try {
        // Approve the adoption application
        const approval = await approveApplication_m(req.body.ADOPTION_ID);

        if (approval) {
            res.status(200).json({ message: "Adoption application approved" });
        } else {
            res.status(500).json({ message: "Error approving adoption application" });
        }

    } catch (error) {
        res.status(500).json({ message: "Error processing the adoption application", error });
    }
}

async function submitAdoptionApplication(req, res) {
    const { username, animal_id } = req.body;  // Expect username and animal_id from the form
    
    try {
        // Fetch the owner_id from the database based on the username
        const owner = await getOwnerByUsername_m(username);  // Function defined in ownerModel.js

        if (!owner) {
            return res.status(404).json({ message: "Owner not found!" });
        }

        const owner_id = owner.owner_id;

        // Submit the adoption application
        const adoptionApplication = await submitAdoptionApplication_m(owner_id, animal_id);

        if (adoptionApplication) {
            res.status(201).json({ message: "Adoption application submitted successfully" });
        } else {
            res.status(500).json({ message: "Error submitting adoption application" });
        }

    } catch (error) {
        res.status(500).json({ message: "Error processing the adoption application", error });
    }
}

module.exports = {
    getAllApps_c,
    approveApplication_c,
    submitAdoptionApplication,
};
