const Club = require('../models/club');
const mongoose = require('mongoose');
const upload = require('../middleware/imageconfig');
const singleUpload = upload.single('image')

// G1: GET All
exports.get_all_clubs = (req, res, next) => {
    Club.find()
        .select()
        .exec()
        .then(result => {
            console.log(result);
            res.status(200).json(result);
        }).catch(err => {
            console.log(err);
            res.status(500).json({
                error: err
            });
        });
}

// G2: Get Specific Club
exports.get_one_club = (req, res, next) => {
    const clubID = req.params.clubID;
    console.log('ClubID: ' + clubID);
    Club.findById(clubID)
        .select()
        .populate('images')
        .populate('user')
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

// P1: POST New Club
exports.post_new_club = (req, res, next) => {
    // Preventing Duplicate Clubs - search by name
    Club.findOne({
        name: req.body.name
    }).exec().then(result => {
        if (result) {
            console.log('Error Duplication: ' + req.body.name);
            res.status(500).json({
                error: 'Error: Club is a duplication'
            });
        } else {
            // Create new club object from body data
            const club = new Club({
                _id: new mongoose.Types.ObjectId(),
                name: req.body.name,
                address: req.body.address,
                city: req.body.city,
                zipCode: req.body.zipCode,
                user: req.body.user,
                images: req.body.images
            });

            // Save new club to DB
            club.save().then(result => {
                console.log(result);
                res.status(200).json({
                    message: 'New Club Created',
                    result: result
                })
            }).catch(err => {
                res.status(500).json({
                    error: err
                })
            });
        }
    });
}

// P2: PATCH Existing Club
exports.patch_existing_club = (req, res, next) => {
    // Lookup existing club by id
    const id = req.params.clubID;

    const updateOps = {}
    for (const key of Object.keys(req.body)) {
        updateOps[key] = req.body[key]
    }

    Club.findByIdAndUpdate({
        _id: id,
    }, {
        $set: updateOps
    }, {
        new: true
    }).exec().then(result => {
        console.log(result);
        if (result) {
            res.status(200).json({
                message: 'Editing: ' + result.name,
                update: result
            });
        } else {
            res.status(404).json({
                message: 'Club not found.'
            });
        }
    }).catch(err => {
        res.status(404).json({
            error: err
        });
    });
}

// D1: Delete Club
exports.delete_existing_club = (req, res, next) => {
    const id = req.params.clubID;
    Club.findByIdAndDelete(id).exec().then(result => {
        console.log(result);
        res.status(200).json({
            message: 'Club Successfully Deleted'
        });
    }).catch(err => {
        console.log(err);
        res.status(404).json({
            error: err
        });
    });
}