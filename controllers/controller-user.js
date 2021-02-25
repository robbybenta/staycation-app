const express = require('express')
const { user } = require('../models')


class Controller {
    static register(req, res) {
        res.render('register.ejs')
    }
    static login(req, res) {
        res.render('login.ejs')
    }

    static registerAdd(req, res) {
        const dataUser = {
           ...req.body,
           phone_number:Number(req.body.phone_number)
        }
        user.create(dataUser)
            .then((data) => {
                res.redirect('/')
            })
            .catch((err) => {
                console.log(err)
                res.send(err.message)
            })
    }
}


module.exports = Controller