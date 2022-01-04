const router = require('express').Router()
const authMiddleware = require('../middleware/auth')
const userCtrl = require('../controllers/userCtrl')

router.post('/register' , userCtrl.createUser)

router.post('/login' , userCtrl.login)

router.get('/verify' , userCtrl.verifiedToken)

module.exports = router