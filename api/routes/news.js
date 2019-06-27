const express = require('express');
const router = express.Router();
const NewsController = require('../controllers/news');


// G1: GET All Users
router.get('/', NewsController.get_all_news);

// G2: GET Detail User
router.get('/:newsID', NewsController.get_one_news);

// P1: POST New User
router.post('/', NewsController.post_new_news);


module.exports = router;