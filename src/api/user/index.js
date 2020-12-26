const {Router} = require('express');
const handlers = require('./handlers');

const routes = Router();

routes.get('/users', handlers.getUsers);

routes.get('/users/:id', handlers.getUserById);

routes.post('/users', handlers.createUser);

routes.put('/users/:id', handlers.updateUser);

routes.delete('/users/:id', handlers.deleteUser);

module.exports = routes;