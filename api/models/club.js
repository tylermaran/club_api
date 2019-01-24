// club name
// address
// zip code
// city
// state
// brief description
// survey results
// images
// main image
// classification
// Awards
// ClubCorp member
// Reviews
// platinum list

const mongoose = require('mongoose');

// make sure to use the mongoose.Schema.whatever when designating the schema
const clubSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: {
        type: String,
        required: true,
        unique: true
    },
    city: {
        type: String,
        required: true
    }
});

// We want to export the schema wrapped in a model that contains our schema
// Model takes two arguments, the name we want to use ('uppercase convention'), and the schema
module.exports = mongoose.model('Club', clubSchema);