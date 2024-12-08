const oracledb = require("oracledb");

async function getStaff_m() {
    let conn;
    try {
        conn = await oracledb.getConnection();
        const result = await conn.execute('select * from staff');

        const rows = result.rows;
        const columns = result.metaData.map(meta => meta.name);

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

async function validateStaff_m(details) {
    let conn;
    try {
        conn = await oracledb.getConnection();
        // console.log(details.email);
        // console.log(details.password);
        const result = await conn.execute(`select count(*) from staff where email = :email and password = :password`, {email: details.email, password: details.password});
        return result.rows[0][0] == 1;
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
    validateStaff_m
};