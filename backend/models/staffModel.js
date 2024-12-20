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

async function getStaffByID_m(id) {
    let conn;
    try {
        conn = await oracledb.getConnection();
        const result = await conn.execute(`select * from staff where staff_id = :staff_id`, {staff_id: id});

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

async function addStaff_m(details) {
    let conn;
    try {
        conn = await oracledb.getConnection();
        const result = await conn.execute(`insert into staff (name, phone_number, email, password) values (:name, :phone_number, :email, :password)`, {
            name: details.name,
            phone_number: details.phone_number,
            email: details.email,
            password: details.password
        }, {autoCommit: true}
    );
        return result.rowsAffected === 1;
    } catch (err) {
        throw err;
    } finally {
        if (conn) {
            await conn.close();
        }
    }
}

async function editStaff_m(id, details) {
    let conn;
    try {
        conn = await oracledb.getConnection();
        const result = await conn.execute(
            `update staff set 
            name = :name, 
            phone_number = :phone_number, 
            email = :email, 
            password = :password 
            where staff_id = :staff_id`, {
            name: details.name,
            phone_number: details.phone_number,
            email: details.email,
            password: details.password,
            staff_id: id
        }, {autoCommit: true}
    );
        return result.rowsAffected === 1;
    } catch (err) {
        console.log(err);
        throw err;
    } finally {
        if (conn) {
            await conn.close();
        }
    }
}

async function deleteStaff_m(id) {
    let conn;
    try {
        conn = await oracledb.getConnection();
        const result = await conn.execute(
            `delete from staff where staff_id = :staff_id`, {staff_id: id}, {autoCommit: true}
        );

        return result.rowsAffected === 1;
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
    validateStaff_m, 
    getStaffByID_m, 
    addStaff_m,
    editStaff_m,
    deleteStaff_m
};