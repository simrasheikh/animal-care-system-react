// backend/routes/appointmentRoutes.js
const express = require('express');
const router = express.Router();
const appointmentController = require('../controllers/appointmentController');

router.get('/appointments', appointmentController.getAppointments_c);
router.post('/appointments', appointmentController.bookAppointment_c);

module.exports = router;
