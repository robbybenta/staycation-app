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
        console.log(dataUser)
        user.create(dataUser)
            .then((data) => {
                res.redirect('/')
            })
            .catch((err) => {
                res.send(err)
            })
    }
}


module.exports = Controller