const express = require('express');
const router = express.Router();
const UserController = require('../controllers/users');


// G1: GET All Users
router.get('/', UserController.get_all_users);

// G2: GET Detail User
router.get('/:userID', UserController.get_one_user);


// P1: POST New User
router.post('/', UserController.post_new_user);


module.exports = router;