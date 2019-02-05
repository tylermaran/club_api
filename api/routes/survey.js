const express = require('express');
const router = express.Router();
const SurveyController = require('../controllers/survey');

// G1: GET All Questions
router.get('/', SurveyController.get_all_questions);

// P1: POST A New Question
router.post('/', SurveyController.post_new_question);

// P2: PATCH An Existing Question
router.patch('/:questionID', SurveyController.patch_existing_question);

// D1: DELETE An Existing Question
router.delete('/:questionID', SurveyController.delete_existing_question);

module.exports = router;