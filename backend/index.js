const express = require('express')
const cors = require('cors')
require('dotenv').config();
const authRoutes = require('./routes/auth.route');
const { DBconnect } = require('./utils/db');

DBconnect()

const app = express();
app.use(express.json());
app.use(cors());

app.use('/auth', authRoutes)

const port = process.env.PORT | 5000
app.listen(port, console.log("Server running on port ", port))