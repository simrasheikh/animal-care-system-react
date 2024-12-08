const { 
    getAllApps_m,
    approveApplication_m,
    submitAdoptionApplication_m, 
    validateOwnerDetails_c
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
    const { username, password, animal_id } = req.body;  // Expect username and animal_id from the form
    
    try {
        // Fetch the owner_id from the database based on the username
        console.log('username:', username);
        console.log('password:', password);
        const owner_id = await validateOwnerDetails_c(username, password);  // Function defined in ownerModel.js
        if (!owner_id) {
            return res.status(404).json({ message: "Incorrect details or user does not exist." });
        }

        // const owner_id = owner.owner_id;
        console.log('owner_id:', owner_id);

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
