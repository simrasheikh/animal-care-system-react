const { submitAdoptionApplication_m, getOwnerByUsername_m } = require("../models/adoptionApplicationModel");

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
    submitAdoptionApplication,
};
