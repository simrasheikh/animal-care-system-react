const oracledb = require('oracledb');

async function getAllVets_m() {
  let conn;
  try {
    conn = await oracledb.getConnection();
    const result = await conn.execute('SELECT * FROM Vets');

    // Transform the data into JSON format
    const rows = result.rows;
    const columns = result.metaData.map(meta => meta.name);

    // Map rows to JSON objects
    const jsonResult = rows.map(row => {
      let obj = {};
      row.forEach((value, index) => {
        obj[columns[index]] = value;
      });
      return obj;
    });
    console.log(jsonResult);
    return jsonResult;
  } catch (err) {
    throw err;
  } finally {
    if (conn) {
      await conn.close();
    }
  }
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
