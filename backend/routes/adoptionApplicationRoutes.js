const express = require("express");
const router = express.Router();
const adoptionApplicationController = require("../controllers/adoptionApplicationController");

router.post("/adopt", adoptionApplicationController.submitAdoptionApplication);

module.exports = router;
