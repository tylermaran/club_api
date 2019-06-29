const express = require('express');
const router = express.Router();
const FeaturedController = require('../controllers/featured');


// G1: GET All News
router.get('/', FeaturedController.get_all_featured);

// G2: GET Featured Club by Month
router.get('/:month', FeaturedController.get_featured_month);

// P1: POST New Featured Club
router.post('/', FeaturedController.post_new_featured);

//P2: PATCH Existing Featured Club
// router.patch('/newsID', NewsController.patch_one_article);

// D1: DELETE Featured Club
router.delete('/:clubID', FeaturedController.delete_one_featured);


module.exports = router;