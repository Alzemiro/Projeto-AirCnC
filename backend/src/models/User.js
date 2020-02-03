const mongoose = require('mongoose');

//começar informando quais campos terão no banco de dados
//estrutura do dado, usuario no caso
const UserSchema = new mongoose.Schema({
    email: String,
});

//exportar o mudulo
module.exports = mongoose.model('User', UserSchema);