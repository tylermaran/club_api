const mongoose = require('mongoose');

// make sure to use the mongoose.Schema.whatever when designating the schema
const imageSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    description: {
        type: String,
        required: true
    },
    fileSize: {
        type: String,
        required: false
    },
    clubId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Club',
        required: false,
        unique: true
    },
    mainImage: {
        type: Boolean,
        required: true,
        default: false
    },
    profilePicture: {
        type: Boolean,
        required: true,
        default: false
    },
    date: {
        type: Date,
        required: true,
        default: Date().toISOString().replace(/:/g, '-').substring(0, 10)
    }
});

// We want to export the schema wrapped in a model that contains our schema
// Model takes two arguments, the name we want to use ('uppercase convention'), and the schema
module.exports = mongoose.model('Image', imageSchema);