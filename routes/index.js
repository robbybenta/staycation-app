const express = require('express')
const session = require('express-session')
const router = express.Router()
const User = require('../controllers/controller-user')
const hotelRoutes = require('./hotelRoutes')
const userRoutes = require('./user')
const { hotel, user } = require('../models')

router.use(session({
    secret: 'staycation - app',
    resave: false,
    saveUninitialized: true
}))

router.use('/hotels', hotelRoutes)

router.get('/', (req, res) => {
    hotel.findAll({
        include: [{ model: user }]
    })
        .then(data => {
            res.render('home', { data: data })
        })
        .catch(err => {
            res.send(err.message)
        })
})

router.get('/register', User.register)
router.post('/register', User.registerAdd)
router.get('/login', User.login)



const secondMiddleWare = (req, res, next) => {
    if (req.body.email !== '' && req.body.password !== '') {
        req.session.email = req.body.email
        next()
    }
    else {
        res.redirect('home.ejs')
    }

}

router.use('/hotel', hotelRoutes)
router.use(userRoutes)

module.exports = router

