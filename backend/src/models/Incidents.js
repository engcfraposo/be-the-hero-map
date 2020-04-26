const mongoose = require('mongoose');


const Incidentschema = new mongoose.Schema({
    
    title: String,
    description: String,
    value: String,
    ong_id: String

});

module.exports = mongoose.model('Incident', Incidentschema)