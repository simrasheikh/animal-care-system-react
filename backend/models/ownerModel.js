const { auto } = require("async");
const oracledb = require("oracledb");

async function getOwners_m() {
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

async function signup_m(details) {
    let conn;
    try {
        conn = await oracledb.getConnection();
        console.log(details.name);
        console.log(details.email);
        console.log(details.password);
        const result = await conn.execute('INSERT INTO owners (name, email, password) VALUES (:name, :email, :password)', {name: details.name, email: details.email, password: details.password}, autoCommit=true);
        return result;
    } catch (err) {
        throw err;
    } finally {
        if (conn) {
            await conn.close();
        }
    }
}

module.exports = {
    getOwners_m,
    signup_m,
};