const express = require('express');
const router = express.Router();
const UserController = require('../controllers/users');


// G1: GET All Users
router.get('/', UserController.get_all_users);


// P1: POST New User
router.post('/', UserController.post_new_user);


module.exports = router;