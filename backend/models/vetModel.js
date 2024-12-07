const oracledb = require('oracledb');

async function getVets_m() {
    let conn;
    try {
        conn = await oracledb.getConnection();
        const result = await conn.execute('SELECT * FROM vets');

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

        return jsonResult;

    } catch (err) {
        throw err;
    } finally {
        if (conn) {
            await conn.close();
        }
    }
}

module.exports = {
    getVets_m,
};