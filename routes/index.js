const express = require('express')
const session = require('express-session')
const router = express.Router()
const User = require('../controllers/controller-user')
const hotelRoutes = require('./hotelRoutes')
const userRoutes = require('./user')

router.use(session({
    secret: 'staycation - app',
    resave: false,
    saveUninitialized: true
  }))

router.get('/', (req, res) => {
    res.render('home.ejs',{data:false})
})




const secondMiddleWare = (req, res, next) => {
    if(req.body.email !== '' && req.body.password !== ''){
        req.session.email=req.body.email
        // console.log(req.session,'indexs')
        next()
    }
    else{
        res.redirect('/')
    }
    
}

// router.use(secondMiddleWare)

router.use('/hotel', hotelRoutes)
router.use(userRoutes)
// router.post('/register', User.registerAdd)
// router.get('/register', User.register)
// router.get('/login', User.login)
// router.post('/login',secondMiddleWare, User.loginSuccess)
// router.use('/logout', User.logout)

module.exports = router

