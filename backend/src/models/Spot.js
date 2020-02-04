const mongoose = require('mongoose');

//começar informando quais campos terão no banco de dados
//estrutura do dado, usuario no caso
const SpotSchema = new mongoose.Schema({
    thumbnail: String,
    company: String,
    price: Number,
    techs:[String],
    //serve para identificar o usuario que adicionou o spot
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
}, {
    toJSON: {
        virtuals: true,
    }
});

SpotSchema.virtual('thumbnail_url').get(function(){
    return `http://localhost:3333/files/${this.thumbnail}`
})

//exportar o mudulo
module.exports = mongoose.model('Spot',SpotSchema);