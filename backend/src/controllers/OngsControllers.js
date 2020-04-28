const bcrypt = require('bcrypt')

const Ong = require('../models/Ongs');

module.exports ={
    async index(request, response){

        const  ongs = await Ong.find();
        return response.json(ongs)
        
    },

    
    async store(request, response){
        const {

            name, 
            cnpj, 
            address, 
            cep, 
            city, 
            uf,
            email, 
            whatsapp, 
            latitude,
            longitude,
        
        } = request.body;
        
        const password = await bcrypt.hash(request.body.password, 10)
     
        const ongs = await Ong.findOne({ cnpj });

        if(ongs){
            return response.json(ongs)
        }

                
        const location = {
            type: 'Point',
            coordinates: [longitude, latitude],
            
        };

        ong = await Ong.create ({

            name, 
            cnpj, 
            address,
            password, 
            cep, 
            city, 
            uf,
            email, 
            whatsapp,
            location,
        
        })
        

    return response.json(ong);
    }
}