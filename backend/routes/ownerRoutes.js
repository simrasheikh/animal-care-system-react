const express = require("express");
const router = express.Router();
const ownerController = require("../controllers/ownerController");

router.get("/owners", ownerController.getOwners_c);
router.post("/signup", ownerController.signup_c);

module.exports = router;