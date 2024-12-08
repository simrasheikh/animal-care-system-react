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

async function getOwnerByUsername_m(username) {
    let conn;
    try {
        conn = await oracledb.getConnection();
        const result = await conn.execute(
            `SELECT * FROM owners WHERE username = :username`,
            { username }
        );

        if (result.rows.length > 0) {
            console.log('Owner found:', result.rows[0]);  // Debugging line
            return result.rows[0];  // Return the first matching owner
        } else {
            console.log('Owner not found for username:', username);  // Debugging line
            return null;  // No owner found
        }
    } catch (err) {
        console.error('Error in getOwnerByUsername_m:', err);  // Debugging line
        throw err;
    } finally {
        if (conn) await conn.close();
    }
}


module.exports = {
    getOwners_m,
    signup_m,
    getOwnerByUsername_m,
};