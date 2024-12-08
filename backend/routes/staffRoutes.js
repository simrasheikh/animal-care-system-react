const express = require("express");
const router = express.Router();
const staffController = require("../controllers/staffController");

router.get("/staff", staffController.getStaff_c);
router.post("/admin/login", staffController.validateStaff_c);
router.get("/staff/:id", staffController.getStaffByID_c);
router.post("/staff", staffController.addStaff_c);
router.put("/staff/:id", staffController.editStaff_c);
router.delete("/staff/:id", staffController.deleteStaff_c);

module.exports = router;