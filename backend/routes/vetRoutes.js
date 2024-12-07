const express = require("express");
const router = express.Router();
const vetController = require("../controllers/vetController");

router.get("/vets", vetController.getVets_c);

module.exports = router;