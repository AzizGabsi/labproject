const express = require('express')
const router = express.Router()
const {register, login, getPersonInfo } = require('../controllers/personControllers')
const { authMiddleware } = require('../middleware/authMiddleware')
const { check } = require('express-validator')

// @desc register user with role user 
// @params : post /api/user/register
// @access : PRIVATE
router.post('/register'
, 
[ check('email', "Email is not valid")
.isEmail()
.normalizeEmail(),
check('password', "Password must be at least 8 characters long!")
.isLength({min: 8})
]
,register)
router.post('/login', login)
router.get('/', authMiddleware, getPersonInfo)



module.exports = router