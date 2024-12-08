// controllers/vetController.js
const { getAllVets_m, getVetById_m } = require('../models/vetModel');

async function getAllVets_c(req, res) {
  try {
    const vets = await getAllVets_m();
    res.json({ vets: vets }); // Send back the vets data including available_times
  } catch (err) {
    console.error('Error fetching vets:', err);
    res.status(500).json({ message: 'Error fetching vets', error: err });
  }
}

async function getVetById_c(req, res) {
  try {
    const vetId = req.params.id;
    const vet = await getVetById_m(vetId);
    res.json({ vet: vet }); // Send the vet data including available_times
  } catch (err) {
    console.error('Error fetching vet by ID:', err);
    res.status(500).json({ message: 'Error fetching vet by ID', error: err });
  }
}

module.exports = {
  getAllVets_c,
  getVetById_c,
};
