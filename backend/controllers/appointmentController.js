// backend/controllers/appointmentController.js
const { createAppointment } = require('../models/appointmentModel');
const { getOwnerByEmail } = require('../models/ownerModel'); // Assuming you have this function

async function bookAppointment(req, res) {
  const { name, email, phone, vetId, appointmentTime, appointmentDate, notes } = req.body;

  try {
    // Log the incoming data
    console.log('Received appointment data:', req.body);

    // Fetch the owner using the email address (since no session/cookie is implemented)
    const owner = await getOwnerByEmail(email);
    console.log('Fetched owner from email:', owner);

    if (!owner) {
      console.log('Owner not found');
      return res.status(400).json({ message: 'Owner not found. Please register first.' });
    }

    // Create the appointment
    const appointmentId = await createAppointment({
      vetId,
      ownerId: owner.owner_id,
      appointmentDate,
      appointmentTime,
      notes,
    });

    console.log('Appointment successfully booked with ID:', appointmentId);
    return res.status(200).json({ success: true, appointmentId });
  } catch (error) {
    console.error('Error in booking appointment:', error);
    return res.status(500).json({ message: 'Failed to book appointment.' });
  }
}

module.exports = {
  bookAppointment,
};
