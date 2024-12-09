// backend/models/appointmentModel.js
const oracledb = require('oracledb');
const { get } = require('../routes/appointmentRoutes');

async function getAppointments_m() {
	let conn;
	try {
		conn = await oracledb.getConnection();
		const result = await conn.execute(`SELECT * FROM appointments`);

		const rows = result.rows;
		const columns = result.metaData.map((meta) => meta.name);

		const jsonResult = rows.map((row) => {
			let obj = {};
			row.forEach((value, index) => {
				obj[columns[index]] = value;
			});
			return obj;
		});

		return jsonResult;

	} catch (err) {
		throw err;
	} finally {
		if (conn) {
			await conn.close();
		}
	}
}

async function createAppointment_m(owner_id, details) {
	let conn;
	try {
		conn = await oracledb.getConnection();
		const appointment_date_time = details.appointmentDate + ' ' + details.appointmentTime;
		console.log(appointment_date_time);
		const result = await conn.execute(
			`INSERT INTO appointments (owner_id, vet_id, notes, appointment_date_time)
       VALUES (:owner_id, :vet_id, :notes, to_date(:appointment_date_time, 'YYYY-MM-DD HH24:MI'))`,
			{
				owner_id: owner_id,
				vet_id: details.vetId,
				notes: details.name,
				appointment_date_time: appointment_date_time,
			},
			{ autoCommit: true }
		);

		return result.rowsAffected > 0;
	} catch (err) {
		// console.log(err);
		throw err;
	} finally {
		if (conn) {
			await conn.close();
		}
	}
}

module.exports = {
	getAppointments_m,
	createAppointment_m,
};
