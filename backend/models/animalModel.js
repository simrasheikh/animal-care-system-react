const oracledb = require("oracledb");

async function listAnimals() {
    let conn;
    try {
        conn = await oracledb.getConnection();
        const result = await conn.execute('SELECT * FROM animals');

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
    listAnimals,
};


// async function listAnimals() {
//     let conn;
//     try {
//         conn = await oracledb.getConnection();
//         const result = await conn.execute('select * from animals');
//         return result.rows;
//     } catch (err) {
//         throw err;
//     } finally {
//         if (conn) {
//             await conn.close();
//         }
//     }
// }

// module.exports = {
//     listAnimals,
// };