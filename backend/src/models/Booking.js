const mongoose = require('mongoose');

//começar informando quais campos terão no banco de dados
//estrutura do dado, usuario no caso
const BookingSchema = new mongoose.Schema({
    date: String,
    approved: Boolean,    
    //serve para identificar o usuario que adicionou o Booking
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    spot: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Spot'
    }
});

//exportar o mudulo
module.exports = mongoose.model('Booking',BookingSchema);