const mongoose = require('mongoose');

// make sure to use the mongoose.Schema.whatever when designating the schema
const featuredSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    title: {
        type: String,
        trim: true
    },
    clubID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Club'
    }
});

// We want to export the schema wrapped in a model that contains our schema
// Model takes two arguments, the name we want to use ('uppercase convention'), and the schema
module.exports = mongoose.model('Featured', featuredSchema);