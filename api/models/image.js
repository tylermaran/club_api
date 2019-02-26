const mongoose = require('mongoose');

// make sure to use the mongoose.Schema.whatever when designating the schema
// Takes in imageURL from AWS S3 Upload
const imageSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    url: {
        type: String,
        required: true,
        timestamps: true
    },
    fileName: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: false
    },
    fileSize: {
        type: String,
        required: true
    },
    clubID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Club',
        required: true,
        unique: false
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
    }
});

// We want to export the schema wrapped in a model that contains our schema
// Model takes two arguments, the name we want to use ('uppercase convention'), and the schema
module.exports = mongoose.model('Image', imageSchema);