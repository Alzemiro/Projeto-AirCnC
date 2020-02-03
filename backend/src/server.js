const express = require('express');
//importar as rotas
const routes = require('./routes');
//biblioteca mongoDB - facilita a conexão
const mongoose = require('mongoose');

const app = express();

//conexão com o mongo, parametros são para utilizar o novo formato de url

mongoose.connect('mongodb+srv://iago:iago@omnistack-leyfv.mongodb.net/semana09?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

app.use(express.json());
app.use(routes);

app.listen(3333);

