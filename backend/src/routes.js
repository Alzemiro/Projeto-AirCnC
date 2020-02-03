//req.query = Acessar query params (para filtros)
//req.params = Acessar o route params (para edição, delete)
//req.body = Acessar o corpo da requisição (para criação, edição)
const express = require('express');
const multer = require('multer');
const uploadConfig = require('./config/upload');
//importar o controller
const SessionController = require('./controllers/SessionController');
const SpotController = require('./controllers/SpotController');
const DashboardController = require('./controllers/DashboardController');
const BookingController = require('./controllers/BookingController')
//Criando o roteador e armazenando dentro da variavel routes
const routes = express.Router();
const upload = multer(uploadConfig);

//definição das rotas, juntamente importando o metodo do constroller
routes.post('/sessions', SessionController.store);
routes.get('/spots', SpotController.index);
routes.post('/spots', upload.single('thumbnail'),SpotController.store);
routes.get('/dashboard', DashboardController.show);
routes.post('/spots/:spot_id/bookings', BookingController.store);
//precisamos exportar as rotas para que a aplicação a conheça
module.exports = routes;
