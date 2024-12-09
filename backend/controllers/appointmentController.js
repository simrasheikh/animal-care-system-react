// backend/controllers/appointmentController.js
const { 
	getAppointments_m,
	createAppointment_m 
} = require('../models/appointmentModel');
const { validateOwnerDetails_m } = require('../models/ownerModel'); 

async function getAppointments_c(req, res) {
	try {
		const appointments = await getAppointments_m();
		res.status(200).json(appointments);
	} catch (error) {
		res.status(500).json({ message: "Error fetching appointments", error });
	}
}

async function bookAppointment_c(req, res) {
	const { username, password } = req.body;  
	try {
		const owner_id = await validateOwnerDetails_m(username, password);  
		if (!owner_id) {
			return res.status(404).json({ message: "Incorrect details or user does not exist." });
		}

		const appointment = await createAppointment_m(owner_id, req.body);

		if (appointment) {
			res.status(201).json({ message: "Appointment booked successfully" });
		} else {
			res.status(500).json({ message: "Error booking appointment" });
		}
	} catch (error) {
		res.status(500).json({ message: "Error booking appointment", error });
	}
}

module.exports = {
	getAppointments_c,
	bookAppointment_c,
};
