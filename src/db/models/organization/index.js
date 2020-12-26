const mongoose = require('mongoose');

const {organizationSchema} = require('./schema');

const Organization = mongoose.model('Organization', organizationSchema, 'organizations');

module.exports = {
    Organization
};