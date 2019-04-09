// survey results
// classification
// Awards
// ClubCorp member
// Reviews
// platinum list

const mongoose = require('mongoose');

// make sure to use the mongoose.Schema.whatever when designating the schema
const clubSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: { // Club Name
        type: String,
        required: true,
        timestamps: true
    },
    address: { // Street Address
        type: String,
        required: false,
        default: 'Address'
    },
    city: { // City
        type: String,
        required: false,
        default: 'City'
    },
    state: { // State
        type: String,
        required: true,
        default: 'State'
    },
    zipCode: { // Zip Code
        type: String,
        required: false,
        default: 'ZipCode'
    },
    user: { // Linked user (linked schema)
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: false,
        unique: true
    },
    images: [{ // Image (linked schema)
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Image',
        required: false
    }],
    url: { // Club URL
        type: String,
        required: false,
        default: 'Empty'
    },
    profilePic: { // Profile Picture
        type: String,
        required: true,
        default: 'https://via.placeholder.com/200'
    },
    phone_number: {
        type: Number,
        required: true,
        default: null
    },
    description_mini: { // Mini Description (first 100ish characters of description)
        type: String,
        required: true,
        default: 'An indescribable club experience!'
    },
    description: { // Description
        type: String,
        required: true,
        default: 'An indescribable club experience!'
    },
    membership_director: {
        md_name: {
            type: String,
            required: true,
            default: null
        },
        md_description: {
            type: String,
            required: true,
            default: null
        },
        md_url: {
            type: String,
            required: true,
            default: null
        },
        md_profile_picture: {
            type: String,
            required: true,
            default: 'https://via.placeholder.com/200'
        }
    },
    facilities: { // All club facilities - default populated with null 
        facilities_golf: { // Golf 
            name: {
                type: String,
                required: true,
                default: 'Golf'
            },
            exists: {
                type: Boolean,
                required: true,
                default: false
            },
            golf_form: {
                type: Boolean,
                required: true,
                default: true
            },
            description: {
                type: String,
                required: true,
                default: null
            },
            url_title: {
                type: String,
                required: true,
                default: null
            },
            url: {
                type: String,
                required: true,
                default: null
            },
            private_course: {
                type: Boolean,
                required: true,
                default: null
            },
            number_holes: {
                type: Number,
                required: true,
                default: 9
            },
            par: {
                type: Number,
                required: true,
                default: null
            },
            length: {
                type: Number,
                required: true,
                default: null
            },
            slope: {
                type: Number,
                required: true,
                default: null
            },
            driving_range: {
                type: Boolean,
                required: true,
                default: null
            },
            year_built: {
                type: Number,
                required: true,
                default: null
            },
            golf_season: {
                type: String,
                required: true,
                default: 'Year Round'
            },
            cart_rental: {
                type: Boolean,
                required: true,
                default: null
            },
            club_rental: {
                type: Boolean,
                required: true,
                default: null
            },
            architect: {
                type: String,
                required: true,
                default: null
            }
        },
        facilities_tennis: { // Tennis
            name: {
                type: String,
                required: true,
                default: 'Tennis'   
            },
            exists: {
                type: Boolean,
                required: true,
                default: false
            },
            description: {
                type: String,
                required: true,
                default: null
            },
            url_title: {
                type: String,
                required: true,
                default: null
            },
            url: {
                type: String,
                required: true,
                default: null
            },
        },
        facilities_fitness: { // Fitness
            name: {
                type: String,
                required: true,
                default: 'Fitness'
            },
            exists: {
                type: Boolean,
                required: true,
                default: false
            },
            description: {
                type: String,
                required: true,
                default: null
            },
            url_title: {
                type: String,
                required: true,
                default: null
            },
            url: {
                type: String,
                required: true,
                default: null
            },
        },
        facilities_dining: { // Dining
            name: {
                type: String,
                required: true,
                default: 'Dining'
            },
            description: {
                type: String,
                required: true,
                default: null
            },
            exists: {
                type: Boolean,
                required: true,
                default: false
            },
            url_title: {
                type: String,
                required: true,
                default: null
            },
            url: {
                type: String,
                required: true,
                default: null
            }
        },
        facilities_kids: { // Kids
            name: {
                type: String,
                required: true,
                default: 'Kids Facilities'
            },
            description: {
                type: String,
                required: true,
                default: null
            },
            exists: {
                type: Boolean,
                required: true,
                default: false
            },
            url_title: {
                type: String,
                required: true,
                default: null
            },
            url: {
                type: String,
                required: true,
                default: null
            }
        },
        facilities_reciprocal: { // Reciprocal Memberships
            name: {
                type: String,
                required: true,
                default: 'Reciprocal Memberships'
            },
            description: {
                type: String,
                required: true,
                default: null
            },
            exists: {
                type: Boolean,
                required: true,
                default: false
            },
            url_title: {
                type: String,
                required: true,
                default: null
            },
            url: {
                type: String,
                required: true,
                default: null
            }
        },
        facilities_skiing: { // Skiing (beta)
            name: {
                type: String,
                required: true,
                default: 'Skiing'
            },
            exists: {
                type: Boolean,
                required: true,
                default: false
            },
            description: {
                type: String,
                required: true,
                default: null
            },
            url_title: {
                type: String,
                required: true,
                default: null
            },
            url: {
                type: String,
                required: true,
                default: null
            }
        },
        facilities_sailing: { // Sailing (beta)
            name: {
                type: String,
                required: true,
                default: 'Sailing'
            },
            exists: {
                type: Boolean,
                required: true,
                default: false
            },
            description: {
                type: String,
                required: true,
                default: null
            },
            url_title: {
                type: String,
                required: true,
                default: null
            },
            url: {
                type: String,
                required: true,
                default: null
            }
        },
        facilities_custom: { // Tennis
            name: {
                type: String,
                required: true,
                default: 'Custom Option'   
            },
            exists: {
                type: Boolean,
                required: true,
                default: false
            },
            description: {
                type: String,
                required: true,
                default: null
            },
            url_title: {
                type: String,
                required: true,
                default: null
            },
            url: {
                type: String,
                required: true,
                default: null
            }
        } 
    },
    survey_results: {
        
    }
});

// We want to export the schema wrapped in a model that contains our schema
// Model takes two arguments, the name we want to use ('uppercase convention'), and the schema
module.exports = mongoose.model('Club', clubSchema);