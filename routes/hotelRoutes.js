const router = require('express').Router()
const HotelControl = require('../controllers/controller-hotel')

router.get('/', HotelControl.findAll)
router.get('/add', HotelControl.addGet)
router.post('/add', HotelControl.addPost)
router.get('/edit/:id', HotelControl.editGet)
router.post('/edit/:id', HotelControl.editPost)
router.get('/delete/:id', HotelControl.deleteById)

module.exports = router 