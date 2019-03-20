const Image = require('../models/image');
const Club = require('../models/club');
const mongoose = require('mongoose');
const upload = require('../middleware/imageconfig');
const singleUpload = upload.single('image')

// G1: GET All Existing Images
exports.get_existing_image = (req, res, next) => {
    Image.find().select().exec().then(result => {
        console.log(result);
        res.status(200).json(result);
    }).catch(err => {
        console.log(err);
        res.status(500).json({
            error: err
        });
    });
}



// P1: POST New Image
exports.post_new_image = (req, res, next) => {
    const clubID = req.params.clubID;
    console.log('Post New Picture:')
    // I should check if the club id matches here first
    singleUpload(req, res, function (err, some) {
        // Catch most errors
        if (err) {
            console.log(err);
            return res.status(422).send({
                errors: [{
                    title: 'Image Upload Error',
                    detail: err
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

        console.log(req.file);
        // Success Case - Find Club by ID and update image field
        // Create new Image entry in DB
        const image = new Image({
            _id: new mongoose.Types.ObjectId(),
            url: req.file.location,
            fileName: req.file.key,
            description: req.body.description,
            fileSize: req.file.size,
            clubID: clubID,
            mainImage: req.body.mainImage,
            profilePicture: false
        });
        // Save new club to DB
        image.save().then(result => {

            // console.log(updateOps);

            // Successful Image upload - Chain Club Update
            Club.findByIdAndUpdate({
                _id: clubID,
            }, {
                $push: {
                    images: image._id
                }
            }).exec().then(result => {
                console.log(result);
                if (result) {
                    res.status(200).json({
                        message: 'Adding image to: ' + result.name,
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

            // Image upload complete and Club updated - res(200)
            res.status(200).json({
                message: 'New Image Uploaded & Club Updated',
                url: req.file.location,
                result: result
            });

        }).catch(err => {
            res.status(500).json({
                error: err
            })
        });

        // This needs to be chained to the response from the Image Upload
        // It will just take in the ID and push it to the club.
        // const updateOps = {
        //     // image characteristics





        // res.status(200).json({
        //     'imageUrl': req.file.location
        // });



    });
}