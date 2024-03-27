const mongoose = require('mongoose');

const consultaSchema = new mongoose.Schema({
    id: mongoose.Schema.Types.ObjectId,
    paciente: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'paciente'
    },
    psicologo: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'psicologo'
    },
    dataConsulta: {
        type: Date
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('consulta', consultaSchema);