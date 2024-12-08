const express = require("express");
const router = express.Router();
const staffController = require("../controllers/staffController");

router.get("/staff", staffController.getStaff_c);
router.post("/admin/login", staffController.validateStaff_c);

module.exports = router;