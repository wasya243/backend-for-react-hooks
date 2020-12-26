const mongoose = require('mongoose');
const {Types: mongooseTypes} = mongoose.Schema;

const organizationSchema = new mongoose.Schema({
    name: {
        type: mongooseTypes.String,
        required: true
    },
    createdAt: {
        type: mongooseTypes.Date,
        default: Date.now()
    },
    updatedAt: {
        type: mongooseTypes.Date,
        default: Date.now()
    }
});

module.exports = {
    organizationSchema
};