const { 
    getAllApps_m,
    approveApplication_m,
    submitAdoptionApplication_m, 
    rejectApplication_m,
} = require("../models/adoptionApplicationModel");
const { validateOwnerDetails_m } = require("../models/ownerModel");

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
    // const { app_id } = req.body;  
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

async function rejectApplication_c(req, res) {
    try {
        const rejection = await rejectApplication_m(req.body.ADOPTION_ID);

        if (rejection) {
            res.status(200).json({ message: "Adoption application rejected" });
        } else {
            res.status(500).json({ message: "Error rejecting adoption application" });
        }
    } catch (error) {
        res.status(500).json({ message: "Error processing the adoption application", error });
    }
}

async function submitAdoptionApplication(req, res) {
    const { username, password, animal_id } = req.body; 
    try {
        const owner_id = await validateOwnerDetails_m(username, password);
        if (!owner_id) {
            return res.status(404).json({ message: "Incorrect details or user does not exist." });
        }

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
    rejectApplication_c,
    submitAdoptionApplication,
};
