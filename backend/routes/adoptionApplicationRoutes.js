const express = require("express");
const router = express.Router();
const adoptionApplicationController = require("../controllers/adoptionApplicationController");

router.post("/adopt", adoptionApplicationController.submitAdoptionApplication);
router.get("/adoption-applications", adoptionApplicationController.getAllApps_c);
router.put("/adoption-applications/:id/approve", adoptionApplicationController.approveApplication_c);
router.put("/adoption-applications/:id/reject", adoptionApplicationController.rejectApplication_c);

module.exports = router;
