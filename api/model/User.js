const mongoose = require('mongoose');

let Schema = mongoose.Schema;

//Define user collection schema

let UserSchema = new Schema({
    first_name: {
        type: String,
        required: true,
        max: 100
    },
    last_name: {
        type: String,
        required: true,
        max: 100
    },
    email: {
        type: String,
        required: true,
        min: 30,
        max: 80
    },
    password: {
        type: String,
        required: true,
        min: 6,
        max: 1024
    },
    created_at: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('User', UserSchema);