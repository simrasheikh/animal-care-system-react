// const routes
const staffRoutes = require('./routes/staffRoutes');

// the rest idk
const db = require('./config/db');
const bodyParser = require('body-parser');
const cors = require('cors');
const express = require('express');

const app = express();

//middleware
app.use(cors());
app.use(bodyParser.json());

//routes
app.use("/", staffRoutes);

// app.use("/", (req, res) => {
//     res.json({ message: "App is running!" });
// });

const dotenv = require('dotenv');
dotenv.config();

const PORT = process.env.PORT || 5000;
db.initialize().then( () => {
    app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
    });
});