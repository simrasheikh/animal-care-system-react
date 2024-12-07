// config/db.js
const oracledb = require('oracledb');
require('dotenv').config();

let pool;

async function initialize() {
  try {
    pool = await oracledb.createPool({
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      connectString: process.env.DB_CONNECTION_STRING,
    });
    console.log('Connected to OracleDB');
  } catch (err) {
    console.error('Error initializing Oracle DB connection:', err.message);
  }
}

async function query(sql, binds = [], options = {}) {
  let connection;
  try {
    connection = await pool.getConnection();
    const result = await connection.execute(sql, binds, options);
    return result;
  } catch (err) {
    console.error('Error executing query:', err.message);
    throw err;
  } finally {
    if (connection) {
      await connection.close();
    }
  }
}

module.exports = {
  initialize,
  query,
};
