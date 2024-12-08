const oracledb = require("oracledb");

async function getAllApps_m() {
    let conn;
    try {
        conn = await oracledb.getConnection();
        const result = await conn.execute(
            `SELECT * FROM adoption_application_details`
        );

        rows = result.rows;
        columns = result.metaData.map(meta => meta.name);

        jsonResult = rows.map(row => {
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
        if (conn) await conn.close();
    }
}

async function approveApplication_m(app_id) {
    let conn;
    try {
        conn = await oracledb.getConnection();
        const result = await conn.execute(
            `UPDATE adoption_applications SET status = 'Approved' WHERE ADOPTION_ID = :ADOPTION_ID`,
            { ADOPTION_ID: app_id },
            { autoCommit: true }
        );

        if (result.rowsAffected > 0) {
            console.log('Adoption application approved');
            return true;
        } else {
            console.log('Failed to update AdoptionApplications');
            return false;
        }
    } catch (err) {
        console.error('Error in approveApplication_m:', err);  // Debugging line
        throw err;
    } finally {
        if (conn) await conn.close();
    }
}

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
    getAllApps_m,
    approveApplication_m,
    submitAdoptionApplication_m,
    getOwnerByUsername,
};
