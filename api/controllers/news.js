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

// G1: GET All News
exports.get_news_state = (req, res, next) => {
    const state = req.params.state

    News.find({
        state: state
    }).select().exec().then( result => {
        console.log(result);
        res.status(200).json({
            state: state,
            result: result
        });
    }).catch( err => {
        console.log(err);
        res.status(404).json({
            error: err
        });
    });
}

// G3: Get Specific News
exports.get_one_news = (req, res, next) => {
    const newsID = req.params.newsID;
    console.log('NewsID: ' + newsID);
    News.findById(newsID)
        .select()
        // .populate('user')
        .exec()
        .then(result => {
            console.log(result);
            res.status(200).json({
                message: result.title,
                result: result
            });
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
        content: req.body.content,
        state: req.body.state
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

// P2: PATCH Existing Article
exports.patch_one_article = (req, res, next) => {
    // Lookup existing club by id
    const id = req.params.newsID;

    const updateOps = {}
    for (const key of Object.keys(req.body)) {
        updateOps[key] = req.body[key]
    }
    
    News.findByIdAndUpdate({
        _id: id,
    }, {
        $set: updateOps
    }, {
        new: true
    }).exec().then(result => {
        console.log(result);
        if (result) {
            res.status(200).json({
                message: 'Editing: ' + result.title,
                update: result
            });
        } else {
            res.status(404).json({
                message: 'Article not found.'
            });
        }
    }).catch(err => {
        res.status(404).json({
            error: err
        });
    });
}