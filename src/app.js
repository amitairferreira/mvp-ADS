const express = require('express');
const app = express();

const cors = require('cors');
app.use(cors());

require('dotenv-safe').config();

const db = require('./database/mongoConfig');
db.connect();

app.use(express.json());

const pacienteRoutes = require('./routes/pacienteRoutes');
const psicologoRoutes = require('./routes/psicologoRouter');
const consultaRoutes = require('./routes/consultaRoutes');

app.use("/pacientes", pacienteRoutes);
app.use("/psicologos", psicologoRoutes);
app.use("/consultas", consultaRoutes);

module.exports = app;