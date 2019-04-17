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
        user_description: {
            type: String,
            required: true,
            default: 'Find clubs with the best courses. Amenities include driving range, pro shop, instructional staff, tournaments, youth lessons, and more.'
        },
        club_description: {
            type: String,
            required: true,
            default: 'Provide some detail about your golf facilities. This will help users who are matched by their golf preference.'
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
        answer: {
            answered: {
                type: Boolean,
                required: true,
                default: false
            },
            result: {
                type: String,
                required: true,
                default: null
            }
        },
        detail: { // Number of Holes, Coaching, Pro Shop
            number_holes: {
                question_text: {
                    type: String,
                    required: true,
                    default: 'Number of holes?'
                },
                answer: {
                    type: String,
                    required: true,
                    default: null
                }
            },
            driving_range: {
                question_text: {
                    type: String,
                    required: true,
                    default: 'Does the club have a driving range?'
                },
                answer: {
                    type: String,
                    required: true,
                    default: null
                }
            },
            cart_rental: {
                question_text: {
                    type: String,
                    required: true,
                    default: 'Does the club offer Cart Rental?'
                },
                answer: {
                    type: String,
                    required: true,
                    default: null
                }
            },
            club_rental: {
                question_text: {
                    type: String,
                    required: true,
                    default: 'Does the club offer rental clubs?'
                },
                answer: {
                    type: String,
                    required: true,
                    default: null
                }
            },
            private_course: {
                question_text: {
                    type: String,
                    required: true,
                    default: 'Is this a private or public course?'
                },
                answer: {
                    type: String,
                    required: true,
                    default: null
                }
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
        user_description: {
            type: String,
            required: true,
            default: 'Clubs with the best tennis offerings. Look for plenty of courts with no wait time. Lessons and instructional staff. Pro shop. And ways to get kids involved.'
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
        answer: {
            answered: {
                type: Boolean,
                required: true,
                default: false
            },
            result: {
                type: String,
                required: true,
                default: null
            }
        },
        detail: { // Number of Courts, pro shops, kid's leagues
            number_courts: {
                question_text: {
                    type: String,
                    required: true,
                    default: 'Number of Courts?'
                },
                answer: {
                    type: String,
                    required: true,
                    default: null
                }
            },
            coaching_available: {
                question_text: {
                    type: String,
                    required: true,
                    default: 'Coaching available?'
                },
                answer: {
                    type: String,
                    required: true,
                    default: null
                }
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
        user_description: {
            type: String,
            required: true,
            default: 'Just looking to get out and play? Plenty of clubs offer a golf only option at a considerably lower price-tag.'
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
        answer: {
            answered: {
                type: Boolean,
                required: true,
                default: false
            },
            result: {
                type: String,
                required: true,
                default: null
            }
        },
        detail: { // Cost reduction for Golf Only memberships
            cost_reduction: {
                question_text: {
                    type: String,
                    required: true,
                    default: 'What is the cost reduction of the Golf Only memebership?'
                },
                answer: {
                    type: String,
                    required: true,
                    default: null
                }
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
        user_description: {
            type: String,
            required: true,
            default: 'Just here for the wine and dining? Looking for the perfect place out with friends and family? Find low price memberships that meet all your needs.'
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
        answer: {
            answered: {
                type: Boolean,
                required: true,
                default: false
            },
            result: {
                type: String,
                required: true,
                default: null
            }
        },
        detail: { // Cost reduction for social membership
            cost_reduction: {
                question_text: {
                    type: String,
                    required: true,
                    default: 'What is the cost reduction of the Social Only memebership?'
                },
                answer: {
                    type: String,
                    required: true,
                    default: null
                }
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
        user_description: {
            type: String,
            required: true,
            default: "Often clubs provide discounts to younger members (20 - 35). If you're in this range, take advantage of your options!"
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
        answer: {
            answered: {
                type: Boolean,
                required: true,
                default: false
            },
            result: {
                type: String,
                required: true,
                default: null
            }
        },
        detail: { // Cost reduction for youth membership
            cost_reduction: {
                question_text: {
                    type: String,
                    required: true,
                    default: 'What is the cost reduction for the young member discount?'
                },
                answer: {
                    type: String,
                    required: true,
                    default: null
                }
            },
            age_range: {
                question_text: {
                    type: String,
                    required: true,
                    default: 'What is the age range that can take advantage of this discount?'
                },
                answer: {
                    type: String,
                    required: true,
                    default: null
                }
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
        user_description: {
            type: String,
            required: true,
            default: "Everyone has a different budget. Clubs have two primary costs: initiation fee and monthly membership fees. Here clubs are ranked from $ to $$$ based on all clubs in your area."
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
        answer: {
            answered: {
                type: Boolean,
                required: true,
                default: false
            },
            result: {
                type: String,
                required: true,
                default: null
            }
        },
        detail: { // Total cost ($$$)
            initiation_fee: {
                question_text: {
                    type: String,
                    required: true,
                    default: 'Standard initation fee:'
                },
                answer: {
                    type: String,
                    required: true,
                    default: null
                }
            },
            monthly_fee: {
                question_text: {
                    type: String,
                    required: true,
                    default: 'Standard monthly fee:'
                },
                answer: {
                    type: String,
                    required: true,
                    default: null
                }
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
        user_description: {
            type: String,
            required: true,
            default: "Including on site day care, or areas for children to remain in a supervised manner."
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
        answer: {
            answered: {
                type: Boolean,
                required: true,
                default: false
            },
            result: {
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
        user_description: {
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
        },
        answer: {
            answered: {
                type: Boolean,
                required: true,
                default: false
            },
            result: {
                type: String,
                required: true,
                default: null
            }
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
            default: 'Age range'
        },
        user_description: {
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
        },
        answer: {
            answered: {
                type: Boolean,
                required: true,
                default: false
            },
            result: {
                type: String,
                required: true,
                default: null
            }
        }
    }
});

// We want to export the schema wrapped in a model that contains our schema
// Model takes two arguments, the name we want to use ('uppercase convention'), and the schema
module.exports = mongoose.model('Survey', surveySchema);