const mongoose = require('mongoose');

// make sure to use the mongoose.Schema.whatever when designating the schema
const newsSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    title: {
        type: String,
        trim: true
    },
    title_image: {
        type: String,
        default: 'https://via.placeholder.com/100'
    },
    description: {
        type: String
    },
    date: {
        type: Date,
        default: Date.now
    },
    author: {
        type: String,
        default: 'Anonymous'
    },
    content: {
        type: String
    }
});

// We want to export the schema wrapped in a model that contains our schema
// Model takes two arguments, the name we want to use ('uppercase convention'), and the schema
module.exports = mongoose.model('News', newsSchema);