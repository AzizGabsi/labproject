const express = require('express')
const router = express.Router()
const {addPost , getPosts,getUserPosts,  } = require('../controllers/postControllers')
const { authMiddleware } = require('../middleware/authMiddleware')




router.post('/newpost', authMiddleware, addPost )
router.get('/getposts', getPosts) //can be made private with auth middleware
router.get('/getuserposts/:id', getUserPosts)


module.exports = router

