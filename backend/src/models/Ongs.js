const mongoose = require('mongoose');

const Pointschema = require('./utils/Pointschema');

const Ongschema = new mongoose.Schema({

    name: {
        type: String,
        required: true,
    },
    cnpj: {
        type: String,
        required: true,
    },
    address: String,
    cep: {
        type: Number,
        required: true,
    },
    city: String,
    uf: String,
    email: {
        type: String,
        required: true,
    },
    whatsapp: {
        type: String,
        required: true,
    },
    location: {
        type: Pointschema,
        index: '2dsphere'
    }

});

module.exports = mongoose.model('Ong', Ongschema)