//dentro do controller tem os seguintes metodos 
//index, show, store, update, destroy - digamos que serve para lidar com as requisições
//para criar o usuario deve-se importar o model de usuario
const User = require('../models/User');

//apenas importar o objeto
module.exports = {
    //quando uma função demorar um pouco a ser resolvida, devemos informar que ela é assincrona e utilizar o awit(aguardar)
    async store(req, res) {
        //desestruturação é um recurso que serve para buscar informações de dentro de uma variavel
        const {email} = req.body;

        //verificação se o usuario já existe
        let user = await User.findOne({ email });
        
        if(!user){
            const user = await User.create({ email });
        }        
        return res.json(user);
    }
};