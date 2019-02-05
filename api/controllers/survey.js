const Survey = require('../models/survey');
const mongoose = require('mongoose');


// G1: GET All Questions
exports.get_all_questions = (req, res, next) => {
    Survey.find().select().exec().then(result => {
        console.log(result);
        res.status(200).json(result);
    }).catch(err => {
        console.log(err);
        res.status(500).json({
            error: err
        });
    });
}


// P1: POST New Survey Item
exports.post_new_question = (req, res, next) => {
    Survey.find().exec().then( result => {
        console.log(result);
    }).catch( err => {
        res.status(404).json({
            error: err
        });
    });
    
    const question = new Survey({
        _id: new mongoose.Types.ObjectId,
        question: req.body.question,
        description: req.body.description,
        detail: req.body.detail,
        position: req.body.position
    });

    question.save().then( result => {
      console.log(result);
      res.status(200).json({
          message: 'Question added successfully',
          result: result
      })  
    }).catch( err => {
        console.log(err);
        res.status(500).json({
            error: err
        })
    });
}


// P2: PATCH Existing Survey Item
exports.patch_existing_question = (req, res, next) => {
    // Lookup existing question by id
    const id = req.params.questionID;

    const updateOps = {}
    for (const key of Object.keys(req.body)) {
        updateOps[key] = req.body[key]
    }

    Survey.findByIdAndUpdate({
        _id: id,
    }, {
        $set: updateOps
    },
    {
        new: true
    }).exec().then(result => {
        console.log(result);
        if (result) {
            res.status(200).json({
                message: 'Edited question',
                update: result
            });
        } else {
            res.status(404).json({
                message: 'Question not found.'
            });
        }
    }).catch(err => {
        res.status(404).json({
            error: err
        });
    });
}


// D1: DELETE Existing Survey Item
exports.delete_existing_question = (req, res, next) => {
    const id = req.params.questionID;
    Survey.findByIdAndDelete(id).exec().then( result => {
        console.log(result);
        res.status(200).json({
            message: 'Question Deleted'
        });
    }).catch( err => {
        console.log(err);
        res.status(404).json({
            error: err
        });
    });
}