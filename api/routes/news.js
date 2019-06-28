const express = require('express');
const router = express.Router();
const NewsController = require('../controllers/news');


// G1: GET All News
router.get('/global/', NewsController.get_all_news);

// G2: GET News in State
router.get('/:state', NewsController.get_news_state);

// G3: GET Single Article
router.get('/:newsID', NewsController.get_one_news);

// P1: POST New Article
router.post('/', NewsController.post_new_news);

//P2: PATCH Existing Article
router.patch('/newsID', NewsController.patch_one_article);

module.exports = router;