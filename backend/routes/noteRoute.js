const router = require('express').Router()


router.route('/').get((req , res) => {
res.send('No route found')
})
.post()

router.route('/:id').get().put().delete()

module.exports = router