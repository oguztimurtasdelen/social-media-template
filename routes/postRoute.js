const router = require('express').Router();
const postController = require('../controllers/postController');

router.get('/get-posts', postController.getPosts);

router.get('/merge-posts', postController.mergePosts);

module.exports = router;