const express = require('express');
const router = express.Router();
const ClubController = require('../controllers/clubs');

// Add Checkauth
// Add multer setup for images
// add file filter to set image guidelines

// G1: GET All - Return all Club Detail
router.get('/', ClubController.get_all_clubs);

// G2: GET Overview - Return basic detail for clubs.

// P1: POST New Club - Add a new Club
router.post('/', ClubController.post_new_club);

// P2: PATCH Existing Club
router.patch('/:clubID', ClubController.patch_existing_club);

// P3: POST New Image to Club
router.post('/images/:clubID', ClubController.post_new_image);

// D1: DELETE Existing Club
router.delete('/:clubID', ClubController.delete_existing_club);

module.exports = router;