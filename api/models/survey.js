const mongoose = require('mongoose');

// make sure to use the mongoose.Schema.whatever when designating the schema
const surveySchema = mongoose.Schema({
    // Q1 - Golf Facilities
    golf_facilities: {
        _id: mongoose.Schema.Types.ObjectId,
        name: {
            type: String,
            required: true,
            default: 'Golf Facilities'
        },
        question_text: { // Golfing Facilities 
            type: String,
            required: true,
            default: 'Does the club provide golf facilities?'
        },
        description: {
            type: String,
            required: true,
            default: 'Find clubs with the best courses. Amenities include driving range, pro shop, instructional staff, tournaments, youth lessons, and more.'
        },
        scale: {
            type: String,
            required: true,
            default: 'range'
        },
        user_question: {
            type: Boolean,
            required: true,
            default: true
        },
        club_question: {
            type: Boolean,
            required: true,
            default: true
        },
        detail: { // Number of Holes, Coaching, Pro Shop
            detail_name: {
                type: String,
                required: true,
                default: null
            },
            detail_question: {
                type: String,
                required: true,
                default: null
            }
        }
    },
    // Q2 - Tennis Facilities
    tennis_facilities: {
        _id: mongoose.Schema.Types.ObjectId,
        name: {
            type: String,
            required: true,
            unique: true,
            default: 'Tennis Facilities'
        },
        question_text: {
            type: String,
            required: true,
            default: 'Does the club provide tennis facilities?'
        },
        description: {
            type: String,
            required: true,
            default: 'Clubs with the best tennis offerings. Look for plenty of courts with no wait time. Lessons and instructional staff. Pro shop. And ways to get kids involved.'
        },
        scale: {
            type: String,
            required: true,
            default: 'range'
        },
        detail: { // Number of Courts, pro shops, kid's leagues
            detail_name: {
                type: String,
                required: true,
                default: null
            },
            detail_question: {
                type: String,
                required: true,
                default: null
            }
        }
    },
    // Q3 - Golf Only Memberships
    golf_only_membership: {
        _id: mongoose.Schema.Types.ObjectId,
        name: {
            type: String,
            required: true,
            unique: true,
            default: 'Golf Only Memberships'
        },
        question_text: {
            type: String,
            required: true,
            default: 'Does the club provide golf only memberships?'
        },
        description: {
            type: String,
            required: true,
            default: 'Just looking to get out and play? Plenty of clubs offer a golf only option at a considerably lower price-tag.'
        },
        scale: {
            type: String,
            required: true,
            default: 'range'
        },
        detail: { // Cost reduction for Golf Only memberships
            detail_name: {
                type: String,
                required: true,
                default: null
            },
            detail_question: {
                type: String,
                required: true,
                default: null
            }
        }
    },
    // Q4 - Social Only Memberships
    social_only_membership: {
        _id: mongoose.Schema.Types.ObjectId,
        name: {
            type: String,
            required: true,
            unique: true,
            default: 'Social Only Memberships'
        },
        question_text: {
            type: String,
            required: true,
            default: 'Does the club provide a Social-Only membership?'
        },
        description: {
            type: String,
            required: true,
            default: 'Just here for the wine and dining? Looking for the perfect place out with friends and family? Find low price memberships that meet all your needs.'
        },
        scale: {
            type: String,
            required: true,
            default: 'range'
        },
        detail: { // Cost reduction for social membership
            detail_name: {
                type: String,
                required: true,
                default: null
            },
            detail_question: {
                type: String,
                required: true,
                default: null
            }
        }
    },
    // Q5 - Young Member Discount
    young_member_discount: {
        _id: mongoose.Schema.Types.ObjectId,
        name: {
            type: String,
            required: true,
            unique: true,
            default: 'Young Member Discount'
        },
        question_text: {
            type: String,
            required: true,
            default: 'Does the club provide young member discounts?'
        },
        description: {
            type: String,
            required: true,
            default: "Often clubs provide discounts to younger members (20 - 35). If you're in this range, take advantage of your options!"
        },
        scale: {
            type: String,
            required: true,
            default: 'range'
        },
        detail: { // Cost reduction for social membership
            detail_name: {
                type: String,
                required: true,
                default: null
            },
            detail_question: {
                type: String,
                required: true,
                default: null
            }
        }
    },
    // Q6 - Price
    total_cost: {
        _id: mongoose.Schema.Types.ObjectId,
        name: {
            type: String,
            required: true,
            unique: true,
            default: 'Total Cost'
        },
        question_text: { // Golfing Facilities 
            type: String,
            required: true,
            default: 'How much does it cost?'
        },
        description: {
            type: String,
            required: true,
            default: "Everyone has a different budget. Clubs have two primary costs: initiation fee and monthly membership fees. Here clubs are ranked from $ to $$$ based on all clubs in your area."
        },
        scale: {
            type: String,
            required: true,
            default: 'range'
        },
        detail: { // Total cost ($$$)
            detail_name: {
                type: String,
                required: true,
                default: 'Total Cost'
            },
            detail_question: {
                type: String,
                required: true,
                default: 'How much??'
            }
        }
    },
    // Q6 - Child Care
    child_care: {
        _id: mongoose.Schema.Types.ObjectId,
        name: {
            type: String,
            required: true,
            unique: true,
            default: 'Child Care'
        },
        question_text: {
            type: String,
            required: true,
            default: 'Does the club provide child care facilities?'
        },
        description: {
            type: String,
            required: true,
            default: "Including on site day care, or areas for children to remain in a supervised manner."
        },
        scale: {
            type: String,
            required: true,
            default: 'range'
        },
        detail: { // Total cost ($$$)
            detail_name: {
                type: String,
                required: true,
                default: 'Total Cost?'
            },
            detail_question: {
                type: String,
                required: true,
                default: null
            }
        }
    },
    // Q7 - Male / Female - User Only
    male_female: {
        _id: mongoose.Schema.Types.ObjectId,
        name: {
            type: String,
            required: true,
            default: 'Male / Female'
        },
        question_text: {
            type: String,
            required: true,
            default: 'Male / Female?'
        },
        description: {
            type: String,
            required: true,
            default: 'Optional'
        },
        scale: {
            type: String,
            required: true,
            default: 'boolean'
        },
        user_question: {
            type: Boolean,
            required: true,
            default: true
        },
        club_question: {
            type: Boolean,
            required: true,
            default: false
        }
    },
    age_range: {
        _id: mongoose.Schema.Types.ObjectId,
        name: {
            type: String,
            required: true,
            default: 'Age Range'
        },
        question_text: {
            type: String,
            required: true,
            default: 'Age Range'
        },
        description: {
            type: String,
            required: true,
            default: 'Select where you land in the age bracket'
        },
        scale: {
            type: String,
            required: true,
            default: 'range'
        },
        user_question: {
            type: Boolean,
            required: true,
            default: true
        },
        club_question: {
            type: Boolean,
            required: true,
            default: false
        }
    }
});

// We want to export the schema wrapped in a model that contains our schema
// Model takes two arguments, the name we want to use ('uppercase convention'), and the schema
module.exports = mongoose.model('Survey', surveySchema);