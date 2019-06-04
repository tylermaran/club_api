const express = require('express');
const router = express.Router();
const ClubController = require('../controllers/clubs');

// Add Checkauth
// Add multer setup for images
// add file filter to set image guidelines

// G1: GET All - Return all Club Detail
router.get('/', ClubController.get_all_clubs);

// G2: GET Overview - Return basic detail for clubs.
router.get('/:clubID', ClubController.get_one_club);

// G3: GET Survey Detail - Return Club detail + Survey detail
router.get('/survey/:clubID', ClubController.get_club_survey);

// G4: GET Geo Location
router.get('/search/location', ClubController.get_geo_location);

// P1: POST New Club - Add a new Club
router.post('/', ClubController.post_new_club);

// P2: PATCH Existing Club
router.patch('/:clubID', ClubController.patch_existing_club);

// P3: POST: Search Existing Club
router.post('/search', ClubController.search_existing_club);

// P3: POST New Image to Club
// router.post('/images/:clubID', ClubController.post_new_image);

// D1: DELETE Existing Club
router.delete('/:clubID', ClubController.delete_existing_club);

module.exports = router;