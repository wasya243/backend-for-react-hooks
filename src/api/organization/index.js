const {Router} = require('express');
const handlers = require('./handlers');

const routes = Router();

routes.get('/organizations', handlers.getOrganizations);

routes.get('/organizations/:id', handlers.getOrganizationById);

routes.post('/organizations', handlers.createOrganization);

routes.put('/organizations/:id', handlers.updateOrganization);

routes.delete('/organizations/:id', handlers.deleteOrganization);

module.exports = routes;