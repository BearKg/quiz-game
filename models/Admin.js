const mongoose = require('mongoose')

const adminSchema = mongoose.Schema({
    users: {
        type: String,
        required: [true, 'must provide account name'],
        unique: true,
    },
    password: {
        type: String,
        required: [true, 'must provide password'],
        unique: true,
    }
})

module.exports = mongoose.model('admin', adminSchema)