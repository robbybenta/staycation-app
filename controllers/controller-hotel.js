const { hotel, user, order_detail } = require('../models')

class HotelControl {
    static findAll(req, res) {
        hotel.findAll({
            include: [{ model: user }]
        })
            .then(data => {
                res.render('hotel-list.ejs', { data: data })
            })
            .catch(err => {
                res.send(err.message)
            })
    }

    static addGet(req, res) {
        hotel.findAll()
            .then(data => {
                res.render('addHotel.ejs')
            })
            .catch(err => {
                res.send(err.message)
            })
    }

    static addPost(req, res) {
        const newData = {
            hotel_name: req.body.hotel_name,
            price: req.body.price,
            location: req.body.location,
            rating: req.body.rating
        }
        hotel.create(newData)
            .then(() => {
                res.redirect('/hotels')
            })
            .catch(err => {
                res.send(err)
            })
    }

    static editGet(req, res) {
        hotel.findByPk(req.params.id)
            .then(data => {
                res.render('editHotel.ejs', { data })
            })
            .catch(err => {
                res.send(err.message)
            })
    }

    static editPost(req, res) {
        const newData = {
            hotel_name: req.body.hotel_name,
            price: req.body.price,
            location: req.body.location,
            rating: req.body.rating
        }
        hotel.update(newData, { where: { id: req.params.id } })
            .then(() => {
                res.redirect('/hotels')
            })
            .catch(err => {
                res.send(err.message)
            })
    }

    static deleteById(req, res) {
        hotel.destroy({ where: { id: req.params.id } })
            .then(() => {
                res.redirect('/hotels')
            })
            .catch(err => {
                res.send(err.message)
            })
    }
    static findtest(req, res) {
        res.send('masuk')
    }
    static hotelRentGet(req, res) {
        hotel.findByPk(req.params.id)
            .then(data => {
                res.render('hotel-rent.ejs', { data })
                // res.send(data)
            })
            .catch((err)=>{
                res.send(err)
            })
    }
    static hotelRentPost(req, res) {
        const newData = {
            hotelId: req.params.id,
            day: req.body.day
        }
        order_detail.create(newData)
            .then(() => {
                res.redirect('/success')
            })
            .catch(err => {
                res.send(err.message)
            })
    }

    static showVisitors(req, res) {
        hotel.findByPk(req.params.id, { include: user })
            .then((data) => {
                res.render('show-visitors.ejs', { data: data })
            })
            .catch((err) => {
                res.send(err)
            })
    }
    static success(req, res) {
        res.render('success.ejs')
    }
}


module.exports = HotelControl