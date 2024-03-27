const mongoose = require('mongoose');

const pacienteSchema = new mongoose.Schema({
    id: mongoose.Schema.Types.ObjectId,
    nome: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    genero: {
        type: String,
        required: false
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('paciente', pacienteSchema);