const express = require("express");
const router = express.Router();
const ownerController = require("../controllers/ownerController");

router.get("/owners", ownerController.getOwners);

module.exports = router;