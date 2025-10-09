require('dotenv').config();
const express = require('express');
const cors = require("cors");
const weatherRouter = require('./routes/weather');


const app = express();
const PORT = process.env.PORT || 4000;


app.use(cors());
app.use(express.json());

// Routes
app.get('/health', (req, res) => res.json({ ok: true }));
app.use('/api/weather', weatherRouter);

// Start server
app.listen(PORT, () => console.log(`Server running on PORT ${PORT}...`));
