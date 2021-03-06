const router = require('express').Router()
const HotelControl = require('../controllers/controller-hotel')
const isLogin = require('../middleware/islogin')

router.get('/', HotelControl.findAll)
router.get('/sewa/:id', HotelControl.hotelRentGet)
router.post('/sewa/:id', HotelControl.hotelRentPost)
router.get('/show-visitors/:id', HotelControl.showVisitors)
router.get('/add', HotelControl.addGet)
router.post('/add', HotelControl.addPost)
router.get('/edit/:id', HotelControl.editGet)
router.post('/edit/:id', HotelControl.editPost)
router.get('/delete/:id', HotelControl.deleteById)
router.get('/success', HotelControl.success)

module.exports = router 