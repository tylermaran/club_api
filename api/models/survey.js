const mongoose = require('mongoose');

// make sure to use the mongoose.Schema.whatever when designating the schema
const surveySchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    question: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    detail: {
        type: String,
        required: true
    }
});

// We want to export the schema wrapped in a model that contains our schema
// Model takes two arguments, the name we want to use ('uppercase convention'), and the schema
module.exports = mongoose.model('Survey', surveySchema);