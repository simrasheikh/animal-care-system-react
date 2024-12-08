const { oracle } = require("node-oracledb");
const oracledb = require("oracledb");

async function getAnimalsUser_m() {
    let conn;
    try {
        conn = await oracledb.getConnection();
        const result = await conn.execute('SELECT * FROM available_animals');

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

async function getAnimals_m() {
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

async function getAnimalByID_m(id) {
    let conn;
    try {
        conn = await oracledb.getConnection();
        const result = await conn.execute(`select * from animals where animal_id = :animal_id`, {animal_id: id});

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
        
        // return result.rows;
    } catch (err) {
        throw err;
    } finally {
        if (conn) {
            await conn.close();
        }
    }
}

async function addAnimal_m(animal) {
    let conn;
    try {
        conn = await oracledb.getConnection();
        const result = await conn.execute(
            `insert into animals (animal_name, species, breed, age, gender, weight, description, photo_url) values (:animal_name, :species, :breed, :age, :gender, :weight, :description, :photo_url)`, {
                animal_name: animal.NAME,
                species: animal.SPECIES,
                breed: animal.BREED,
                age: animal.AGE,
                gender: animal.GENDER || null,
                weight: animal.WEIGHT || null,
                description: animal.DESCRIPTION,
                photo_url: animal.PHOTO_URL
            }, {autoCommit: true}
        );

        return result.rowsAffected > 0;
    } catch (err) {
        throw err;
    } finally {
        if (conn) {
            await conn.close();
        }
    }
}

async function editAnimal_m(id, animal) {
    let conn;
    try {
        conn = await oracledb.getConnection();
        const result = await conn.execute(
            `update animals 
            set animal_name = :animal_name, 
            species = :species, 
            breed = :breed,            
            age = :age,
            gender = :gender,
            weight = :weight,            
            description = :description,
            photo_url = :photo_url
            where animal_id = :animal_id`, {
                animal_id: id,
                animal_name: animal.ANIMAL_NAME,
                species: animal.SPECIES,
                breed: animal.BREED,
                age: animal.AGE,
                gender: animal.GENDER,
                weight: animal.WEIGHT,                
                description: animal.DESCRIPTION,
                photo_url: animal.PHOTO_URL,
    }, {autoCommit: true});

        return result.rowsAffected > 0;
    } catch (err) {
        console.log(err);
        throw err;
    } finally {
        if (conn) {
            await conn.close();
        }
    }
}

async function deleteAnimal_m(id) {
    let conn;
    try {
        conn = await oracledb.getConnection();
        const result = await conn.execute(
            `delete from animals where animal_id = :animal_id`, {animal_id: id}, {autoCommit: true}
        );

        return result.rowsAffected > 0;
    } catch (err) {
        throw err;
    } finally {
        if (conn) {
            await conn.close();
        }
    }
}

module.exports = {
    getAnimals_m,
    getAnimalsUser_m,
    getAnimalByID_m,
    addAnimal_m,
    editAnimal_m,
    deleteAnimal_m,
};
