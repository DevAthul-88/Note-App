const router = require('express').Router()

router.post('/register' , (req ,res) => {
    res.send('User Router')
})

router.post('/login' , (req ,res) => {
    res.send('Login')
})

module.exports = router