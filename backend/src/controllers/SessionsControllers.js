const Ong = require('../models/Ongs');

module.exports ={
    async create(request, response){

        const { cnpj } = request.body;
        
        const cnpjLogin = cnpj.toString();

        const Ongs = await Ong.find({cnpjLogin})


        return response.json(Ongs)
        
    },
}
