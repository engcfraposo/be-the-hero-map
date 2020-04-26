const express = require('express');

const OngsControllers = require ('./controllers/OngsControllers')
const IncidentsControllers = require ('./controllers/IncidentsControllers')
const ProfilesControllers = require ('./controllers/ProfilesControllers')
const SessionsControllers = require ('./controllers/SessionsControllers')

const routes = express.Router();

routes.get('/incidents', IncidentsControllers.index);
routes.post('/incidents', IncidentsControllers.store);
routes.delete('/incidents/:id', IncidentsControllers.delete);


routes.get('/ongs', OngsControllers.index);
routes.post('/ongs', OngsControllers.store);


routes.get('/profile', ProfilesControllers.index);

routes.post('/sessions', SessionsControllers.create);

module.exports = routes;