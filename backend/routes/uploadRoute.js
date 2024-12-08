const express = require('express');
const router = express.Router();
const multer = require('multer');
const uploadController = require('../controllers/uploadController');

const upload = multer(); // In-memory storage

// POST route for uploading images
router.post('/upload', upload.single('image'), uploadController.uploadImage);

module.exports = router;
