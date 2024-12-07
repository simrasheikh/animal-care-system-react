const oracledb = require("oracledb");

async function getStaff_m() {
    let conn;
    try {
        conn = await oracledb.getConnection();
        const result = await conn.execute('select * from staff');
        return result.rows;
    } catch (err) {
        throw err;
    } finally {
        if (conn) {
            await conn.close();
        }
    }
}

module.exports = {
    getStaff_m,
};