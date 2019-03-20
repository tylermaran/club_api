const mongoose = require('mongoose');

// make sure to use the mongoose.Schema.whatever when designating the schema
const surveySchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    // Q1
    question: {
        name: {
            type: String,
            required: true,
            unique: true
        },
        questionText: { // Golfing Facilities 
            type: String,
            required: false
        },
        description: {
            type: String,
            required: false
        },
        detail: { // Number of Holes, Coaching, Pro Shop
            type: Object,
            required: false
        }
    },
    // Q1: golf_facilities
    // Q2
    // tennis_facilities: {
    //     questiontext: { // Tennis Facilities
    //         type: String,
    //         required: false
    //     },
    //     descripion: {
    //         type: String,
    //         required: false
    //     },
    //     detail: { // Number of Courts, Coaching, Pro Shop
    //         type: Object,
    //         required: false
    //     }
    // },
    // // Q3
    // golf_only_membership: {
    //     questiontext: { // Golf Only Memberships
    //         type: String,
    //         required: false
    //     },
    //     descripion: {
    //         type: String,
    //         required: false
    //     },
    //     detail: { // Cost reduction (~50%)
    //         type: Object,
    //         required: false
    //     }
    // },
    // // Q4
    // social_only_membership: {
    //     questiontext: { // Social Only Membership
    //         type: String,
    //         required: false
    //     },
    //     descripion: {
    //         type: String,
    //         required: false 
    //     },
    //     detail: {  // Cost Reduction (~50%)
    //         type: Object,
    //         required: false
    //     }
    // },
    // // Q5
    // young_member_discount: {
    //     questiontext: { // Discounted memberships
    //         type: String,
    //         required: false
    //     },
    //     descripion: {
    //         type: String,
    //         required: false 
    //     },
    //     detail: { // Cost reduction (~50%), Age requirement
    //         type: Object,
    //         required: false
    //     }
    // },
    // // Q6
    // family_friendly: {
    //     questiontext: { // Family Friendly
    //         type: String,
    //         required: false
    //     },
    //     descripion: {
    //         type: String,
    //         required: false 
    //     },
    //     detail: { // Kid Facilities (pool, etc.), Youth Teams (Tennis, Golf, etc.)
    //         type: Object,
    //         required: false
    //     }
    // },
    // // Q7
    // reciprocal_memberships: {
    //     questiontext: { // Reciprocal Memberships
    //         type: String,
    //         required: false
    //     },
    //     descripion: {
    //         type: String,
    //         required: false 
    //     },
    //     detail: { // Number of clubs, Link to detail page
    //         type: Object,
    //         required: false
    //     }
    // },
    // // Q8
    // price: {
    //     questiontext: { // How much does it cost!
    //         type: String,
    //         required: false
    //     },
    //     descripion: {
    //         type: String,
    //         required: false 
    //     },
    //     detail: { // Dollar Scale Pricing
    //         type: Object,
    //         required: false
    //     }
    // }
    // Q9 Business Networking

});

// We want to export the schema wrapped in a model that contains our schema
// Model takes two arguments, the name we want to use ('uppercase convention'), and the schema
module.exports = mongoose.model('Survey', surveySchema);