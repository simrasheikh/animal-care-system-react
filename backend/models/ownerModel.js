const oracledb = require("oracledb");

async function listOwners() {
    let conn;
    try {
        conn = await oracledb.getConnection();
        const result = await conn.execute('SELECT * FROM owners');

        const rows = result.rows;
        const columns = result.metaData.map(meta => meta.name);

        const jsonResult = rows.map(rows => {
            let obj = {};
            rows.forEach((values, index) => {
                obj[columns[index]] = values;
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
    listOwners,
};