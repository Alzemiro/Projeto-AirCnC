const express = require('express');
//importar as rotas
const routes = require('./routes');
//biblioteca mongoDB - facilita a conexão
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');

const app = express();

//conexão com o mongo, parametros são para utilizar o novo formato de url

mongoose.connect('mongodb+srv://iago:iago@omnistack-leyfv.mongodb.net/semana09?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

app.use(cors());
app.use(express.json());
app.use('/files', express.static(path.resolve(__dirname,'..','uploads')));
app.use(routes);

app.listen(3333);

