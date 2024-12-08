// const routes
const staffRoutes = require('./routes/staffRoutes');
const animalRoutes = require('./routes/animalRoutes');
const vetRoutes = require('./routes/vetRoutes');
const ownerRoutes = require('./routes/ownerRoutes');
const appointmentRoutes = require('./routes/appointmentRoutes');
const adoptionApplicationRoutes = require('./routes/adoptionApplicationRoutes');

// the rest idk
const db = require('./config/db');
const bodyParser = require('body-parser');
const cors = require('cors');
const express = require('express');

const app = express();

//uploading thing
const uploadRoutes = require('./routes/uploadRoute');
app.use('/api', uploadRoutes);  // Add this line to your express app


//middleware
app.use(cors());
app.use(bodyParser.json());

//routes
app.use("/", staffRoutes);
app.use("/", animalRoutes);
app.use("/", vetRoutes);
app.use("/", ownerRoutes);
app.use("/", appointmentRoutes);
app.use("/", adoptionApplicationRoutes);

app.use("/", (req, res) => {
    res.json({ message: "App is running!" });
});

const dotenv = require('dotenv');
dotenv.config();

const PORT = process.env.PORT || 5000;
db.initialize().then( () => {
    app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
    });
});