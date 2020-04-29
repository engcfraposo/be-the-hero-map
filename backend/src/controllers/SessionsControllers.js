const bcrypt = require('bcrypt')
const Ong = require('../models/Ongs');


module.exports ={
    

    async create(request, response){

        const { email, password } = request.body;

        const ongEmail  =  await Ong.findOne({email})

        if (!ongEmail){

            return response.status(400).json({ error: 'No ONG found with this ID'})

        }
        
        const ongPassword = await bcrypt.compare(password, ongEmail.password)
        
        if(ongPassword == false){

            return response.status(400).json({ error: 'Wrong password'})

        }
        
        return response.json(ongEmail);
    }
}
