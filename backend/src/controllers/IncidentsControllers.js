const Incidents = require('../models/Incidents');
const Ongs = require('../models/Ongs');

module.exports ={
    
    async index(request, response){

        const  incidents = await Incidents.find();
        return response.json(incidents)
        
    },

    async store(request, response){
        
        const ong = request.headers.authorization;
        const ong_id = ong.toString();
        
        const {
            name, 
            city, 
            uf, 
            whatsapp, 
            email
        } = await Ongs.findOne({_id: ong_id})
        
        
        const {

            title,
            description,
            value,
        
        } = request.body;
        

        const titleincidents = await Incidents.findOne({ title });
        const descriptionincidents = await Incidents.findOne({ description });
        const valuieincidents = await Incidents.findOne({ value });

        if (titleincidents && descriptionincidents && valuieincidents ){
            return response.status(400).json({ error: 'Exists a equal incident.'})
        }

        
       
        incident = await Incidents.create ({

            title,
            description,
            value,
            ong_id,
            name,
            city,
            uf,
            whatsapp,
            email
        
        })
        
    return response.json(incident);
    
    },

    async delete(request, response){

        const { id } = request.params;
        const ong_id = request.headers.authorization;

        const  incident = await Incidents.findById( id );
           
        
        if(ong_id !== incident.ong_id) {
            
            return response.status(401).json({ error: 'Operation not permitted.'})
        }

        await Incidents.findByIdAndRemove(id)

        return response.status(204).json( { sucess:'The item is removed.'});
        
    }
}