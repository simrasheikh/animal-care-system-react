// routes/vetRoutes.js
const express = require('express');
const router = express.Router();
const vetController = require('../controllers/vetController');

// Route to get all vets
router.get('/vets', vetController.getAllVets_c);

// Route to get a specific vet by ID
router.get('/vet/:id', vetController.getVetById_c);

module.exports = router;
