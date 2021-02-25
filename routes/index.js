const express = require('express')
const router = express.Router()
const User = require('../controllers/controller-user')
const hotelRoutes = require('./hotelRoutes')


router.get('/', (req, res) => {
    res.render('home.ejs')
})


router.use('/hotel', hotelRoutes)
router.get('/register', User.register)
router.post('/register', User.registerAdd)
router.get('/login', User.login)



router.get('/register',User.register)
router.post('/register',User.registerAdd)
router.get('/login',User.login)
router.post('/login',User.loginSuccess)
module.exports=router

