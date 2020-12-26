const {Organization} = require('../../db/models/organization');

async function getOrganizationById(req, res, next) {
    try {
        const {id} = req.params;
        const organization = await Organization.findById(id);
        organization ? res.send(organization) : next();
    } catch (error) {
        next(error);
    }
}

async function createOrganization(req, res, next) {
    try {
        const organizationInfo = req.body;
        const createdOrganization = await new Organization(organizationInfo).save();
        res.send(createdOrganization);
    } catch (error) {
        next(error);
    }
}

async function deleteOrganization(req, res, next) {
    try {
        const {id} = req.params;
        const deletedOrganization = await Organization.findByIdAndRemove(id);
        deletedOrganization ? res.status(204).end() : next();
    } catch (error) {
        next(error);
    }
}

async function updateOrganization(req, res, next) {
    try {
        const {id} = req.params;
        const organizationInfo = req.body;
        const updatedOrganization = await Organization.findByIdAndUpdate(id, organizationInfo, {new: true});
        updatedOrganization ? res.send(updatedOrganization) : next();
    } catch (error) {
        next(error);
    }
}

async function getOrganizations(req, res, next) {
    try {
        const listOfOrganizations = await Organization.find({});
        res.send(listOfOrganizations);
    } catch (error) {
        next(error);
    }
}

module.exports = {
    getOrganizations,
    getOrganizationById,
    createOrganization,
    deleteOrganization,
    updateOrganization
};