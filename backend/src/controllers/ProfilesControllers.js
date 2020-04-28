const Incidents = require('../models/Incidents');

module.exports ={
    async index(request, response){

        const ong_id = request.headers.authorization;
        
        console.log(ong_id)

        const incidents = await Incidents.find({ong_id})

        console.log(incidents)
        return response.json(incidents)
        
    },

    
}