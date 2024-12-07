const express = require("express");
const router = express.Router();
const staffController = require("../controllers/staffController");

router.get("/staff", staffController.getStaff_c);

module.exports = router;