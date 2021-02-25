const express = require('express')
const router = express.Router()
const User = require('../controllers/controller-user')
const isLogin = require('../middleware/islogin')



router.post('/register', User.registerAdd)
router.get('/register', User.register)
router.get('/member', User.showMember)
router.get('/member/:id', User.showHotel)
router.get('/login', User.login)
router.post('/login', User.loginSuccess)
router.use('/logout', User.logout)

module.exports = router