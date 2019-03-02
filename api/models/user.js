// username/password
// email address
// user type
// survey answers
// Linked club
// date created
// keep logged in

const mongoose = require('mongoose');

// make sure to use the mongoose.Schema.whatever when designating the schema
const userSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        match: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    },
    password: {
        type: String,
        required: true
    },
    savedClub: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Club',
        required: false
    },
    surveyResponse: {
        type: Array,
        required: false
    },
    profilePic: {
        type: String,
        required: true,
        default: 'https://via.placeholder.com/100'
    }
});

// We want to export the schema wrapped in a model that contains our schema
// Model takes two arguments, the name we want to use ('uppercase convention'), and the schema
module.exports = mongoose.model('User', userSchema);