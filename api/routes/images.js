const express = require('express');
const router = express.Router();
const ImageController = require('../controllers/images');

// G1: GET Existing Club
router.get('/', ImageController.get_existing_image);

// P1: POST New Image
router.post('/:clubID', ImageController.post_new_image);

// P2: PATCH Exising Image
// this will cover changing descriptions, and adjusting the image position (profile, etc.)

// D1: DELETE Existing Club

module.exports = router;

