const Club = require('../models/club');
const Survey = require('../models/survey');
const mongoose = require('mongoose');
const upload = require('../middleware/imageconfig');
const singleUpload = upload.single('image');
const fetch = require('node-fetch');

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
        });
}

// G3: GET Club and Survey Data - Survey Answer Page
exports.get_club_survey = (req, res, next) => {
    const clubID = req.params.clubID;
    console.log('ClubID: ' + clubID);
    Club.findById(clubID)
        .select()
        .exec()
        .then(result => {
            let response = [];
            // Result is club data
            response.push(result);

            // Chaining Survey Lookup and appending object to one array
            Survey.find().select().exec().then(survey => {
                
                // survey is survey data
                response.push(survey);
                console.log(response);
                res.status(200).json(response);
            }).catch(err => {
                console.log(err);
                res.status(500).json({
                    error: err
                });
            });
        }).catch(err => {
            console.log(err);
            res.status(404).json({
                error: err
            });
        });
}

// G4: 
exports.get_geo_location = (req, res, next) => {
    console.log('Hits geolocation');
    Club.find(
        {
        "loc": {
            $near: {
            $geometry: {
                type: "Point" ,
                coordinates: [ 33.837 , -84.385 ],
                $maxDistance: 500
                }
            }
        }
    }).exec().then(result => {
        console.log(result);
        res.json({
            data: result
        })
    })
}

// P1: POST New Club
exports.post_new_club = (req, res, next) => {
    // Preventing Duplicate Clubs - search by name
    Club.findOne({
        name: req.body.name
    }).exec().then(result => {
        if (result && result.name === req.body.name && result.state === req.body.state) {
            console.log('Error Duplication: ' + req.body.name);
            console.log('Already club named: ' + result.name + ' in ' + result.state);
            res.status(500).json({
                error: 'Error: Club is a duplication',
                detail: 'Already club named: ' + result.name + ' in ' + result.state
            });
        } else {

            let trimmed_address = req.body.address.trim();
            console.log(trimmed_address);
            // Get Lat/Long from address
            fetch('https://maps.googleapis.com/maps/api/geocode/json?address=' + trimmed_address + '&key=' + process.env.GEOCODE, {
                method: 'GET',
                cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
                credentials: 'same-origin', // include, *same-origin, omit
                redirect: 'follow', // manual, *follow, error
                referrer: 'no-referrer', // no-referrer, *client
            }).then((res) => {
                let results = res.json();
                return results
            }).then((data) => {
                console.log('Geo Results');
                console.log(data.results);
                let formatted_address = data.results[0].formatted_address;
                console.log('Latitude');
                console.log(data.results[0].geometry.location.lat);
                let loc = {
                    type: 'Point',
                    coordinates: [
                        data.results[0].geometry.location.lng,
                        data.results[0].geometry.location.lat
                    ]
                }

                // Create new club object from body data
                const club = new Club({
                    _id: new mongoose.Types.ObjectId(),
                    name: req.body.name,
                    address: req.body.address,
                    city: req.body.city,
                    state: req.body.state,
                    zipCode: req.body.zipCode,
                    formatted_address: formatted_address,
                    loc: loc,
                    user: req.body.user,
                    images: req.body.images,
                    url: req.body.url
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


            }).catch(err=> {
                console.log(err);
                res.status(400).json({
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

// P3: Search for Existing Club
exports.search_existing_club = (req, res, next) => {
    console.log('searching for ' + req.body.name);
    // concats name with /i to search for names similar to X
    let query = new RegExp(req.body.name,'i');

    Club.find({ name: query }).exec().then(result => {
        if (result) {
            
            res.status(200).json({
                data: result
            });
        } else {
            console.log('No club found');
            res.status(400).json({
                error: 'No club found'
            });
        }
    });
}

// P4: Take in Lat / Long and Distance to locate nearest clubs 
exports.get_geo_location = (req, res, next) => {
    console.log('Hits geolocation');
    console.log('user_lat: ' + req.body.user_lat);
    console.log('user_long: ' + req.body.user_long);
    console.log('max distance: ' + req.body.max_distance);


    Club.find(
        {
        "loc": {
            $near: {
            $geometry: {
                type: "Point" ,
                coordinates: [ req.body.user_long, req.body.user_lat ]
            },
            $maxDistance: req.body.max_distance
            }
        }
        // Set limit to 20 - normal response is capped at 100
    }).limit(10).exec().then(result => {
        console.log(result);
        res.json({
            data: result
        })
    }).catch(err => {
        console.log('No club found');
        res.status(404).json({
            err: err
        })
    })
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