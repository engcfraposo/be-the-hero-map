const Incidents = require('../models/Incidents');

module.exports ={
    async index(request, response){

        const ong_id = request.headers.authorization;
        
   

        const incidents = await Incidents.find({ong_id})

        
        return response.json(incidents)
        
    },

    
}