const mongoose = require('mongoose');

const psicologoSchema = new mongoose.Schema({
    id: mongoose.Schema.Types.ObjectId,
    nome: {
        type: String,
        required: true
    },
    registro: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: false
    },
    espec: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('psicologo', psicologoSchema);