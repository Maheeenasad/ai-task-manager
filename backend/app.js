const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const taskRoutes = require('./routes/taskRoutes');

dotenv.config();

const app = express();

app.use(cors());  // Ensure CORS is enabled
app.use(express.json());

app.use('/api/tasks', taskRoutes);

module.exports = app;
