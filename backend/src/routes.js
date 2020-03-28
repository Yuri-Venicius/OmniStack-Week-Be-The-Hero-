const express = require('express');
const crypto = require('crypto');


const OngController = require('./controllers/OngController');
const IncidentsController = require('./controllers/IncidentsController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');

const routes = express.Router();

//MÉTODOS HTTP PARA LISTAR E INSERIR DADOS DA TABELA ONGS NO BD RESPECTIVAMENTE
routes.get('/ongs', OngController.index);
routes.post('/ongs', OngController.create);

routes.post('/session', SessionController.create);

//
routes.get('/profile', ProfileController.index);

//MÉTDOS HTTP PARA LISTAR E INSERIR DADOS DA TABELA INCIDETS NO BD RESPECTIVAMENTE
routes.get('/incidents', IncidentsController.index);
routes.post('/incidents', IncidentsController.create);
routes.delete('/incidents/:id', IncidentsController.delete);

module.exports = routes;