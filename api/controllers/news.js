const News = require('../models/news');
const mongoose = require('mongoose');


// G1: GET All News
exports.get_all_news = (req, res, next) => {
    News.find().select().exec().then( result => {
        console.log(result);
        res.status(200).json(result);
    }).catch( err => {
        console.log(err);
        res.status(404).json({
            error: err
        });
    });
}

// G2: Get Specific News
exports.get_one_news = (req, res, next) => {
    const newsID = req.params.newsID;
    console.log('NewsID: ' + newsID);
    News.findById(newsID)
        .select()
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


// P1: POST New News Article
exports.post_new_news = (req, res, next) => {

    const news = new News({
        _id: new mongoose.Types.ObjectId(),
        title: req.body.title,
        title_image: req.body.title_image,
        description: req.body.description,
        author: req.body.author,
        content: req.body.content
    });

    news.save().then( result => {
        console.log(result);
        res.status(200).json({
            message: 'Successfully added news',
            result: result
        });
    }).catch( err => {
        console.log(err);
        res.status(500).json({
            error: err
        });
    });
}