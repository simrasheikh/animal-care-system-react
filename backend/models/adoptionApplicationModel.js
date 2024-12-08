const oracledb = require("oracledb");

async function getOwnerByUsername(username) {
    let conn;
    try {
        conn = await oracledb.getConnection();
        const result = await conn.execute(
            `SELECT * FROM owners WHERE username = :username`,
            { username: username }
        );
        return result.rows.length > 0 ? result.rows[0] : null;
    } catch (err) {
        throw err;
    } finally {
        if (conn) await conn.close();
    }
}

async function submitAdoptionApplication_m(owner_id, animal_id) {
    let conn;
    try {
        conn = await oracledb.getConnection();
        const result = await conn.execute(
            `INSERT INTO adoptionapplications (animal_id, owner_id, status) 
             VALUES (:animal_id, :owner_id, 'Pending')`, 
            { animal_id, owner_id },
            { autoCommit: true }
        );

        if (result.rowsAffected > 0) {
            console.log('Adoption application submitted');
            return true;
        } else {
            console.log('Failed to insert into AdoptionApplications');
            return false;
        }
    } catch (err) {
        console.error('Error in submitAdoptionApplication_m:', err);  // Debugging line
        throw err;
    } finally {
        if (conn) await conn.close();
    }
}


module.exports = {
    submitAdoptionApplication_m,
    getOwnerByUsername,
};
