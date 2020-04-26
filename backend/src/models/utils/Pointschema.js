const mongoose = require('mongoose');

const Pointschema = new mongoose.Schema({

    type:{
        type: String,
        enum: ['Point'],
        required: true,

    },
    coordinates: {
        type: [Number],
        required: true,

    }
});

module.exports = Pointschema;