const express = require('express');
const router = express.Router();

const PostController = require('../controllers/posts');

router.get('/', PostController.getAllPosts);

module.exports = router;