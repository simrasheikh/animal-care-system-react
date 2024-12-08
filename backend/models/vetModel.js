// models/vetModel.js
const db = require('../config/db');

async function getAllVets_m() {
  const result = await db.query('SELECT * FROM Vets');

  // Map over the result rows and create a proper object
  return result.rows.map(vet => ({
    VET_ID: vet[0],  // VET_ID is the first column in the result
    NAME: vet[1],  // NAME is the second column
    SPECIALIZATION: vet[2],  // SPECIALIZATION is the third column
    PHONE_NUMBER: vet[3],  // PHONE_NUMBER is the fourth column
    EMAIL: vet[4],  // EMAIL is the fifth column
    AVAILABLE_TIMES: vet[5].split(', ')  // AVAILABLE_TIMES is stored as a string, so split it into an array
  }));
}

async function getVetById_m(id) {
  const result = await db.query('SELECT * FROM Vets WHERE VET_ID = :id', [id]);

  if (result.rows.length === 0) {
    return null;
  }

  const vet = result.rows[0];
  return {
    VET_ID: vet[0],  // VET_ID is the first column in the result
    NAME: vet[1],  // NAME is the second column
    SPECIALIZATION: vet[2],  // SPECIALIZATION is the third column
    PHONE_NUMBER: vet[3],  // PHONE_NUMBER is the fourth column
    EMAIL: vet[4],  // EMAIL is the fifth column
    AVAILABLE_TIMES: vet[5].split(', ')  // Split the available times string into an array
  };
}

module.exports = {
  getAllVets_m,
  getVetById_m,
};
