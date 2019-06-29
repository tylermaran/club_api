const Featured = require('../models/featured');
const mongoose = require('mongoose');


// G1: GET All Featured Clubs
exports.get_all_featured = (req, res, next) => {
    Featured.find().select()
        .populate('clubID').exec().then( result => {
        console.log(result);
        res.status(200).json(result);
    }).catch( err => {
        console.log(err);
        res.status(404).json({
            error: err
        });
    });
}

// G1: GET Featured by Month
exports.get_featured_month = (req, res, next) => {
    const month = req.params.month

    Featured.find({
        month: month
    }).select().exec().then( result => {
        console.log(result);
        res.status(200).json({
            month: 'Featured clubs of ' + month,
            result: result
        });
    }).catch( err => {
        console.log(err);
        res.status(404).json({
            error: err
        });
    });
}

// P1: POST New Featured Club
exports.post_new_featured = (req, res, next) => {
    const featured = new Featured({
        _id: new mongoose.Types.ObjectId(),
        clubID: req.body.clubID,
    });

    featured.save().then( result => {
        console.log(result);
        res.status(200).json({
            message: 'Successfully added new featured club',
            result: result
        });
    }).catch( err => {
        console.log(err);
        res.status(500).json({
            error: err
        });
    });
}

// PATCH Featured Club


// DELETE Featured Club
exports.delete_one_featured = (req, res, next) => {
    const id = req.params.clubID;
    Featured.findByIdAndDelete(id).exec().then(result => {
        res.status(200).json({
            message: 'Deleted Featured Club'
        });
    }).catch(err => {
        console.log(err);
        res.status(404).json({
            error: err
        });
    });
}