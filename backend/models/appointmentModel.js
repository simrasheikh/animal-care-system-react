// backend/models/appointmentModel.js
const db = require('../config/db');

async function createAppointment({ vetId, ownerId, appointmentDate, appointmentTime, notes }) {
  const sql = `
    INSERT INTO Appointments (Vet_ID, Owner_ID, Appointment_Date, Appointment_Time, Notes)
    VALUES (:vetId, :ownerId, TO_DATE(:appointmentDate, 'YYYY-MM-DD'), :appointmentTime, :notes)
    RETURNING Appointment_ID INTO :appointmentId
  `;
  const binds = {
    vetId,
    ownerId,
    appointmentDate,
    appointmentTime,
    notes,
    appointmentId: { dir: db.oracledb.BIND_OUT, type: db.oracledb.NUMBER },
  };

  try {
    const result = await db.query(sql, binds);
    return result.outBinds.appointmentId[0];
  } catch (error) {
    console.error('Error creating appointment:', error);
    throw error; // Rethrow to be caught by the controller
  }
}

module.exports = {
  createAppointment,
};
