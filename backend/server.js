

// const app = express();
// const port = 5001;

// app.use(cors());
// app.use(express.json());

// const dbConfig = {
//   user: 'c##animal_care',        // Oracle DB user
//   password: 'simrasubata',       // Oracle DB password
//   connectString: 'localhost:1521/orcl.bbrouter' // Oracle connection string
// };

// // Helper function to build dynamic SQL query with filters
// const buildQueryWithFilters = (filters) => {
//   let query = 'SELECT * FROM Animals WHERE status = :status';
//   let queryParams = ['Available'];

//   if (filters.species) {
//     query += ' AND species = :species';
//     queryParams.push(filters.species);
//   }
  
//   if (filters.age) {
//     query += ' AND age = :age';
//     queryParams.push(filters.age);
//   }
  
//   if (filters.status) {
//     query += ' AND status = :status';
//     queryParams.push(filters.status);
//   }

//   return { query, queryParams };
// };

// // Get all available animals from the database with dynamic filters
// app.get('/animals', async (req, res) => {
//   let connection;
//   const filters = req.query;  // Get filters from the query parameters
  
//   try {
//     connection = await oracledb.getConnection(dbConfig);
//     const { query, queryParams } = buildQueryWithFilters(filters);

//     const result = await connection.execute(query, queryParams);
//     res.json(result.rows);
//   } catch (err) {
//     console.error(err);
//     res.status(500).send('Error fetching animals');
//   } finally {
//     if (connection) {
//       await connection.close();
//     }
//   }
// });

// // Get all available animals from the database
// app.get('/animals', async (req, res) => {
//   let connection;
//   try {
//     connection = await oracledb.getConnection(dbConfig);
//     const result = await connection.execute('SELECT * FROM Animals WHERE status = :status', ['Available']);
    
//     console.log('Fetched animals:', result.rows);  // Add this to log the result
    
//     // Respond with the fetched animals
//     res.json(result.rows);
//   } catch (err) {
//     console.error('Error fetching animals:', err);  // Log the error in more detail
//     res.status(500).send('Error fetching animals');
//   } finally {
//     if (connection) {
//       await connection.close();
//     }
//   }
// });

// // Post endpoint for adding a new animal (for staff)
// app.post('/animals', async (req, res) => {
//   let connection;
//   const { name, species, age, status, description, image_url } = req.body;

//   try {
//     connection = await oracledb.getConnection(dbConfig);
//     const result = await connection.execute(
//       `INSERT INTO Animals (name, species, age, status, description, image_url) 
//        VALUES (:name, :species, :age, :status, :description, :image_url)`,
//       [name, species, age, status, description, image_url],
//       { autoCommit: true }
//     );
//     res.status(201).send('Animal added successfully');
//   } catch (err) {
//     console.error(err);
//     res.status(500).send('Error adding animal');
//   } finally {
//     if (connection) {
//       await connection.close();
//     }
//   }
// });

// // Listen for requests
// app.listen(port, () => {
//   console.log(`Server running on http://localhost:${port}`);
// });


// const express = require('express');
// const cors = require('cors');
// const oracledb = require('oracledb');

// const app = express();
// const port = 5001;  // Using port 5001 as per your earlier change

// app.use(cors({
//   origin: 'http://localhost:3001',  // Allow requests from frontend on port 3001
//   methods: ['GET', 'POST'],
//   allowedHeaders: ['Content-Type']
// }));

// app.use(express.json());

// // Test route for '/'
// app.get('/', (req, res) => {
//   res.send('Hello, Animal Care Server!');
// });

// const dbConfig = {
//   user: 'c##animal_care',        // Oracle DB user
//   password: 'simrasubata',       // Oracle DB password
//   connectString: 'localhost:1521/orcl.bbrouter' // Oracle connection string
// };

// // Route to fetch all animals (no duplicate endpoint)
// app.get('/animals', async (req, res) => {
//   let connection;
//   try {
//     connection = await oracledb.getConnection(dbConfig);
//     const result = await connection.execute('SELECT * FROM Animals WHERE status = :status', ['Available']);

//     // Return the result rows as JSON
//     res.json(result.rows);
//   } catch (err) {
//     console.error('Error fetching animals:', err);  // Detailed logging
//     res.status(500).send('Error fetching animals');
//   } finally {
//     if (connection) {
//       await connection.close();
//     }
//   }
// });


// // Start the server
// app.listen(port, () => {
//   console.log(`Server running on http://localhost:${port}`);
// });

// const express = require('express');
// const cors = require('cors');
// const oracledb = require('oracledb');  // This can be left in case you want to re-enable DB later

// const app = express();
// const port = 5001;  // Using port 5001 as per your earlier change

// app.use(cors());
// app.use(express.json());

// // Test route for '/'
// app.get('/', (req, res) => {
//   res.send('Hello, Animal Care Server!');
// });

// // Dummy data for animals
// const dummyAnimals = [
//   {
//     id: 1,
//     name: 'Bella',
//     species: 'Dog',
//     age: 'Puppy',
//     status: 'Available',
//     photo: 'https://placeimg.com/400/300/animals/1', // You can use a dummy image URL
//   },
//   {
//     id: 2,
//     name: 'Milo',
//     species: 'Cat',
//     age: 'Adult',
//     status: 'Adopted',
//     photo: 'https://placeimg.com/400/300/animals/2',
//   },
//   {
//     id: 3,
//     name: 'Charlie',
//     species: 'Dog',
//     age: 'Senior',
//     status: 'Available',
//     photo: 'https://placeimg.com/400/300/animals/3',
//   },
//   {
//     id: 4,
//     name: 'Lucy',
//     species: 'Cat',
//     age: 'Puppy',
//     status: 'Available',
//     photo: 'https://placeimg.com/400/300/animals/4',
//   }
// ];

// // Route to fetch all animals (use dummy data instead of DB query)
// app.get('/animals', async (req, res) => {
//   try {
//     // Instead of querying the database, just send dummy data
//     res.json(dummyAnimals);
//   } catch (err) {
//     console.error('Error fetching animals:', err);
//     res.status(500).send('Error fetching animals');
//   }
// });

// // Start the server
// app.listen(port, () => {
//   console.log(`Server running on http://localhost:${port}`);
// });

