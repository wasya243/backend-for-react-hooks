const {Router} = require('express');

const userRoutes = require('./user');
const organizationRoutes = require('./organization');

const appRoutes = Router();

appRoutes
    .use(organizationRoutes)
    .use(userRoutes)

module.exports = appRoutes;