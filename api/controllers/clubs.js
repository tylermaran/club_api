const Club = require('../models/club');
const mongoose = require('mongoose');
const upload = require('../middleware/imageconfig');
const singleUpload = upload.single('image')

// G1: GET All
exports.get_all_clubs = (req, res, next) => {
    Club.find().select().exec().then(result => {
        console.log(result);
        res.status(200).json(result);
    }).catch(err => {
        console.log(err);
        res.status(500).json({
            error: err
        });
    });
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
                message: 'Error: Club is a duplication'
            });
        } else {
            // Create new club object from body data
            const club = new Club({
                _id: new mongoose.Types.ObjectId(),
                name: req.body.name,
                city: req.body.city
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

// P3: POST New Image
exports.post_new_image = (req, res, next) => {
    const id = req.params.clubID;
    // I should check if the club id matches here first
    singleUpload(req, res, function (err, some) {
        console.log(some);
        // Catch most errors
        if (err) {
            console.log(err);
            return res.status(422).send({
                errors: [{
                    title: 'Image Upload Error',
                    detail: err.message
                }]
            });
        }
        // Catch file validation errors - sent from middleware/imageconfig.js
        if (req.fileValidationError) {
            return res.status(500).end(
                res.json({
                    message: req.fileValidationError
                })
            );
        }

        // Success Case - Find Club by ID and update image field
        const updateOps = {
            // image characteristics
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


        res.status(200).json({
            'imageUrl': req.file.location
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