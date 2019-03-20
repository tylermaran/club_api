const User = require('../models/user');
const mongoose = require('mongoose');


// G1: GET All Users
exports.get_all_users = (req, res, next) => {
    User.find().select().exec().then( result => {
        console.log(result);
        res.status(200).json(result);
    }).catch( err => {
        console.log(err);
        res.status(404).json({
            error: err
        });
    });
}

// G2: Get Specific User
exports.get_one_user = (req, res, next) => {
    const userID = req.params.userID;
    console.log('UserID: ' + userID);
    User.findById(userID)
        .select()
        .populate('savedClub')
        // .populate('user')
        .exec()
        .then(result => {
            console.log(result);
            res.status(200).json(result);
        }).catch(err => {
            console.log(err);
            res.status(404).json({
                error: err
            });
        })
}


// P1: POST New User
exports.post_new_user = (req, res, next) => {
    // Checking for existing user with matching email address
    User.findOne({
        email: req.body.email
    }).exec().then( result => {
        console.log(result);
        if (result) {
            // If there is a result for the email, do not allow new user
            res.status(500).json({
                message: 'Error: Email address already exists'
            });
        } else {
            // Else allow new user creation
            const user = new User({
                _id: new mongoose.Types.ObjectId(),
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                email: req.body.email,
                password: req.body.password
            });
        
            user.save().then( result => {
                console.log(result);
                res.status(200).json({
                    message: 'Successfully added User',
                    result: result
                });
            }).catch( err => {
                console.log(err);
                res.status(500).json({
                    error: err
                });
            });
        }
    }).catch( err => {
        console.log(err);
        res.status(500).json({
            error: err
        });
    });    
}